import React, {Component} from 'react';
import { connect } from 'react-redux';
import withChartService from '../hoc/with-chart-service';

import Chart from '../chart';
import EscapeButton from '../escape-button';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import { chartDataLoaded, chartDataRequested, chartDataError, goToLabelDetails } from '../../actions';

import defoltChartProps from './defolt-chart-props';
import getLabelIndex from '../chart/getLabelIndex';

import './chart-container.css';

class ChartContainer extends Component {

    componentDidMount() {
        const { chartService, chartDataLoaded, chartDataRequested, chartDataError } = this.props;

        chartDataRequested();
        chartService.getDataByYears()
            .then(chartData => chartDataLoaded(chartData))
            .catch(err => chartDataError(err));
    }

    labelClickHandler = (e, refs)=> {
        const { chartService, goToLabelDetails, month, year, yearIndex } = this.props;
        const index = getLabelIndex(e, refs);
        
        if (Number.isInteger(index) && !month) {
            if (!year) {
                chartService.getDataByMonth(index)
                    .then(chartData => goToLabelDetails(chartData))
                    .catch(err => chartDataError(err));
            } else if (!month) {
                chartService.getDataByDates(yearIndex, index, year)
                    .then(chartData => goToLabelDetails(chartData))
                    .catch(err => chartDataError(err));
            }
        }
    }

    escapeClickHandler = () => {
        const { chartService, goToLabelDetails, month, year, yearIndex } = this.props;
        
        if (month) {
            chartService.getDataByMonth(yearIndex)
                .then(chartData => goToLabelDetails(chartData))
                .catch(err => chartDataError(err));
        } else if (year) {
            chartService.getDataByYears()
                .then(chartData => goToLabelDetails(chartData))
                .catch(err => chartDataError(err));
        }
    }
    
    render() {
        const { error, loading, labels, label, data, month, year } = this.props;

        if (loading) return <Spinner />

        if (error) return <ErrorIndicator />

        let chartProps = defoltChartProps;
        chartProps.labels = labels;
        if (month) {
            chartProps.labels = chartProps.labels.map(num => num + 1 + '');
        }
        if (month) {
            chartProps.datasets[0].label = `${label} ${month} ${year}`
        } else if (year) {
            chartProps.datasets[0].label = `${label} ${year}`
        } else {
            chartProps.datasets[0].label = label
        };
        chartProps.datasets[0].data = data;

        const isButtonDisabled = !year;

        return (
            <div className='ChartContainer'>
                <EscapeButton escapeClickHandler={this.escapeClickHandler} disabled={isButtonDisabled} />
                <Chart chartProps={chartProps} labelClickHandler={this.labelClickHandler} />
            </div>
        )
    }
}

const mapStateToProps = ({ error, loading, labels, label, data, month, year, yearIndex }) => {
    return { error, loading, labels, label, data, month, year, yearIndex }
}

const mapDispatcToProps = { chartDataLoaded, chartDataRequested, chartDataError, goToLabelDetails }

export default withChartService()(connect(mapStateToProps, mapDispatcToProps)(ChartContainer));