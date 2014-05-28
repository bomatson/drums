var DrumStick = Class.extend({
  init: function(startingX) {
    this.surface = new PIXI.Graphics()
    this.surface.beginFill(0xFFCC00, 1)
    this.surface.drawRect(startingX, 0, 100, 10)
    stage.addChild(this.surface);
  },
  update: function(handX, handY) {
    this.surface.position.x = handX
    this.surface.position.y = handY
  }
})
