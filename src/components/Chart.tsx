import React from 'react';
import CanvasJSReact from '../utils/Canvas/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = () => {
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2",
        axisY: {
            title: "بازدید",
            titleFontFamily: "yekan bakh"
        },
        axisX: {
            prefix: "هفته ",
            interval: 2,
            labelFontFamily: "yekan bakh",
            titleFontFamily: "yekan bakh"
        },
        data: [{
            type: "line",
            toolTipContent: "هفته {x} : {y} بازدید",
            color: "#ff5a5f",
            dataPoints: [
                { x: 1, y: 90 },
                { x: 2, y: 4 },
                { x: 3, y: 20 },
                { x: 4, y: 10 },
                { x: 5, y: 40 },
                { x: 6, y: 17 },
                { x: 7, y: 70 },
                { x: 8, y: 7 },
                { x: 9, y: 3 },
                { x: 10, y: 1 },
                { x: 11, y: 20 },
                { x: 12, y: 12 },
                { x: 13, y: 14 },
                { x: 14, y: 11 },
                { x: 15, y: 19 },
                { x: 16, y: 30 },
                { x: 17, y: 40 },
                { x: 18, y: 10 },
            ]
        }]
    }
    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
}

export default Chart;