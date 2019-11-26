const getLabelIndex = (e, refs) => {

    let labelIndex;
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    
    const scales = refs.chart.chartInstance.scales['x-axis-0'];

    const chartElements  = refs.chart.chartInstance.getElementAtEvent(e)
    if (chartElements.length) {
        labelIndex = chartElements[0]._index;
        return labelIndex;
    }

    const maxLabelHeight = Math.round(scales._labelSizes.highest.height);
    const labelsCentrCoordinates = scales._labelItems.map(({x: fractionalX, y: fractionalY}) => {
        return {x: Math.round(fractionalX), y: Math.round(fractionalY)}
    });

    let labelsArea = labelsCentrCoordinates.map(({x, y}, index) => {
        return {x1: x - scales._labelItems[index].label.length * 6.7 / 2, y1: y,
                x2: x + scales._labelItems[index].label.length * 6.7 / 2, y2: y + maxLabelHeight}
    });

    if (!scales._labelItems[0].rotation) {
        labelsArea.forEach((labelArea, index) => {
            if (labelArea.x1 <= mouseX && mouseX <= labelArea.x2 && labelArea.y1 <= mouseY && mouseY <= labelArea.y2) {
                labelIndex = index;
            }
        });
    } else {
        const clickDepth = mouseY - scales._labelItems[0].y;
        const clickLength = clickDepth / Math.tan(-scales._labelItems[0].rotation);
        const labelLength = Math.sqrt(clickDepth ** 2 + clickLength ** 2);
        const intersectionPoint = mouseX + clickLength;

        labelsCentrCoordinates.forEach(({x}, index) => {
            if (
                clickDepth >= 0 &&
                x - maxLabelHeight * 0.8 <= intersectionPoint && 
                intersectionPoint <= x + maxLabelHeight * 0.8 &&
                labelLength <= labelsArea[index].x2 - labelsArea[index].x1
            ) {
                labelIndex = index;
            }
        });
    }
    return labelIndex;
}

export default getLabelIndex;