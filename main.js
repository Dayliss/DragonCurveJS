var size = 1;

var stage = new Kinetic.Stage({
  container: 'container',
  width: 900,
  height: 900
});

var layer = new Kinetic.Layer();

var dragonArray = new Array();
dragonArray.push('right');

var border = new Kinetic.Rect({
  x: 0,
  y: 0,
  width: stage.getWidth(),
  height: stage.getHeight(),
  stroke: 'black',
  strokeWidth: 1
});

var line = new Kinetic.Line({
  points: [[0,0]],
  x: 450,
  y: 450,
  stroke: 'black',
  strokeWidth: 1
});

function makeNextStep() {
  for(var i = dragonArray.length-1; i >= 0; i--) {
    switch(dragonArray[i]) {
	case 'right':
	  dragonArray.push('up');
	  break;
	case 'up':
	  dragonArray.push('left');
	  break;
	case 'left':
	  dragonArray.push('down');
	  break;
	case 'down':
	  dragonArray.push('right');
	  break;
	}
  };
  var points = new Array();
  points.push([0,0]);
  for(var i = 0; i < dragonArray.length; i++) {
    switch(dragonArray[i]) {
	case 'right':
	  points.push([points[i][0]+size,points[i][1]]);
	  break;
	case 'up':
	  points.push([points[i][0],points[i][1]-size]);
	  break;
	case 'left':
	  points.push([points[i][0]-size,points[i][1]]);
	  break;
	case 'down':
	  points.push([points[i][0],points[i][1]+size]);
	  break;
	}
  }
  line.setPoints(points);
  layer.draw();
};

KeyboardJS.on('space',makeNextStep,function(){});

layer.add(line);
layer.add(border)
stage.add(layer);
