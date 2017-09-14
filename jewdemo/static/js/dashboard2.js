$(':checkbox:checked').prop('checked',false);
var mapData = {
                "US": 298,
                "SA": 200,
                "AU": 760,
                "IN": 200,
                "GB": 120,
            };


jQuery('#world-map-marker').vectorMap(
{
    map: 'world_mill_en',
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderOpacity: 0.25,
    borderWidth: 0,
    color: '#e6e6e6',
    regionStyle : {
        initial : {
          fill : '#e4ecef'
        }
      },

    markerStyle: {
      initial: {
                    r: 7,
                    'fill': '#fff',
                    'fill-opacity':1,
                    'stroke': '#000',
                    'stroke-width' : 2,
                    'stroke-opacity': 0.4
                },
                },
   
    markers : [{
        latLng : [21.00, 78.00],
        name : 'INDIA : 350'
      
      },
      {
        latLng : [-33.00, 151.00],
        name : 'Australia : 250'
        
      },
      {
        latLng : [36.77, -119.41],
        name : 'USA : 250'
      
      },
      {
        latLng : [55.37, -3.41],
        name : 'UK   : 250'
      
      },
      {
        latLng : [25.20, 55.27],
        name : 'UAE : 250'
      
      }],
      series: {
                    regions: [{
                        values: mapData,
                        scale: ["#85b4d0", "#85b4d1"],
                        normalizeFunction: 'polynomial'
                    }]
                },
    hoverOpacity: null,
    normalizeFunction: 'linear',
    zoomOnScroll: false,
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#c9dfaf',
    selectedRegions: [],
    enableZoom: false,
    hoverColor: '#fff',
    
    
});

 window.addEventListener('resize', function() {
        
    });
 
 // Real Time chart
        

        var data = [],
            totalPoints = 100;

        function getRandomData() {

            if (data.length > 0)
                data = data.slice(1);

            // Do a random walk

            while (data.length < totalPoints) {

                var prev = data.length > 0 ? data[data.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;

                if (y < 0) {
                    y = 0;
                } else if (y > 100) {
                    y = 100;
                }

                data.push(y);
            }

            // Zip the generated y values with the x values

            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]])
            }

            return res;
        }

        // Set up the control widget

        var updateInterval = 20;
        $("#updateInterval").val(updateInterval).change(function () {
            var v = $(this).val();
            if (v && !isNaN(+v)) {
                updateInterval = +v;
                if (updateInterval < 1) {
                    updateInterval = 1;
                } else if (updateInterval > 2000) {
                    updateInterval = 2000;
                }
                $(this).val("" + updateInterval);
            }
        });

        var plot = $.plot("#placeholder", [ getRandomData() ], {
            series: {
                shadowSize: 0   // Drawing is faster without shadows
            },
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                show: false
            },
            colors: ["#85b4d0"],
            grid: {
                color: "#AFAFAF",
                hoverable: true,
                borderWidth: 0,
                backgroundColor: '#FFF'
            },
            tooltip: true,
              resize:true,
            tooltipOpts: {
                content: "Y: %y",
                defaultTheme: false
            }
        

        });

        function update() {

            plot.setData([getRandomData()]);

            // Since the axes don't change, we don't need to call plot.setupGrid()

            plot.draw();
            setTimeout(update, updateInterval);
        }

        update();
         $('.vcarousel').carousel({
            interval: 3000
         })
         $("body").trigger("resize");

//sparkline charts
$(document).ready(function() {
   var sparklineLogin = function() { 
       
  
        $("#sparkline8").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
            type: 'line',
            width: '100%',
            height: '50',
            lineColor: '#cbb2ae',
            fillColor: '#cbb2ae',
            maxSpotColor: '#cbb2ae',
            highlightLineColor: 'rgba(0, 0, 0, 0.2)',
            highlightSpotColor: '#cbb2ae'
        });
        $("#sparkline9").sparkline([0,2,8,6,8,5,6,4,8,6,6,2 ], {
            type: 'line',
            width: '100%',
            height: '50',
            lineColor: '#aec9cb',
            fillColor: '#aec9cb',
            minSpotColor:'#aec9cb',
            maxSpotColor: '#aec9cb',
            highlightLineColor: 'rgba(0, 0, 0, 0.2)',
            highlightSpotColor: '#aec9cb'
        });
        $("#sparkline10").sparkline([2,4,4,6,8,5,6,4,8,6,6,2], {
            type: 'line',
            width: '100%',
            height: '50',
            lineColor: '#b5a8b9',
            fillColor: '#b5a8b9',
            maxSpotColor: '#b5a8b9',
            highlightLineColor: 'rgba(0, 0, 0, 0.2)',
            highlightSpotColor: '#b5a8b9'
        });       
   }
    var sparkResize;
 
        $(window).resize(function(e) {
            clearTimeout(sparkResize);
            sparkResize = setTimeout(sparklineLogin, 500);
        });
        sparklineLogin();

});

// Slimscroll
 $('.slimscrollcountry').slimScroll({
          height: '250',
          position: 'right',
          size: "5px",
          color: '#dcdcdc',
          
      });