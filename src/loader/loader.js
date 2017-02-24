export default class Loader extends Phaser.State {
  constructor() {
    super();
  }

  preload() {
    this.addProgressLabel();
    this.load.onFileComplete.add(this.refreshProgress, this);

    this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.logo.anchor.setTo(0.5);

    /*this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY+100, 'preloadBar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(0.5);
    this.load.setPreloadSprite(this.preloadBar);*/

    this.load.image('background', 'assets/images/background.jpg');
    this.load.image('apple', 'assets/images/apple.png');
    this.load.image('candy', 'assets/images/candy.png');
    this.load.image('rotate', 'assets/images/rotate.png');
    this.load.image('toy', 'assets/images/toy.png');
    this.load.image('panel', 'assets/images/panel.png');
    this.load.spritesheet('pet','assets/images/pet.png', 192, 192, 24);

    this.load.audio('death', ['assets/audio/death.ogg', 'assets/audio/death.mp3']);



  }

  create() {
    this.state.start('Home');
  }

  addProgressLabel() {
    const style = {
      font: '41px Open Sans',
      fill: '#000',
    }

    this.progressLabel = this.add.text(this.game.world.centerX, this.game.world.centerY + 100, 'Loading: 0% (0/0)', style);
    this.progressLabel.anchor.setTo(0.5);
  }

  refreshProgress(progress, cacheKey, success, totalLoaded, totalFiles) {
    this.progressLabel.text = `Loading ${progress}% (${totalLoaded}/${totalFiles})`;
  }
}
