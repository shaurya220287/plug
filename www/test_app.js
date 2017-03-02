var TestApp = function() {};

TestApp.show = function(success, fail) {
	
	
    cordova.exec(success, fail, "TestAppPlugin","show", []);
	
};


var ts = new TestApp();
module.exports = ts;