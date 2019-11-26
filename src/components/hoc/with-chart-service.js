import React from 'react';
import { ChartServiceConsumer } from '../chart-service-contex';

const withChartService = () => (Wrapped) => {
    return (props) => {
        return (
            <ChartServiceConsumer>
                {
                    (chartService) => {
                        return (<Wrapped {...props} chartService={chartService}/>)
                    }
                }
            </ChartServiceConsumer>
        )
    }
};

export default withChartService;