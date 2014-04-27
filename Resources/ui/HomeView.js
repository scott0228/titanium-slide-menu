module.exports = function() {

    var self = Ti.UI.createView({
        backgroundColor: 'white',
        title: "Home",
    });

    var label = Ti.UI.createLabel({
      color: '#000000',
      text: String.format(L('welcome'), 'Titanium'),
      height: 'auto',
      width: 'auto'
    });
    self.add(label);
    
    return self;
};


