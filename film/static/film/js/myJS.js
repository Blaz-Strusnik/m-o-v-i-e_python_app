$('form').submit(function(event) {
    // Stop the form from submitting
    event.preventDefault();
  
    // Get The value from the form
    var movieName = $('#search').val();
    apikey = '&apikey=517765d3';
    plot = '&plot=full';
    var movieURL = "https://www.omdbapi.com/?t="+movieName+apikey;
    var movieURL1 = "https://www.omdbapi.com/?s="+movieName+apikey;
  
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
      '<p>'+ data.Title + '</p>' + 
      '<p>'+ data.Year + '</p>' + 
      '<p>'+ data.Runtime + '</p>' + 
      '<p>'+ data.Type + '</p>' + 
      '<p>'+ data.Plot + '</p>' + 
      '<p>'+ data.Ratings[0].Source + '</p>' + '<p>' + data.Ratings[0].Value + '</p>';
      movieHTML += '</div>';
      $('#movieInformation').html(movieHTML);
      
    };
    function displayMovies3(data) {
    var movieHTML3 = '<div>';
        
    movieHTML3 += 
    '<p>'+ data.Title + '</p>' + 
    '<p>'+ data.Year + '</p>' + 
    '<p>'+ data.Runtime + '</p>' + 
    '<p>'+ data.Type + '</p>' + 
    '<p>'+ data.Genre + '</p>' + 
    '<p>'+ data.Ratings[0].Source + '<space></space>' + data.Ratings[0].Value + '</p>' + 
    '<p>'+ data.Ratings[0].Value + '</p>';
    movieHTML3 += '</div>';
    $('#movieInformation3').html(movieHTML3);
    
  };
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
     function displayMovies1(data) {
      $('#movieInformation3').empty();
      var movieHTML2 = '<div>';
      movieHTML2 += 
      '<p>'+ data.Search[1].Year + '</p>' + 
      '<p>'+ data.Search[1].Type + '</p>';
      movieHTML2 += '</div>';  


        function movieHTML(){
        for(var i = 0; i <= data.Search.length; i++) {
        var obj2 =  '<h5 class="card-title">' + data.Search[i].Title + '</h5>';
        
        $('#movieInformation3').append(
           obj2
          );
         /*  $('#movieInformation3').prev().remove(obj2); */
  }
     
  } 

  
        

        
       
      
      
      $('#movieInformation3').append(movieHTML);
  
    }
    
    $.getJSON(movieURL, movieOptions, displayMovies);
    
    $.getJSON(movieURL1, movieOptions, displayMovies1);// end getJSON
    
  });