const initialState = {
    error: null,
    loading: true,
    yearIndex: null,
    year: null,
    month: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CHART_DATA_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            } 
        case 'FETCH_CHART_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                label: action.payload.label,
                data: action.payload.data,
                labels: action.payload.labels,
                error: null
            };
        case 'FETCH_CHART_DATA_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case 'GO_TO_LABEL_DETAIL':
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                labels: action.payload.labels,
                year: action.payload.year,
                month: action.payload.month,
                yearIndex: action.payload.yearIndex,
                error: null
            }

        default:
            return state;
    }
}

export default reducer;