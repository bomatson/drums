var Drum = Class.extend({
  init: function() {
    this.render()
  },
  render: function() {
    this.surface = new PIXI.Graphics()
    this.surface.beginFill(0xFFcc00, 1)
    this.surface.drawCircle(500,400,150)
    stage.addChild(this.surface);
  },
  threshold: 400,
  hit: function() {
   this.surface.position.y -= 1
  }
})
