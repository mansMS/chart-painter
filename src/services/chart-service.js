export default class ChartService {
    sourceUrl = './chartData.json';
    
    getResource = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    }

    getDataByYears = async () => {
        const chartData = await this.getResource(this.sourceUrl);
        const label = chartData.label;
        const labels = chartData.data.map(yearObj => yearObj.year);
        const data = chartData.data.map(yearObj => yearObj.amount);
        return {label, labels, data}
    }

    getDataByMonth = async (yearIndex) => {
        const chartData = await this.getResource(this.sourceUrl);
        const labels = chartData.data[yearIndex].months.map(string => string.month);
        const data = chartData.data[yearIndex].months.map(string => string.amount);
        return {labels, data, yearIndex, year: chartData.data[yearIndex].year}
    }

    getDataByDates = async (yearIndex, monthIndex, year) => {
        const chartData = await this.getResource(this.sourceUrl);
        const labels = chartData.data[yearIndex].months[monthIndex].days.map((_, index) => index);
        const data = chartData.data[yearIndex].months[monthIndex].days.map(num => num);
        return {labels, data, year, yearIndex, month: chartData.data[yearIndex].months[monthIndex].month}
    }
}