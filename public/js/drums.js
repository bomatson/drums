var Drum = Class.extend({
  init: function() {
    this.render()
  },
  render: function() {
    this.surface = new PIXI.Graphics()
    this.surface.beginFill(0xFFCC00, 1)
    this.surface.drawCircle(200,400,150)
    stage.addChild(this.surface);
  },
  hit: function() {
   this.surface.position.y += 100
  }
})
