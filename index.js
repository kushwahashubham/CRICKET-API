$(document).ready(function(){

    $('#getDogButton').click(function(){
      $.get("https://cricapi.com/api/cricket?apikey=sWrrPaGxxMh8m4ytbFuzKF21oBi1 ", function(matchdata) {
          var i=0;
	matchdata.data.forEach(function(md) {
		console.log(md.description + " - to grab more details, simply use the unique_id " + md.unique_id + " with the cricketScore api!");   
        $('.title1').append("<br>"+ md.title + "<br><br>");
        $(".card-title").append("-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-<br>");
	});
});

  })
      });
    
