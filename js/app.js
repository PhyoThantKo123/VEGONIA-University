// start jquery area
$(document).ready(function() {
        // start header
        $('.navbtns').click(function() {
                $(this).toggleClass('crossx');
            })
            // end header
    })
    // end jquery area


// start javascript area

// start student counter section
var getcounters = document.querySelectorAll('.counter');

getcounters.forEach(function(getcounter) {
        getcounter.textContent = 0;

        const updatecounter = function() {
            // console.log('hay i am working!');

            var getcounteratt = +getcounter.getAttribute('data-target');
            var getcountercontent = +getcounter.textContent;
            const incnumber = getcounteratt / 100;

            if (getcountercontent < getcounteratt) {

                getcounter.textContent = getcountercontent + incnumber;
                // getcounter.textContent = getcountercontent;

                setTimeout(updatecounter, 10);
            };

        };

        updatecounter();

    })
    // end student counter Selection


// start rating selection 

// start google code for chart
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Myanmar', 11],
        ['Thailand', 5],
        ['Signpore', 5],
        ['Indonesia', 5],
        ['Serilanka', 8]
    ]);

    var options = {
        title: 'International Students',
        // is3D: true,
        width: 400,
        height: 400,
        tooltip: { textStyle: { color: 'steelblue' }, showColorCode: true }
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}
// end google code for chart


// end rating selection 


// end javascript area