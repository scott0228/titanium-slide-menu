if (Ti.version < 1.8) {
	alert('Sorry, this applicatio is for Titanium Mobile 1.8 or later');
} else {

	// add a single variable to the global scope
	var globals = {};

	(function() {
		var theTop = 0;
		if (Titanium.Platform.name == 'iPhone OS') {
			var version = Titanium.Platform.version.split(".");
			var major = parseInt(version[0], 10);

			if (major >= 7) {
				theTop = 20;
			}
		}
		
		
		var AppWindow = require('/ui/AppWindow');
		var AppView = require('/ui/AppView');
		var LeftView = require('/ui/LeftView');

		var appView = new AppView();
		var leftView = new LeftView();
		var win = new AppWindow();
		win.add(appView);
		win.add(leftView);
		win.backgroundColor = '#FFF';
		appView.top = theTop;
		leftView.top = theTop;

		appView.addMenu = function(obj, title) {
			if ((typeof(obj)==='function') && obj.constructor.toString().match(/Function/)) {
				leftView.addMenu(title, '#c4ccda', function() {
					obj();
					appView.openCloseLeft();
				});
			} else {
				leftView.addMenu(obj.title, '#c4ccda', function() {
					appView.switchView(obj);
				});
			}
		};
		
		
		var HomeView = require('/ui/HomeView');
		var TableView = require('/ui/TableView');
		var home = new HomeView();
		appView.addMenu(home);
		var tableView = new TableView();
		appView.addMenu(tableView);
		appView.addMenu(function() {
			alert("Settings");
		}, 'Settings');

		win.open();

	})();

}
