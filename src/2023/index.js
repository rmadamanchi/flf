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
        {label: 'Saturday', value: 34 },
        {label: 'Sunday', value: 32 },
        {label: 'Monday', value: 2 },
        {label: 'Wednesday', value: 2 },
        {label: 'Thursday', value: 4 },
        {label: 'Friday', value: 5 },
    ], {
        labelAlign: 'end',
        xLabelFontSize: 15
    });

    renderBarChart('months', [
        {label: 'January', value: 6 },
        {label: 'February', value: 5 },
        {label: 'March', value: 6 },
        {label: 'April', value: 5 },
        {label: 'May', value: 4 },
        {label: 'June', value: 9 },
        {label: 'July', value: 13 },
        {label: 'August', value: 11 },
        {label: 'September', value: 8 },
        {label: 'October', value: 4 },
        {label: 'November', value: 1 },
        {label: 'December', value: 7 },
    ]);

    renderPieChart('flight_types',  [
        { type: 'Solo', count: 489 },
        { type: 'Dual', count: 269 },
        { type: 'Demo', count: 42 },
    ]);

    renderBarChart('flights_by_day', [
        {label: 'Sat, Mar 4', value: 25 },
        {label: 'Sat, Oct 21', value: 24 },
        {label: 'Sun, Apr 30', value: 21 },
        {label: 'Sun, Apr 16', value: 20 },
        {label: 'Sat, Jul 29', value: 18 },
        {label: 'Sat, Dec 30', value: 17 },
        {label: 'Sat, Jul 8', value: 17 },
        {label: 'Sun, Mar 19', value: 16 },
        {label: 'Sat, Jan 14', value: 15 },
        {label: 'Sat, Jun 10', value: 15 },
        {label: 'Sun, Feb 5', value: 15 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('tows', [
        {label: 'Tom Barkow', value: 128 },
        {label: 'Greg Aaron', value: 110 },
        {label: 'Kelly Butler', value: 104 },
        {label: 'Kevin Jackson', value: 93 },
        {label: 'Lawrence Spinetta', value: 54 },
        {label: 'Pat Gibbons', value: 49 },
        {label: 'Smokey Doll', value: 48 },
        {label: 'Marc Augustin', value: 47 },
        {label: 'Peter Jarvis', value: 45 },
        {label: 'Doug Witkowski', value: 28 },
        {label: 'Charlie Ryan', value: 28 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('flights_by_pilot', [
        {label: 'Greg Aaron', value: 104 },
        {label: 'Rider CAP', value: 60 },
        {label: 'Lawrence Spinetta', value: 59 },
        {label: 'Bill Brinkman', value: 55 },
        {label: 'Jason Greene', value: 41 },
        {label: 'Mitch Lubars', value: 38 },
        {label: 'Tom Hogerefe', value: 37 },
        {label: 'Luis Mailly', value: 35 },
        {label: 'Paul Slutes', value: 34 },
        {label: 'Ed Khan', value: 34 },
        {label: 'Andre DeBaghy', value: 28 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('solo_flights_by_pilot', [
        {label: 'Jason Greene', value: 31 },
        {label: 'Paul Slutes', value: 29 },
        {label: 'Andre DeBaghy', value: 27 },
        {label: 'Luis Mailly', value: 25 },
        {label: 'Mitch Lubars', value: 24 },
        {label: 'Greg Aaron', value: 24 },
        {label: 'Ed Khan', value: 23 },
        {label: 'Ely Bins', value: 22 },
        {label: 'Jon Henderson', value: 22 },
        {label: 'Lawrence Spinetta', value: 19 },
        {label: 'Rajesh Madamanchi', value: 18 },

    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('dual_flights_by_pilot', [
        {label: 'Greg Aaron', value: 80 },
        {label: 'Lawrence Spinetta', value: 40 },
        {label: 'Bill Brinkman', value: 39 },
        {label: 'Tom Hogerefe', value: 23 },
        {label: 'Charlie Dunifer', value: 22 },
        {label: 'Justin Knaplund', value: 17 },
        {label: 'Mitch Lubars', value: 14 },
        {label: 'Friedman Yoni', value: 14 },
        {label: 'Ingo Kuenzel', value: 13 },
        {label: 'Peter English', value: 12 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('demo_flights', [
        {label: 'Justin Knaplund', value: 14 },
        {label: 'Peter English', value: 8 },
        {label: 'Greg Aaron', value: 7 },
        {label: 'Lawrence Spinetta', value: 4 },
        {label: 'Charlie Dunifer', value: 3 },
        {label: 'Andy Maag', value: 2 },
        {label: 'Tom Hogerefe', value: 1 },
        {label: 'Hogrefe Tom', value: 1 },
        {label: 'Ingo Kuenzel', value: 1 },
        {label: 'Ely Bins', value: 1 },

    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })


    renderBarChart('tows_per_day', [
        {label: 'Smokey Doll (Sat, Mar 4)', value: 25 },
        {label: 'Peter Jarvis (Sat, Jul 8)', value: 17 },
        {label: 'Greg Aaron (Sun, Apr 30)', value: 16 },
        {label: 'Marc Augustin (Sat, Oct 21)', value: 16 },
        {label: 'Marc Augustin (Sun, Mar 19)', value: 16 },
        {label: 'Kevin Jackson (Sat, Jan 14)', value: 15 },
        {label: 'Kelly Butler (Sat, May 27)', value: 15 },
        {label: 'Lawrence Spinetta (Sat, Jun 10)', value: 15 },
        {label: 'Tom Barkow (Sat, Sep 2)', value: 15 },
        {label: 'Greg Aaron (Sun, Feb 5)', value: 14 },
        {label: 'Charlie Ryan (Sat, Sep 23)', value: 14 },

    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('flights_per_day', [
        {label: 'Bill Brinkman (Sun, Jun 25)', value: 8 },
        {label: 'Greg Aaron (Sat, Aug 5)', value: 7 },
        {label: 'Andy Maag (Sat, Mar 4)', value: 7 },
        {label: 'Greg Aaron (Sun, Oct 22)', value: 6 },
        {label: 'Greg Aaron (Sat, Nov 25)', value: 6 },
        {label: 'Lawrence Spinetta (Sat, May 27)', value: 6 },
        {label: 'Bill Brinkman (Sun, Jul 2)', value: 6 },
        {label: 'Greg Aaron (Sat, Sep 2)', value: 6 },
        {label: 'Justin Knaplund (Sat, Mar 4)', value: 6 },
        {label: 'Peter English (Sat, Oct 21)', value: 5 },
        {label: 'Bill Brinkman (Sat, Jul 29)', value: 5 },

    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('active_days', [
        {label: 'Greg Aaron', value: 50 },
        {label: 'Lawrence Spinetta', value: 33 },
        {label: 'Andre DeBaghy', value: 28 },
        {label: 'Luis Mailly', value: 26 },
        {label: 'Ed Khan', value: 25 },
        {label: 'Mitch Lubars', value: 24 },
        {label: 'Ely Bins', value: 23 },
        {label: 'Jason Greene', value: 22 },
        {label: 'Bill Brinkman', value: 22 },
        {label: 'Paul Slutes', value: 19 },
        {label: 'Jon Henderson', value: 18 },

    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('longest_flights', [
        {label: 'Ely Bins (Sat, Sep 2)', value: 364 },
        {label: 'Lawrence Spinetta (Sat, Jul 29)', value: 362 },
        {label: 'Ely Bins (Sat, Aug 26)', value: 360 },
        {label: 'Lawrence Spinetta (Wed, Aug 30)', value: 360 },
        {label: 'Ely Bins (Wed, Aug 30)', value: 345 },
        {label: 'Ely Bins (Sun, Aug 20)', value: 342 },
        {label: 'Ely Bins (Thu, Aug 17)', value: 323 },
        {label: 'Lawrence Spinetta (Thu, Aug 17)', value: 320 },
        {label: 'Lawrence Spinetta (Sun, Jul 30)', value: 315 },
        {label: 'Ely Bins (Sat, Jul 29)', value: 313 },
        {label: 'Lawrence Spinetta (Sun, Sep 3)', value: 300 },


    ], {
        indexAxis: 'y',
        yLabelFontSize: 25,
        formatter: timeFormatter
    })

    renderBarChart('total_flight_time', [
        {label: 'Ely Bins', value: 4889 },
        {label: 'Lawrence Spinetta', value: 3622 },
        {label: 'Andre DeBaghy', value: 3077 },
        {label: 'Greg Aaron', value: 2418 },
        {label: 'Mitch Lubars', value: 2163 },
        {label: 'Ed Khan', value: 1510 },
        {label: 'Luis Mailly', value: 1270 },
        {label: 'Jon Henderson', value: 1017 },
        {label: 'Jason Greene', value: 916 },
        {label: 'Bill Brinkman', value: 861 },
        {label: 'Scott Marshall', value: 851 },

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