var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var timer = window.performance.now();
var stage = new PIXI.Stage(0xEEFFFF);
var renderer = PIXI.autoDetectRenderer(WIDTH, HEIGHT);
var controller = new Leap.Controller({frameEventName: 'animationFrame'})

controller.use('screenPosition', {scale: 0.25});
controller.connect()

document.body.appendChild(renderer.view);
var drum = new Drum()

requestAnimFrame(animate);
function animate() {
  drum.hit()
  requestAnimFrame(animate);
  renderer.render(stage);
}
