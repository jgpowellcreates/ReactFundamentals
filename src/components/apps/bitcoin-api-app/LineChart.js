import React, {useState, useEffect} from 'react';
import {Chart, Line} from 'chart.js';

const LineChart = (props) => {

    const [dates, setDates] = useState([]);
    const [payout, setPayout] = useState([]);

    useEffect(() => {
        const unsortedData = props.data;
        let dates = [];
        let payout = [];
        for (let item in unsortedData) {
            dates.push(item)
            payout.push(unsortedData[item])
        }
        setDates(dates);
        setPayout(payout);
    })

    useEffect(() => {
        var chartContext = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(chartContext, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    data: payout,
                    backgroundColor: '#d9514e80',
                    borderColor: '#d9514e',
                    borderWidth: 2
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxis: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }, [])

    return (
        <canvas id='myChart'></canvas>
    )
}

export default LineChart;