import Chart from 'chart.js/auto'
import 'chart.js/helpers'
import ChartDataLabels from 'chartjs-plugin-datalabels';

(async function() {
    Chart.register(ChartDataLabels);

    function renderBarChart(id, data, options) {
        options = options || {}
        new Chart(
            document.getElementById(id),
            {
                type: 'bar',
                options: {
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: options.xLabelFontSize || 12,
                                }
                            }
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: options.yLabelFontSize || 12,
                                }
                            }
                        }
                    },
                    animation: false,
                    indexAxis: options.indexAxis || 'x',
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: false
                        },
                        datalabels: {
                            color: 'black',
                            font: {
                                size: '14px',
                                weight: 'bold',
                            },
                            anchor: 'end',
                            align: options.labelAlign || 'start',
                            formatter: options.formatter || null
                        }
                    }
                },
                data: {
                    labels: data.map(row => row.label),
                    datasets: [
                        {
                            data: data.map(row => row.value)
                        }
                    ]
                }
            }
        );
    }

    function renderPieChart(id, data) {
        new Chart(
            document.getElementById(id),
            {
                type: 'pie',
                options: {
                    animation: false,
                    plugins: {
                        datalabels: {
                            color: 'black',
                            font: {
                                size: '14px',
                            },
                            formatter: function(value, context) {
                                return context.chart.data.labels[context.dataIndex] + "\n" + context.chart.data.datasets[0].data[context.dataIndex];
                            }
                        }
                    }
                },
                data: {
                    labels: data.map(row => row.type),
                    datasets: [
                        {
                            data: data.map(row => row.count)
                        }
                    ]
                }
            }
        );
    }

    function timeFormatter(value, context) {
        return Math.floor(value/60) + "h " + value%60 + "m"
    }

    renderBarChart('days', [
        {label: 'Saturday', value: 26 },
        {label: 'Sunday', value: 24 },
        {label: 'Thursday', value: 3 },
        {label: 'Friday', value: 2 },
        {label: 'Monday', value: 1 },
        {label: 'Tuesday', value: 1 },
    ], {
        labelAlign: 'end',
        xLabelFontSize: 15
    });

    renderBarChart('months', [
        {label: 'August', value: 11 },
        {label: 'September', value: 9 },
        {label: 'March', value: 8 },
        {label: 'June', value: 8 },
        {label: 'July', value: 8 },
        {label: 'May', value: 4 },
        {label: 'February', value: 4 },
        {label: 'January', value: 3 },
        {label: 'April', value: 2 },
    ]);

    renderPieChart('flight_types',  [
        { type: 'Solo', count: 489 },
        { type: 'Dual', count: 269 },
        { type: 'Demo', count: 42 },
    ]);

    renderBarChart('flights_by_day', [
        {label: 'Sat, Sep 14', value: 22 },
        {label: 'Sat, Feb 24', value: 22 },
        {label: 'Sun, Jun 23', value: 22 },
        {label: 'Sat, Mar 2', value: 20 },
        {label: 'Sat, Sep 7', value: 20 },
        {label: 'Sat, Mar 23', value: 20 },
        {label: 'Sat, Aug 10', value: 19 },
        {label: 'Sat, Jun 22', value: 19 },
        {label: 'Sat, Aug 3', value: 19 },
        {label: 'Sat, Aug 24', value: 19 },
        {label: 'Sat, Sep 21', value: 18 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('tows', [
        {label: 'Ron Wallis', value: 96 },
        {label: 'Doug Witkowski', value: 91 },
        {label: 'Pat Gibbons', value: 82 },
        {label: 'Greg Aaron', value: 69 },
        {label: 'Marc Augustin', value: 54 },
        {label: 'Peter Jarvis', value: 44 },
        {label: 'Lawrence Spinetta', value: 42 },
        {label: 'Tom Barkow', value: 40 },
        {label: 'Smokey Doll', value: 35 },
        {label: 'Schaefer Richard', value: 23 },
        {label: 'Augustine Marc', value: 15 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('flights_by_pilot', [
        {label: 'Greg Aaron', value: 80 },
        {label: 'Bill Brinkman', value: 57 },
        {label: 'Lawrence Spinetta', value: 51 },
        {label: 'Justin Knaplund', value: 33 },
        {label: 'Ingo Kuenzel', value: 32 },
        {label: 'Peter English', value: 28 },
        {label: 'Zimri Leisher', value: 27 },
        {label: 'Ely Bins', value: 26 },
        {label: 'Ajeeth Rajan', value: 24 },
        {label: 'Josh Hagler', value: 23 },
        {label: 'Luis Mailly', value: 22 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('solo_flights_by_pilot', [
        {label: 'Ely Bins', value: 25 },
        {label: 'Luis Mailly', value: 22 },
        {label: 'Andre DeBaghy', value: 21 },
        {label: 'Lawrence Spinetta', value: 18 },
        {label: 'Rajesh Madamanchi', value: 17 },
        {label: 'Greg Aaron', value: 14 },
        {label: 'Ed Khan', value: 13 },
        {label: 'Zimri Leisher', value: 13 },
        {label: 'Ron Wallis', value: 11 },
        {label: 'Doug Witkowski', value: 11 },
        {label: 'Scott Marshall', value: 10 },

    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('dual_flights_by_pilot', [
        {label: 'Greg Aaron', value: 66 },
        {label: 'Bill Brinkman', value: 53 },
        {label: 'Lawrence Spinetta', value: 33 },
        {label: 'Justin Knaplund', value: 30 },
        {label: 'Ingo Kuenzel', value: 26 },
        {label: 'Josh Hagler', value: 21 },
        {label: 'Peter English', value: 21 },
        {label: 'Zimri Leisher', value: 14 },
        {label: 'Ajeeth Rajan', value: 14 },
        {label: 'Atharva Sehgal', value: 10 },
        {label: 'Kip Harris', value: 10 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('demo_flights', [
        {label: 'Justin Knaplund', value: 27 },
        {label: 'Peter English', value: 16 },
        {label: 'Greg Aaron', value: 9 },
        {label: 'Lawrence Spinetta', value: 8 },
        {label: 'Ingo Kuenzel', value: 3 },
        {label: 'Mitch Lubars', value: 3 },
        {label: 'Bill Brinkman', value: 1 },

    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })


    renderBarChart('tows_per_day', [
        {label: 'Doug Witkowski (Sun, Jun 23)', value: 20 },
        {label: 'Marc Augustin (Sat, Aug 10)', value: 19 },
        {label: 'Doug Witkowski (Sat, Aug 3)', value: 19 },
        {label: 'Pat Gibbons (Sat, Jun 22)', value: 19 },
        {label: 'Greg Aaron (Sun, Jun 9)', value: 17 },
        {label: 'Ron Wallis (Sat, Jun 15)', value: 15 },
        {label: 'Peter Jarvis (Sat, Jul 20)', value: 15 },
        {label: 'Greg Aaron (Sat, Sep 21)', value: 14 },
        {label: 'Tom Barkow (Sat, Mar 2)', value: 14 },
        {label: 'Pat Gibbons (Sat, Mar 23)', value: 14 },
        {label: 'Ron Wallis (Sun, Sep 22)', value: 14 },

    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('flights_per_day', [
        {label: 'Bill Brinkman (Sat, Aug 31)', value: 8 },
        {label: 'Greg Aaron (Sat, Jun 15)', value: 8 },
        {label: 'Justin Knaplund (Sat, Sep 14)', value: 8 },
        {label: 'Bill Brinkman (Sat, Aug 24)', value: 8 },
        {label: 'Peter English (Sat, Sep 7)', value: 7 },
        {label: 'Bill Brinkman (Sun, May 19)', value: 7 },
        {label: 'Greg Aaron (Sat, Jul 20)', value: 7 },
        {label: 'Justin Knaplund (Sat, Sep 7)', value: 6 },
        {label: 'Bill Brinkman (Sat, Sep 14)', value: 6 },
        {label: 'Ingo Kuenzel (Sun, Jul 14)', value: 6 },
        {label: 'Greg Aaron (Sun, May 19)', value: 6 },

    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('active_days', [
        {label: 'Greg Aaron', value: 31 },
        {label: 'Lawrence Spinetta', value: 28 },
        {label: 'Ely Bins', value: 24 },
        {label: 'Andre DeBaghy', value: 20 },
        {label: 'Ron Wallis', value: 20 },
        {label: 'Luis Mailly', value: 19 },
        {label: 'Bill Brinkman', value: 14 },
        {label: 'Doug Witkowski', value: 14 },
        {label: 'Ajeeth Rajan', value: 14 },
        {label: 'Kip Harris', value: 13 },
        {label: 'Josh Hagler', value: 12 },

    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('longest_flights', [
        {label: 'Lawrence Spinetta (Sat, Jul 20)', value: 330 },
        {label: 'Ely Bins (Sat, Jul 20)', value: 325 },
        {label: 'Ely Bins (Tue, Aug 13)', value: 319 },
        {label: 'Jason Greene (Thu, Sep 19)', value: 311 },
        {label: 'Ely Bins (Sun, Jun 30)', value: 305 },
        {label: 'Ely Bins (Sat, Sep 21)', value: 303 },
        {label: 'Ely Bins (Thu, Jul 11)', value: 293 },
        {label: 'Ely Bins (Sun, Aug 18)', value: 289 },
        {label: 'Ely Bins (Sat, Jun 22)', value: 288 },
        {label: 'Lawrence Spinetta (Sun, Jun 30)', value: 286 },
        {label: 'Ely Bins (Sun, Sep 22)', value: 283 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25,
        formatter: timeFormatter
    })

    renderBarChart('total_flight_time', [
        {label: 'Ely Bins', value: 5321 },
        {label: 'Lawrence Spinetta', value: 3682 },
        {label: 'Andre DeBaghy', value: 2081 },
        {label: 'Greg Aaron', value: 2075 },
        {label: 'Luis Mailly', value: 1429 },
        {label: 'Kip Harris', value: 1086 },
        {label: 'Bill Brinkman', value: 953 },
        {label: 'Ingo Kuenzel', value: 872 },
        {label: 'Rajesh Madamanchi', value: 851 },
        {label: 'Ed Khan', value: 812 },
        {label: 'Jason Greene', value: 735 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25,
        formatter: timeFormatter
    })


    var current = 0;
    function forward() {
        const slides = document.getElementsByClassName("slide"); 
        current++;
        if (current == slides.length) {
            current = 0;
        }
        showCurrent();
    }

    function back() {
        const slides = document.getElementsByClassName("slide"); 
        current--;
        if (current == -1) {
            current = slides.length - 1;
        }
        showCurrent();
    }

    function showCurrent() {
        const slides = document.getElementsByClassName("slide"); 
        for (let i=0; i < slides.length; i++) {
            slides[i].className = current == i ? "slide current" : "slide";
        }

        document.getElementById('pageno').innerHTML = current + 1;
    }


    document.addEventListener('keydown', e => {
        if (e.code === 'Space' || e.code == 'ArrowRight') {
          forward();
          e.preventDefault();
        }
        if (e.code == 'ArrowLeft') {
            back();
            e.preventDefault();
          }
    });

    const mouseDelta = 6;
    let mouseX;
    let mouseY;
    document.addEventListener('mousedown', function (event) {
        mouseX = event.pageX;
        mouseY = event.pageY;
    });
    document.addEventListener('mouseup', function (event) {
        const diffX = Math.abs(event.pageX - mouseX);
        const diffY = Math.abs(event.pageY - mouseY);

        if (diffX < mouseDelta && diffY < mouseDelta) {
            forward();
        }
    });

})();