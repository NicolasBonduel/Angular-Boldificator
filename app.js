(function() {
  var app = angular.module('app', ['boldificator', 'ngSanitize'])
	.controller('defaultController', ['$http', function($http) {
		var that = this;
		that.p = "The bacon is cow loading... Take a hamburger and wait ;)";
		$http.get('https://baconipsum.com/api/?type=meat-and-filler&format=text')
		  .then(function(result) {
				that.p = result.data;
		});
		this.bold = ["Bacon", "beef", "cow", "Hamburger", "Turkey", "Pig", "meatball", "bacon", "hamburger", "steak", "pork"]
	}]);
})();