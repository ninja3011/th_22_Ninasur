// ===========================|| DASHBOARD - TOTAL ORDER MONTH CHART ||=========================== //
export const TempData = (data, limits) => {
    const chartData = {
        type: 'line',
        height: 100,
        options: {
            chart: {
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#fff'],
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            yaxis: {
                min: limits ? limits[0] - 10 : 0,
                max: limits ? limits[1] + 10 : 50
            },
            tooltip: {
                theme: 'dark',
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: 'Total Order'
                },
                marker: {
                    show: false
                }
            }
        },
        series: [
            {
                name: 'Temperature',
                data: data
            }
        ]
    };
    return chartData
};
