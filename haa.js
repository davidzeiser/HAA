//set main namespace
goog.provide('haa');


//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.Circle');
goog.require('lime.Label');
goog.require('lime.animation.Spawn');
goog.require('lime.animation.FadeTo');
goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.MoveTo');
goog.require('lime.GlossyButton');
goog.require('lime.transitions.Dissolve');

haa.HEIGHT = 640;
haa.WIDTH = 960;

// entrypoint
haa.start = function(){

	haa.director = new lime.Director(document.body,haa.WIDTH);

	haa.director.makeMobileWebAppCapable();

  haa.loadMenu();
}

//load the main menu
haa.loadMenu = function(){

  //create scene and title sprite
  var scene = new lime.Scene(),
    layer = new lime.Layer().setPosition(haa.WIDTH / 2, 0).setAnchorPoint(0,0);
  var title = new lime.Sprite().setFill('assets/title.png').setPosition(0,250);
  layer.appendChild(title);

  //create buttons
  var btns = new lime.Layer().setPosition(0,350);
  layer.appendChild(btns);

  var btn = haa.makeButton('New Game').setPosition(-310, 120);
  goog.events.listen(btn, 'click', function() {
        //go to char creation
  });
  btns.appendChild(btn);

  var btn = haa.makeButton('Load Character').setPosition(0, 120);
  goog.events.listen(btn, 'click', function() {
        //go to char selection
  });
  btns.appendChild(btn);

  var btn = haa.makeButton('View Graveyard').setPosition(310, 120);
  goog.events.listen(btn, 'click', function() {
    //go to hiscores
  });
  btns.appendChild(btn);

  //add layer to scene
  scene.appendChild(layer);

  //set current scene active
  haa.director.replaceScene(scene, lime.transitions.Dissolve);
}

haa.makeButton = function(text) {
      var btn = new lime.GlossyButton(text).setSize(300, 90);
      return btn;
}

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('haa.start', haa.start);
