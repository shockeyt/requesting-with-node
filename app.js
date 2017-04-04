var movie = require("./movie");
var threeFavoriteMovies = ["The+Matrix", "Goodfellas", "Empire+Strikes"];

threeFavoriteMovies.forEach(function(film){
	movie(film);
	console.log('\n');
  // your code here
});