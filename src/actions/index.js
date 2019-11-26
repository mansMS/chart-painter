const chartDataRequested = () => {
    return {
        type: 'FETCH_CHART_DATA_REQUEST'
    }
}

const chartDataLoaded = (newChartData) => {
    return {
        type: 'FETCH_CHART_DATA_SUCCESS',
        payload: newChartData
    };
}

const chartDataError = (error) => {
    return {
        type: 'FETCH_CHART_DATA_FAILURE',
        payload: error
    }
}
const goToLabelDetails = (newChartData) => {
    return {
        type: 'GO_TO_LABEL_DETAIL',
        payload: newChartData
    }
}

export { chartDataLoaded, chartDataRequested, chartDataError, goToLabelDetails };