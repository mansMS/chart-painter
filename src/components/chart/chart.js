import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {

    labelClickHandler = (e)=> {
        this.props.labelClickHandler(e, this.refs);
    }

    render() {
        const { chartProps } = this.props;
        return (
            <div>
                <Line ref="chart" data={chartProps} options={{onClick: this.labelClickHandler}}/>
            </div>
        )
    }
}

export default Chart;