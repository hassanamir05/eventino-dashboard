import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import './tooltip.css';

const LineChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");

        const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(0, "rgba(75, 192, 192, 0.4)");
        gradient1.addColorStop(1, "rgba(75, 192, 192, 0)");

        const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient2.addColorStop(0, "rgba(153, 102, 255, 0.4)");
        gradient2.addColorStop(1, "rgba(153, 102, 255, 0)");

        const gradient3 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient3.addColorStop(0, "rgba(255, 159, 64, 0.4)");
        gradient3.addColorStop(1, "rgba(255, 159, 64, 0)");

        const data = {
            labels: ["Sept", "Oct", "Nov", "Dec", "Jan"],
            datasets: [
                {
                    label: "Organiser Event",
                    data: [320, 450, 380, 420, 500],
                    fill: true,
                    borderColor: "rgba(75, 192, 192, 1)",
                    backgroundColor: gradient1,
                    borderWidth: 3,
                    tension: 0.4,
                    pointRadius: 3,
                    pointHoverRadius: 9,
                    pointHoverBorderWidth: 3,
                    pointBorderWidth: 0,
                    pointBackgroundColor: "rgba(75, 192, 192, 1)",
                    pointBorderColor: "#fff",

                },
                {
                    label: "Celebrity Event",
                    data: [500, 600, 700, 650, 750],
                    fill: true,
                    borderColor: "rgba(153, 102, 255, 1)",
                    backgroundColor: gradient2,
                    borderWidth: 3,
                    tension: 0.4,
                    pointRadius: 3,
                    pointHoverRadius: 9,
                    pointHoverBorderWidth: 3,
                    pointBorderWidth: 0,
                    pointBackgroundColor: "rgba(153, 102, 255, 1)",
                    pointBorderColor: "#fff",

                },
                {
                    label: "Personal Event",
                    data: [150, 130, 270, 250, 350],
                    fill: true,
                    borderColor: "rgba(255, 159, 64, 1)",
                    backgroundColor: gradient3,
                    borderWidth: 3,
                    tension: 0.4,
                    pointRadius: 3,
                    pointHoverRadius: 9,
                    pointHoverBorderWidth: 3,
                    pointBorderWidth: 0,
                    pointBackgroundColor: "rgba(255, 159, 64, 1)",
                    pointBorderColor: "#fff",

                }
            ],
        };

        const config = {
            type: 'line',
            data: data,
            options: {
                interaction: {
                    intersect: false,
                    mode: 'index',
                },
                plugins: {
                    tooltip: {
                        backgroundColor: '#fff',
                        titleColor: '#000',
                        bodyColor: '#000',
                        borderColor: '#ccc',
                        borderWidth: 1,
                        displayColors: true,
                        usePointStyle: true,
                        pointStyle: 'circle',
                        callbacks: {
                            labelColor: function (context) {
                                return {
                                    borderColor: context.dataset.borderColor,
                                    backgroundColor: context.dataset.borderColor,
                                    borderWidth: 2,
                                    borderRadius: 50,
                                    boxWidth: 10,
                                    boxHeight: 10,
                                };
                            }
                        },
                        titleFont: {
                            size: 16,
                            weight: 'bold'
                        },
                        bodyFont: {
                            size: 14
                        },
                    },
                    legend: {
                        labels: {
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    }
                }
            }
        };

        const chart = new Chart(ctx, config);

        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <div className="chart-container flex justify-center items-center" style={{ width: "100%", height: "500px", margin: "20px 0" }}>
            <canvas ref={chartRef} />
        </div>
    );
};

export default LineChart;
