$(document).ready(function() {
    console.log("Document is ready to go!");
    
    $('#timeline-1').hide();
    $('#timeline-2').hide();
    $('#timeline-3').hide();
    $('#timeline-4').hide();
    $('#timeline-5').hide();
    $('#timeline-6').hide();
    $('#timeline-7').hide();
    $('#timeline-8').hide();
    $('#timeline-9').hide();
    $('#timeline-10').hide();
    $('#timeline-11').hide();
    $('#timeline-12').hide();
    $('#timeline-13').hide();
    $('#timeline-14').hide();
    $('#timeline-15').hide();
    $('#left-1995').hide();
    $('#left-2000').hide();
    $('#left-2010').hide();
    $('#hide').hide();
    
    pie1990();
    
    $("#y0").click(function() {
        setSlide(0);
        styleYear(0);
        //changePieChart
        $('#left-1995').hide();
        $('#left-2000').hide();
        $('#left-2010').hide();
        $('#left-1990').show();
        pie1990();
        //show/hide timeline
    });
    $("#y1").click(function() {
        setSlide(0);
        styleYear(1);
        //changePieChart
        $('#left-1995').hide();
        $('#left-2000').hide();
        $('#left-2010').hide();
        $('#left-1990').show();
        pie1990();
        //show/hide timeline
    });
    $("#y2").click(function() {
        setSlide(0);
        styleYear(2);
        //changePieChart
        $('#left-1995').hide();
        $('#left-2000').hide();
        $('#left-2010').hide();
        $('#left-1990').show();
        pie1990();
        //show/hide timeline
    });
    $("#y3").click(function() {
        setSlide(0);
        styleYear(3);
        //changePieChart
        $('#left-1995').hide();
        $('#left-2000').hide();
        $('#left-2010').hide();
        $('#left-1990').show();
        pie1990();
        //show/hide timeline
    });
    $("#y4").click(function() {
        setSlide(1);
        styleYear(4);
        //changePieChart
        $('#left-1995').hide();
        $('#left-2010').hide();
        $('#left-2000').hide();
        $('#left-1990').show();
        pie1990();
        //show/hide timeline
    });
    $("#y5").click(function() {
        setSlide(1);
        styleYear(5);
        //changePieChart
        $('#left-1990').hide();
        $('#left-2000').hide();
        $('#left-2010').hide();
        $('#left-1995').show();
        pie1995();
        //show/hide timeline
    });
    $("#y6").click(function() {
        setSlide(2);
        styleYear(6);
        $('#left-1990').hide();
        $('#left-2000').hide();
        $('#left-2010').hide();
        $('#left-1995').show();
        
        pie1995();
        //changePieChart
        //show/hide timeline
    });
    $("#y7").click(function() {
        setSlide(3);
        styleYear(7);
        $('#left-1990').hide();
        $('#left-1995').hide();
        $('#left-2010').hide();
        $('#left-1995').show();
        pie1995();
        //changePieChart
        //show/hide timeline
    });
    $("#y8").click(function() {
        setSlide(4);
        styleYear(8);
        //changePieChart
        $('#left-1990').hide();
        $('#left-1995').hide();
        $('#left-2010').hide();
        $('#left-2000').show();
        pie2000();
        //show/hide timeline
    });
    $("#y9").click(function() {
        setSlide(7);
        styleYear(9);
        //changePieChart
        $('#left-1990').hide();
        $('#left-1995').hide();
        $('#left-2010').hide();
        $('#left-2000').show();
        pie2000();
        //show/hide timeline
    });
    $("#y10").click(function() {
        setSlide(8);
        styleYear(10);
        //changePieChart
        $('#left-1990').hide();
        $('#left-1995').hide();
        $('#left-2010').hide();
        $('#left-2000').show();
        pie2000();
        //show/hide timeline
    });
    $("#y11").click(function() {
        setSlide(9);
        styleYear(11);
        //changePieChart
        $('#left-1990').hide();
        $('#left-1995').hide();
        $('#left-2000').hide();
        $('#left-2010').show();
        pie2010();
        //show/hide timeline
    });
    $("#y12").click(function() {
        setSlide(11);
        styleYear(12);
        //changePieChart
        $('#left-1990').hide();
        $('#left-1995').hide();
        $('#left-2000').hide();
        $('#left-2010').show();
        pie2010();
        //show/hide timeline
    });
    $("#y13").click(function() {
        setSlide(12);
        styleYear(13);
        $('#left-1990').hide();
        $('#left-1995').hide();
        $('#left-2000').hide();
        $('#left-2010').show();
        pie2010();
        //changePieChart
        //show/hide timeline
    });
    $("#expand-pies").click(function() {
        $('.timeline').hide();
        $('#credits').hide();
        $('#year-buttons').hide();
        $('#left-1990').show();
        $('#left-1995').show();
        $('#left-2000').show();
        $('#left-2010').show();
        $('#left-1995').css("width","50%");
        $('#left-1990').css("width","43%");
        $('#left-2000').css("width","43%");
        $('#left-2000').css("margin-top","20px");
        $('#left-2010').css("margin-top","20px");
        $('#left-2010').css("width","50%");
        pie1995();
        pie2000();
        pie2010();
         $('#hide').show();
        //changePieChart
        //show/hide timeline
    });
    $("#hide").click(function() {
      for (var i=0; i<=15; i++) {
        if ($("#y"+i).hasClass("current")) {
          var currClass=i;
        }
      }
      styleYear(currClass);
      $('#left-1995').css("width","40%");
        $('#left-1990').css("width","40%");
        $('#left-2000').css("width","40%");
        $('#left-2000').css("margin-top","0");
        $('#left-2010').css("margin-top","0");
        $('#left-2010').css("width","40%");
      $('#left-1990').hide();
      $('#left-1995').hide();
      $('#left-2000').hide();
      $('#left-2010').hide();
      
      if (currClass <=4) {
        $('#left-1990').show();
        pie1990();
      }
      else if (currClass <=7) {
        $('#left-1995').show();
        pie1995();
      }
      else if (currClass <=10) {
        $('#left-2000').show();
        pie2000();
      }
      else {
        $('#left-2010').show();
        pie2010();
      }
      $("#year-buttons").show();
      $("#credits").show();
      $("#hide").hide();
      $('#left-1995').css("width","40%");
        $('#left-1990').css("width","40%");
        $('#left-2000').css("width","40%");
        $('#left-2000').css("margin-top","0");
        $('#left-2010').css("margin-top","0");
        $('#left-2010').css("width","40%");
    });
});

function styleYear(id) {
  for (var i=0; i<=13; i++) {
    if ($("#y"+i).hasClass("current")) {
      $("#y"+i).removeClass("current");
    }
    $("#timeline-"+i).hide();
  }
  $("#y"+id).addClass("current");
  $("#timeline-"+id).show();
}

function changeActiveYear(slide) {
  if (slide == 0) {
    styleYear(3);
  }
  else if (slide == 1) {
    styleYear(5);
  }
  else if (slide == 2) {
    styleYear(7);
  }
  else if (slide == 3 || slide == 4 || slide == 5) {
    styleYear(8);
  }
  else if (slide == 6 || slide == 7) {
    styleYear(9);
  }
  else if (slide == 8) {
    styleYear(10);
  }
  else if (slide == 9) {
    styleYear(11);
  }
  else if (slide == 10 || slide==11) {
    styleYear(12);
  }
  else if (slide == 12 || slide == 13) {
    styleYear(13);
  }
  else if (slide == 14 || slide == 15) {
    styleYear(13);
  }
}

function pie1990() {
    $('#pie-chart-1990').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: ''
        },
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '1990',
            data: [
              
                {name: 'Middle East', y: .2, color: '#000'},
                {name: 'Asia Pacific',  y: 3.5, color: '#256558'},
                
                {name: 'East Asia',   y: 4, color: '#9EF0D2'},
                {name: 'North America',   y:  76.6, color: '#054038'},
                {name: 'West Europe',  y: 14.8, color: '#569d89'},
                {name: 'Japan', y: .9, color:''},
                
            ]
        }]
    });
};

function pie1995() {
    $('#pie-chart-1995').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: ''
        },
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '1995',
            data: [
              
                
                {name: 'Japan',  y: 5, color: '#256558'},
                {name: 'Australia',  y: 1.3, color: '#000'},
                {name: 'Canada',   y: 4, color: '#9EF0D2'},
                {name: 'United States',   y:  63.1, color: '#054038'},
                {name: 'Other', y: 21, color: '#569d89'},
                {name: 'Germany',  y: 3.8, color: '#054038'},
                {name: 'United Kingdom', y: 2.8, color:''},
                
                
            ]
        }]
    });
};

function pie2000() {
    $('#pie-chart-2000').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: ''
        },
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '2000',
            data: [
              
                
                {name: 'Africa',   y: 1.3, color: '#9EF0D2'},
                {name: 'Australia',  y: 2.1, color: '#054038'},
                {name: 'Asia',  y: 31.7, color: '#9ef0d2'},
                {name: 'North America', y: 29.9, color: '#569d89'},
                {name: 'Europe', y: 29.1, color:'#256558'},
                
                {name: 'Middle East',  y: .9, color: '#000'},
                {name: 'Latin America',   y:  5, color: '#569d89'},
                
                
                
            ]
        }]
    });
};

function pie2010() {
    $('#pie-chart-2010').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: ''
        },
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '2010',
            data: [
              
                
                {name: 'Africa',   y: 5.6, color: '#9EF0D2'},
                {name: 'Australia',  y: 1.1, color: '#569d89'},
                {name: 'Asia',  y: 42, color: '#054038'},
                {name: 'North America', y: 13.5, color: '#569d89'},
                {name: 'Europe', y: 24.2, color:'#256558'},
                
                {name: 'Middle East',  y: 3.2, color: '#000'},
                {name: 'Latin America',   y:  10.4, color: '#569d89'},
                
                
                
            ]
        }]
    });
};
