export default class Home extends Phaser.State {
  constructor() {
    super();
  }

  init(message) {
    this.message = message;
  }

  create() {
    let background = this.game.add.sprite(0, 0, 'background');
    background.inputEnabled = true;

    background.events.onInputDown.add(() => {
      this.state.start('Game');
    }, this);

    let style = {font: '35px Arial', fill: '#fff', align: 'center'};
    this.game.add.text(30, this.game.world.centerY + 200, 'TOUCH TO START', style);

    if(this.message) {
      this.game.add.text(20, this.game.world.centerY - 200, this.message, style);
    }
  }

}
