$( window ).on("load", function(event) {
    // Stop the form from submitting
    event.preventDefault();
  
    // Get The value from the form
    var movieName = $('#title').val();
    apikey = '&apikey=517765d3';
    plot = '&plot=full';
    var movieURL = "https://www.omdbapi.com/?t="+movieName+apikey;
    ;
  
    var movieOptions = {
      s: "",
  
    };
  
    function displayMovies(data) {
    console.log(data);
   
     /* var movieHTML = '<ul>';
      $.each(data.items, function(index, value) {
        movieHTML += '<li>';
        movieHTML += '<img ';
        movieHTML += 'src="' + value.Poster + '" ';
        movieHTML += 'alt="' + value.Title + '" >';
        movieHTML += '</li>';
      });//end each*/
      //console.log(data.Search);


       var movieHTML = '<div>';
        
      movieHTML += 
      '<p>'+ data.Plot + '</p>';
      movieHTML += '</div>';
      $('#movieInformation').append(movieHTML);
      
    }
      /* '<p>'+ data.Title + '</p>'+
      '<p>'+ data.Plot + '</p>'+ 
      '<p>' + data.Year + '</p>'+ 
      '<p>' + data.Released + '</p>'+ 
      '<p>' + data.Runtime + '</p>' +
      '<p>' + data.Director + '</p>' ;
      movieHTML += '</div>';

/*       var movieHTML1 = '<div>';
      movieHTML1 += 
      '<p>'+ data.Search[0].Title + '</p>' + 
      '<p>'+ data.Search[0].Year + '</p>';
      movieHTML1 += '</div>'; 
      */
/*      function displayMovies1(data) {
      var movieHTML2 = '<div>';
      movieHTML2 += 
      '<p><a href="about">'+ data.Search[1].Title + '</p>';
      movieHTML2 += '</div>';   */


/*        function movieHTML(){
        for(var i = 0; i <= data.Search.length; i++) {
        var obj2 =  '<h5 class="card-title">' + data.Search[i].Title + '</h5>';
        
        $('#movieInformation').append(
           obj2
          );
  }
     
  } */ 

  
        

        
       
      
      
/*       $('#movieInformation2').append(movieHTML2);
  
    } */

    $.getJSON(movieURL, movieOptions, displayMovies);
    //$.getJSON(movieURL1, movieOptions, displayMovies1);// end getJSON
  
  });