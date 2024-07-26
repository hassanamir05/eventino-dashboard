import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import './tooltip.css'

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
                    pointRadius: 1,
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
                    pointRadius: 1,
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
                    pointRadius: 1,
                    pointHoverRadius: 9,
                    pointHoverBorderWidth: 3,
                    pointBorderWidth: 0,
                    pointBackgroundColor: "rgba(255, 159, 64, 1)",
                    pointBorderColor: "#fff",
                },
            ],
        };

        const config = {
            type: "line",
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: {
                            usePointStyle: true,
                        },
                    },
                    tooltip: {
                        enabled: false,
                        external: function (context) {
                            const tooltipModel = context.tooltip;
                            let tooltipEl = document.getElementById('chartjs-tooltip');

                            if (!tooltipEl) {
                                tooltipEl = document.createElement('div');
                                tooltipEl.id = 'chartjs-tooltip';
                                tooltipEl.innerHTML = `<div class="tooltip-header"></div><div class="tooltip-body"></div>`;
                                document.body.appendChild(tooltipEl);
                            }

                            if (tooltipModel.opacity === 0) {
                                tooltipEl.style.opacity = 0;
                                return;
                            }

                            if (tooltipModel.body) {
                                const title = tooltipModel.title || [];
                                const bodyLines = tooltipModel.body.map(b => b.lines);

                                const header = tooltipEl.querySelector('.tooltip-header');
                                const body = tooltipEl.querySelector('.tooltip-body');

                                header.innerHTML = title[0] || 'K';
                                body.innerHTML = bodyLines[0] || 'K';
                            }

                            const position = context.chart.canvas.getBoundingClientRect();
                            tooltipEl.style.opacity = 1;
                            tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                            tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                            tooltipEl.style.font = tooltipModel.options.bodyFont.string;
                            tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
                            tooltipEl.style.pointerEvents = 'none';
                        },
                    },
                },
                interaction: {
                    mode: "nearest",
                    intersect: true,
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: "rgba(200, 200, 200, 0.2)",
                        },
                        ticks: {
                            callback: function (value) {
                                return value + "K";
                            },
                        },
                    },
                },
                hover: {
                    mode: "nearest",
                    intersect: true,
                    onHover: function (e, elements) {
                        const chart = e.chart;
                        if (elements.length) {
                            const element = elements[0];
                            const dataset = chart.data.datasets[element.datasetIndex];
                            dataset.pointRadius = dataset.data.map((_, idx) => (idx === element.index ? 6 : 0));
                            chart.update();
                        } else {
                            chart.data.datasets.forEach((dataset) => {
                                dataset.pointRadius = dataset.data.map(() => 0);
                            });
                            chart.update();
                        }
                    },
                },
            },
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
