var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var timer = window.performance.now();
var stage = new PIXI.Stage(0xEEFFFF);
var renderer = PIXI.autoDetectRenderer(WIDTH, HEIGHT);
var controller = new Leap.Controller({frameEventName: 'animationFrame'})

controller.use('screenPosition', {scale: 0.25})
controller.connect()

document.body.appendChild(renderer.view);
var drumstick = new DrumStick(0)
var drum = new Drum()
var previousYPosition = {yPosition: []}

controller.on('frame', function(frame) {
  frame.hands.forEach(function(hand, index) {
    var point = hand.screenPosition();
    drumstick.update(point[0], point[1]);
    console.log(point[1]);
    if(previousYPosition['yPosition'][index] && point[1] && previousYPosition['yPosition'][index] > drum.threshold && point[1] < drum.threshold) {
      document.getElementById('snare').play()
    }
    previousYPosition['yPosition'][index] = point[1]
  });

  renderer.render(stage);
});

