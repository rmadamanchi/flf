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
        { label: 'Saturday', value: 33 },
        { label: 'Sunday', value: 32 },
        { label: 'Monday', value: 3 },
        { label: 'Tuesday', value: 1 },
        { label: 'Wednesday', value: 1 },
        { label: 'Thursday', value: 0 },
        { label: 'Friday', value: 10 }
    ], {
        labelAlign: 'end',
        xLabelFontSize: 15
    });

    renderBarChart('months', [
        { label: 'January', value: 7 },
        { label: 'February', value: 3 },
        { label: 'March', value: 5 },
        { label: 'April', value: 5 },
        { label: 'May', value: 10 },
        { label: 'June', value: 10 },
        { label: 'July', value: 12 },
        { label: 'August', value: 7 },
        { label: 'September', value: 8 },
        { label: 'October', value: 8 },
        { label: 'November', value: 10 },
        { label: 'December', value: 3 },
    ]);

    renderPieChart('flight_types',  [
        { type: 'Solo', count: 557 },
        { type: 'Dual', count: 240 },
        { type: 'Demo', count: 60 },
    ]);

    renderBarChart('flights_by_day', [
        { label: 'Sat, Oct 15', value: 25 },
        { label: 'Sat, Jan 29', value: 22 },
        { label: 'Sat, Jun 11', value: 22 },
        { label: 'Sun, Mar 20', value: 21 },
        { label: 'Sat, Jul 2', value: 21 },
        { label: 'Sat, Apr 30', value: 19 },
        { label: 'Sat, Jun 18', value: 19 },
        { label: 'Sun, Dec 18', value: 18 },
        { label: 'Sat, Apr 16', value: 18 },
        { label: 'Sun, Jan 30', value: 17 },
        { label: 'Sun, May 15', value: 17 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('tows', [
        { label: 'Kelly Butler', value: 179 },
        { label: 'Tom Barkow', value: 136 },
        { label: 'Doug Witkowski', value: 116 },
        { label: 'Greg Aaron', value: 109 },
        { label: 'Smokey Doll', value: 93 },
        { label: 'Charlie Ryan', value: 70 },
        { label: 'Pat Gibbons', value: 52 },
        { label: 'Peter Jarvis', value: 45 },
        { label: 'Marc Augustin', value: 26 },
        { label: 'Lawrence Spinetta', value: 21 },
        { label: 'Jackson Kevin', value: 10 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('flights_by_pilot', [
        { label: 'Greg Aaron', value: 117 },
        { label: 'Charlie Dunifer', value: 96 },
        { label: 'Bill Brinkman', value: 68 },
        { label: 'Rajesh Madamanchi', value: 43 },
        { label: 'Yucheng Guo', value: 37 },
        { label: 'Paul Slutes', value: 36 },
        { label: 'Ely Bins', value: 34 },
        { label: 'Ingo Kuenzel', value: 31 },
        { label: 'Mitch Lubars', value: 28 },
        { label: 'Luis Mailly', value: 28 },
        { label: 'Lola Montana', value: 27 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('solo_flights_by_pilot', [
        { label: 'Yucheng Guo', value: 35 },
        { label: 'Ely Bins', value: 34 },
        { label: 'Paul Slutes', value: 29 },
        { label: 'Greg Aaron', value: 29 },
        { label: 'Rajesh Madamanchi', value: 24 },
        { label: 'Jon Henderson', value: 21 },
        { label: 'Mitch Lubars', value: 20 },
        { label: 'Henry Lee', value: 19 },
        { label: 'Luis Mailly', value: 19 },
        { label: 'Bill Brinkman', value: 19 },
        { label: 'Gonzo Echeverry', value: 17 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('dual_flights_by_pilot', [
        { label: 'Charlie Dunifer', value: 91 },
        { label: 'Greg Aaron', value: 88 },
        { label: 'Bill Brinkman', value: 49 },
        { label: 'Ingo Kuenzel', value: 27 },
        { label: 'Lola Montana', value: 25 },
        { label: 'Rajesh Madamanchi', value: 19 },
        { label: 'Lawrence Spinetta', value: 14 },
        { label: 'Justin Knaplund', value: 11 },
        { label: 'Jason Greene', value: 10 },
        { label: 'Luis Mailly', value: 9 },
        { label: 'Scott Marshall', value: 8 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('demo_flights', [
        {label: 'Justin Knaplund', value: 11 },
        {label: 'Charlie Dunifer', value: 10 },
        {label: 'Greg Aaron', value: 9 },
        {label: 'Ingo Kuenzel', value: 4 },
        {label: 'Lawrence Spinetta', value: 2 },
        {label: 'Harlan Jeff', value: 2 },
        {label: 'Mitch Lubars', value: 2 },
        {label: 'Peter English', value: 2 },
        {label: 'Filby Alex', value: 2 },
        {label: 'Booth Gavin', value: 2 },
        {label: 'Blaydes Justin', value: 2 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })


    renderBarChart('tows_per_day', [
        { label: 'Greg Aaron (Sat, Jan 29)', value: 22 },
        { label: 'Kelly Butler (Sun, Mar 20)', value: 21 },
        { label: 'Peter Jarvis (Sat, Jun 11)', value: 20 },
        { label: 'Tom Barkow (Sat, Jun 18)', value: 19 },
        { label: 'Greg Aaron (Sat, Apr 30)', value: 19 },
        { label: 'Doug Witkowski (Sun, Dec 18)', value: 18 },
        { label: 'Smokey Doll (Sat, Apr 16)', value: 18 },
        { label: 'Doug Witkowski (Sun, Jan 30)', value: 17 },
        { label: 'Charlie Ryan (Sun, May 15)', value: 17 },
        { label: 'Doug Witkowski (Sat, Oct 15)', value: 16 },
        { label: 'Kelly Butler (Sat, Mar 12)', value: 15 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('flights_per_day', [
        { label: 'Charlie Dunifer (Sun, Mar 20)', value: 17 },
        { label: 'Charlie Dunifer (Sun, Dec 18)', value: 11 },
        { label: 'Greg Aaron (Sat, Jun 11)', value: 9 },
        { label: 'Greg Aaron (Sun, Jan 30)', value: 8 },
        { label: 'Greg Aaron (Sat, Aug 27)', value: 8 },
        { label: 'Charlie Dunifer (Sat, Aug 6)', value: 7 },
        { label: 'Charlie Dunifer (Sun, Apr 3)', value: 7 },
        { label: 'Charlie Dunifer (Sun, Jun 5)', value: 6 },
        { label: 'Charlie Dunifer (Sun, Feb 20)', value: 6 },
        { label: 'Bill Brinkman (Sat, Apr 16)', value: 6 },
        { label: 'Justin Knaplund (Sat, Jul 2)', value: 6 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('active_days', [
        { label: 'Greg Aaron', value: 50 },
        { label: 'Ely Bins', value: 29 },
        { label: 'Bill Brinkman', value: 28 },
        { label: 'Charlie Dunifer', value: 26 },
        { label: 'Rajesh Madamanchi', value: 25 },
        { label: 'Tom Barkow', value: 24 },
        { label: 'Yucheng Guo', value: 22 },
        { label: 'Kelly Butler', value: 21 },
        { label: 'Mitch Lubars', value: 18 },
        { label: 'Lola Montana', value: 17 },
        { label: 'Luis Mailly', value: 17 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25
    })

    renderBarChart('longest_flights', [
        {label: 'Gonzo Echeverry (Sat, Jul 16)', value: 450 },
        {label: 'Gonzo Echeverry (Fri, Jul 29)', value: 375 },
        {label: 'Ely Bins (Fri, Jul 29)', value: 371 },
        {label: 'Gonzo Echeverry (Sat, Jul 23)', value: 360 },
        {label: 'Ely Bins (Sun, Aug 7)', value: 347 },
        {label: 'Gonzo Echeverry (Sat, Jul 2)', value: 335 },
        {label: 'Ely Bins (Sat, Jul 30)', value: 330 },
        {label: 'Gonzo Echeverry (Sat, Jul 9)', value: 314 },
        {label: 'Ely Bins (Sat, Jul 2)', value: 310 },
        {label: 'Gonzo Echeverry (Sat, Jun 18)', value: 309 },
        {label: 'Lawrence Spinetta (Wed, Aug 17)', value: 301 },
    ], {
        indexAxis: 'y',
        yLabelFontSize: 25,
        formatter: timeFormatter
    })

    renderBarChart('total_flight_time', [
        {label: 'Ely Bins', value: 6153 },
        {label: 'Gonzo Echeverry', value: 3124 },
        {label: 'Greg Aaron', value: 2746 },
        {label: 'Charlie Dunifer', value: 1598 },
        {label: 'Rajesh Madamanchi', value: 1518 },
        {label: 'Bill Brinkman', value: 1248 },
        {label: 'Lawrence Spinetta', value: 1191 },
        {label: 'David Bearden', value: 1081 },
        {label: 'Yucheng Guo', value: 1043 },
        {label: 'Osamu Yodo', value: 1041 },
        {label: 'Mitch Lubars', value: 1039 },
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