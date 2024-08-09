import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import './tooltip.css';
import { VisibilityOff } from "@mui/icons-material";

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
                    data: [520, 450, 580, 420, 500],
                    fill: true,
                    borderColor: "#4DBF5D",
                    pointBackgroundColor: "#4DBF5D",
                    backgroundColor: gradient1,
                    borderWidth: 4,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 9,
                    hoverBackgroundColor: "#4DBF5D",
                    hoverBorderColor: '#fff',
                    hoverBorderWidth: 5,
                },
                {
                    label: "Celebrity Event",
                    data: [400, 420, 560, 470, 560],
                    fill: true,
                    borderColor: "#506DF9",
                    pointBackgroundColor: "#506DF9",
                    backgroundColor: gradient2,
                    borderWidth: 4,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 9,
                    hoverBackgroundColor: "#506DF9",
                    hoverBorderColor: '#fff',
                    hoverBorderWidth: 5,
                },
                {
                    label: "Personal Event",
                    data: [350, 380, 450, 400, 540],
                    fill: true,
                    borderColor: "#864DBF",
                    pointBackgroundColor: "#864DBF",
                    backgroundColor: gradient3,
                    borderWidth: 4,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 9,
                    hoverBackgroundColor: "#864DBF",
                    hoverBorderColor: '#fff',
                    hoverBorderWidth: 5,
                }
            ],
        };

        const config = {
            type: 'line',
            data: data,
            options: {
                interaction: {
                    intersect: false,
                    mode: 'nearest',
                },
                plugins: {
                    tooltip: {
                        backgroundColor: '#fff',
                        titleColor: '#000',
                        bodyColor: '#000',
                        borderColor: '#506DF9',
                        borderWidth: 2,
                        padding: 15,
                        displayColors: true,
                        usePointStyle: true,
                        callbacks: {
                            label: function (context) {
                                const label = context.dataset.label || '';
                                const value = context.raw || '';
                                return `${label}: ${value} Participants`;
                            },
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
                            size: 0,
                        },
                        bodyFont: {
                            size: 16,
                            padding: 2
                        },
                    },
                    legend: {
                        labels: {
                            usePointStyle: false,
                            generateLabels: function (chart) {
                                return chart.data.datasets.map((dataset, i) => {
                                    return {
                                        text: dataset.label,
                                        fillStyle: dataset.borderColor,
                                        strokeStyle: dataset.borderColor,
                                        lineCap: 'line',
                                        lineDash: [],
                                        lineDashOffset: 0,
                                        lineJoin: 'line',
                                        lineWidth: 1,
                                        datasetIndex: i
                                    };
                                });
                            }
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
