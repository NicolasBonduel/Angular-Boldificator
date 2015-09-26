var m;

m = angular.module('boldificator', []);

m.filter('boldificator', function() {
  return function(input, keywords) {
    if (input !== void 0) {
		for (var k in keywords) {
			var re = new RegExp(keywords[k],'g');
			input = input.replace(re, '<b>'+keywords[k]+'</b>');
		}
		return input
    }
  };
});