var request = require('request');

function get(movieTitle) {
request('http://www.omdbapi.com/?t=' + movieTitle, function(error, response, body) {
	console.log('error:', error);
	console.log('statusCode:', response && response.statusCode);
	// console.log('body', body);
	var parseBody = JSON.parse(body);
	console.log(parseBody);
	//adds a line break after parse
	console.log('\n');
});
}

// get("The+Matrix");

module.exports = get;
