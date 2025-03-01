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
        {label: 'Saturday', value: 37 },
        {label: 'Sunday', value: 33 },
        {label: 'Thursday', value: 4 },
        {label: 'Friday', value: 2 },
        {label: 'Monday', value: 1 },
        {label: 'Tuesday', value: 1 },
    ], {
        labelAlign: 'end',
        xLabelFontSize: 15
    });

    renderBarChart('months', [
        {label: 'August', value: 11 },
        {label: 'October', value: 9 },
        {label: 'September', value: 9 },
        {label: 'June', value: 8 },
        {label: 'July', value: 8 },
        {label: 'December', value: 8 },
        {label: 'March', value: 8 },
        {label: 'November', value: 4 },
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
        {label: 'Sat, Nov 9', value: 23 },
        {label: 'Sat, Feb 24', value: 22 },
        {label: 'Sun, Jun 23', value: 22 },
        {label: 'Sat, Sep 14', value: 22 },
        {label: 'Sat, Mar 2', value: 20 },
        {label: 'Sat, Mar 23', value: 20 },
        {label: 'Sat, Oct 5', value: 20 },
        {label: 'Sat, Sep 7', value: 20 },
        {label: 'Sat, Jun 22', value: 19 },
        {label: 'Sat, Aug 10', value: 19 },
        {label: 'Sat, Aug 3', value: 19 },

    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('tows', [
        {label: 'Ron Wallis', value: 121 },
        {label: 'Doug Witkowski', value: 103 },
        {label: 'Pat Gibbons', value: 89 },
        {label: 'Greg Aaron', value: 81 },
        {label: 'Peter Jarvis', value: 75 },
        {label: 'Marc Augustin', value: 60 },
        {label: 'Lawrence Spinetta', value: 48 },
        {label: 'Schaefer Richard', value: 45 },
        {label: 'Tom Barkow', value: 40 },
        {label: 'Smokey Doll', value: 35 },
        {label: 'Augustine Marc', value: 26 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('flights_by_pilot', [
        {label: 'Greg Aaron', value: 100 },
        {label: 'Lawrence Spinetta', value: 76 },
        {label: 'Bill Brinkman', value: 72 },
        {label: 'Justin Knaplund', value: 40 },
        {label: 'Peter English', value: 37 },
        {label: 'Ajeeth Rajan', value: 36 },
        {label: 'Ely Bins', value: 34 },
        {label: 'Ingo Kuenzel', value: 33 },
        {label: 'Zimri Leisher', value: 31 },
        {label: 'Kip Harris', value: 26 },
        {label: 'Luis Mailly', value: 26 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('solo_flights_by_pilot', [
        {label: 'Ely Bins', value: 33 },
        {label: 'Luis Mailly', value: 26 },
        {label: 'Andre DeBaghy', value: 24 },
        {label: 'Lawrence Spinetta', value: 24 },
        {label: 'Greg Aaron', value: 22 },
        {label: 'Rajesh Madamanchi', value: 17 },
        {label: 'Ed Khan', value: 17 },
        {label: 'Ajeeth Rajan', value: 16 },
        {label: 'Kip Harris', value: 16 },
        {label: 'Zimri Leisher', value: 15 },
        {label: 'Jon Henderson', value: 13 },

    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('dual_flights_by_pilot', [
        {label: 'Greg Aaron', value: 78 },
        {label: 'Bill Brinkman', value: 67 },
        {label: 'Lawrence Spinetta', value: 52 },
        {label: 'Justin Knaplund', value: 33 },
        {label: 'Peter English', value: 27 },
        {label: 'Ingo Kuenzel', value: 26 },
        {label: 'Josh Hagler', value: 23 },
        {label: 'Ajeeth Rajan', value: 20 },
        {label: 'Zimri Leisher', value: 16 },
        {label: 'David Learned', value: 15 },
        {label: 'Sanjay Shreedharan', value: 13 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('demo_flights', [
        {label: 'Justin Knaplund', value: 30 },
        {label: 'Peter English', value: 22 },
        {label: 'Lawrence Spinetta', value: 13 },
        {label: 'Greg Aaron', value: 9 },
        {label: 'Bill Brinkman', value: 7 },
        {label: 'Ingo Kuenzel', value: 3 },
        {label: 'Mitch Lubars', value: 3 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })


    renderBarChart('tows_per_day', [
        {label: 'Doug Witkowski (Sun, Jun 23)', value: 20 },
        {label: 'Marc Augustin (Sat, Aug 10)', value: 19 },
        {label: 'Pat Gibbons (Sat, Jun 22)', value: 19 },
        {label: 'Doug Witkowski (Sat, Aug 3)', value: 19 },
        {label: 'Ron Wallis (Sat, Nov 9)', value: 17 },
        {label: 'Greg Aaron (Sun, Jun 9)', value: 17 },
        {label: 'Peter Jarvis (Sun, Oct 27)', value: 15 },
        {label: 'Ron Wallis (Sat, Jun 15)', value: 15 },
        {label: 'Schaefer Richard (Sat, Oct 5)', value: 15 },
        {label: 'Peter Jarvis (Sat, Jul 20)', value: 15 },
        {label: 'Pat Gibbons (Sat, Mar 23)', value: 14 },

    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('flights_per_day', [
        {label: 'Bill Brinkman (Sat, Aug 31)', value: 8 },
        {label: 'Justin Knaplund (Sat, Sep 14)', value: 8 },
        {label: 'Bill Brinkman (Sat, Aug 24)', value: 8 },
        {label: 'Greg Aaron (Sat, Jun 15)', value: 8 },
        {label: 'Peter English (Sat, Sep 7)', value: 7 },
        {label: 'Bill Brinkman (Sun, May 19)', value: 7 },
        {label: 'Lawrence Spinetta (Sun, Oct 20)', value: 7 },
        {label: 'Lawrence Spinetta (Sat, Nov 9)', value: 7 },
        {label: 'Greg Aaron (Sat, Jul 20)', value: 7 },
        {label: 'Greg Aaron (Sun, May 19)', value: 6 },
        {label: 'Greg Aaron (Sat, Nov 9)', value: 6 },

    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('active_days', [
        {label: 'Greg Aaron', value: 40 },
        {label: 'Lawrence Spinetta', value: 35 },
        {label: 'Ely Bins', value: 31 },
        {label: 'Ron Wallis', value: 24 },
        {label: 'Luis Mailly', value: 23 },
        {label: 'Andre DeBaghy', value: 23 },
        {label: 'Ajeeth Rajan', value: 21 },
        {label: 'Bill Brinkman', value: 19 },
        {label: 'Kip Harris', value: 17 },
        {label: 'Doug Witkowski', value: 16 },
        {label: 'Ed Khan', value: 16 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('longest_flights', [
        {label: 'Ely Bins (Sun, Sep 15)', value: 357 },
        {label: 'Ely Bins (Thu, Oct 3)', value: 356 },
        {label: 'Ely Bins (Sun, Oct 6)', value: 332 },
        {label: 'Lawrence Spinetta (Sat, Jul 20)', value: 330 },
        {label: 'Ely Bins (Sat, Jul 20)', value: 329 },
        {label: 'Ely Bins (Tue, Aug 13)', value: 319 },
        {label: 'Jason Greene (Thu, Sep 19)', value: 311 },
        {label: 'Ely Bins (Sat, Oct 5)', value: 308 },
        {label: 'Ely Bins (Sun, Jun 30)', value: 305 },
        {label: 'Ely Bins (Sat, Sep 21)', value: 303 },
        {label: 'Ely Bins (Thu, Jul 11)', value: 293 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25,
        formatter: timeFormatter
    })

    renderBarChart('total_flight_time', [
        {label: 'Ely Bins', value: 6978 },
        {label: 'Lawrence Spinetta', value: 4534 },
        {label: 'Greg Aaron', value: 2561 },
        {label: 'Andre DeBaghy', value: 2519 },
        {label: 'Luis Mailly', value: 1693 },
        {label: 'Ed Khan', value: 1412 },
        {label: 'Kip Harris', value: 1340 },
        {label: 'Bill Brinkman', value: 1169 },
        {label: 'Ingo Kuenzel', value: 1012 },
        {label: 'Ajeeth Rajan', value: 993 },
        {label: 'Peter English', value: 858 },
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