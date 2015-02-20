angular.module('invoice1', [])
  .controller("HelloWorld", ['$http', function($http){
	  var that = this;
	  var setup = function(records, field) {
			var x = {};
			for ( var ii in records ) {
				var r = records[ii];
				var f = r[field];
				if ( f in x ) {
					++x[f];
				} else {
					x[f] = 1;
				}
			}
			var xx = [];
			for (var f in x) {
				var l = f + " (" + x[f] + ")";
				xx.push({label: l, checked: true, count: x[f]});
			}
			xx.sort(function(a,b) {return b.count - a.count;});
			xx.forEach(function(f){delete f.count;});
			return xx;
		  };
	  $http.get("data.json")
	  	.success(function(data, status, headers, config) {
	  		that.records = data;
	  		that.names = setup(data, "name"); 
	  		that.functions = setup(data, "function"); 
		  })
		  .error(function(data, status, headers, config) {
		  		console.log("Error");
		  });
  }])
;

