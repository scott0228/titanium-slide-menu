module.exports = function() {
  var self = Ti.UI.createView({
    backgroundColor : '#333366',
    top : 0,
    width : Ti.Platform.displayCaps.getPlatformWidth(),
    zIndex : 3,
    layout : 'vertical'
  });

  // current view
  self.currentView = false;
  // open flag
  self.opened = false;

  // create main view
  var mainView = createMainView();

  // create tool bar
  var toolbar = createToolbar();
  var leftButton = createLeftButton();
  leftButton.addEventListener('click', function(e) {
    self.openCloseLeft();
  });
  var titleLabel = Ti.UI.createLabel({
    text : 'Title',
    color : '#fff',
    font : {
      fontSize : 20,
      fontFamily : 'Helvetica Neue',
      fontWeight : 'bold'
    },
    left : 0,
    width : Ti.Platform.displayCaps.platformWidth,
    textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
  });
  // add button to toolbar
  toolbar.add(titleLabel);
  toolbar.add(leftButton);

  // open close
  self.openCloseLeft = function() {
    if (self.opened) {
      // close view
      var animation = Ti.UI.createAnimation({
        left : 320,
        duration : 100
      });
      animation.addEventListener('complete', function() {
        var animation = Ti.UI.createAnimation({
          left : 0,
          duration : 200
        });
        self.animate(animation);

      });
      self.animate(animation);

    } else {
      // open view
      var animation = Ti.UI.createAnimation({
        left : 200,
        duration : 350
      });
      self.animate(animation);
    }
    self.opened = !self.opened;
  };

  self.add(toolbar);
  self.mainView = mainView;
  self.add(self.mainView);
  
  if(Ti.Platform.getOsname() === 'android'){
    self.width = Ti.UI.FILL;
    titleLabel.width = Ti.UI.FILL;
    toolbar.width = Ti.UI.FILL;
    mainView.width = Ti.UI.FILL;
  }

  // swith view method
  self.switchView = function(view) {
    // remove current view
    if (self.currentView) {
      self.mainView.remove(self.currentView);
    }

    // switch view
    self.currentView = view;
    self.mainView.add(view);
    titleLabel.text = view.title;

    self.openCloseLeft();
  };

  return self;
};

var createMainView = function() {
  var mainView = Ti.UI.createView({
    backgroundColor : 'blue',
    width : Ti.Platform.displayCaps.getPlatformWidth(),
    zIndex : 4
  });
  return mainView;
};

var createToolbar = function() {
  var toolbar = Ti.UI.createView({
    backgroundColor : 'white',
    height : 42,
    width : Ti.Platform.displayCaps.getPlatformWidth(),
    zIndex : 4,
    backgroundImage : '/images/handheld/toolbar.png'
  });
  return toolbar;
};

var createLeftButton = function() {
  var button = Ti.UI.createButton({
    top : 7,
    left : 5,
    width : 40,
    height : 31,
    //title: 'L',
    backgroundImage : '/images/handheld/Timeline-List-Grid-List-icon.png'
  });
  return button;
};
