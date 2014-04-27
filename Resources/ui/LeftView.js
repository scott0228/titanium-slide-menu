module.exports = function() {
  var self = Ti.UI.createTableView({
    backgroundColor: '#32394a',
    separatorColor: '#3e4555',
    left: 0,
    width: 200,
    zIndex: 0
  });

  // event listner
  self.addEventListener('click', function(e) {
    e.row.callback();
  });
  // add menu
  self.addMenu = function(title, color, callback, backgroundImage, icon) {
    var rowView = Ti.UI.createTableViewRow({
      height: 50,
    });
    if(backgroundImage){
      if('/' !== backgroundImage.substring(0,1)){
        rowView.setBackgroundImage('/'+backgroundImage);
      } else {
        rowView.setBackgroundImage(backgroundImage);
      }
    }
    rowView.callback = callback;
    if(icon){
      var img = Titanium.UI.createView({
        top: 11,
        left: 13,
        width: 35,
        height: 30,
        backgroundImage: icon
      });
      rowView.add(img);
      img.callback = callback;
    }
    
    var lbl = Titanium.UI.createLabel({
      color: 'white',
      text: title,
      top: 10,
      left: 53,
      // width:55,
      height: 40,
      font: {
        fontFamily: 'Helvetica Neue',
        fontSize: 20,
        fontWeight: 'bold'
      }
    });
    rowView.add(lbl);
    lbl.callback = callback;
    self.appendRow(rowView);

  };
  return self;
};
