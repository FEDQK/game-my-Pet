export default class Game extends Phaser.State {
  constructor() {
    super();
  }

  init() {

  }

  preload() {

  }

  create() {
    this.background = this.game.add.sprite(0, 0, 'background');
    this.background.inputEnabled = true;
    this.background.events.onInputDown.add(this.placeItem, this);
    this.background.width = 360;
    this.background.height = 640;

    this.pet = this.game.add.sprite(100, 400, 'pet');
    this.pet.anchor.setTo(0.5);
    this.pet.scale.setTo(0.5);

    this.pet.animations.add('eating', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
      13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 60, false);

    this.pet.customParams = {health: 100, fun: 100 };

    this.pet.inputEnabled = true;
    this.pet.input.enableDrag();


    this.apple = this.game.add.sprite(56, 570, 'apple');
    this.apple.anchor.setTo(0.5);
    this.apple.inputEnabled = true;
    this.apple.customParams = {health: 20};
    this.apple.events.onInputDown.add(this.pickItem, this);

    this.candy = this.game.add.sprite(148, 570, 'candy');
    this.candy.anchor.setTo(0.5);
    this.candy.inputEnabled = true;
    this.candy.customParams = {health: -10, fun: 10};
    this.candy.events.onInputDown.add(this.pickItem, this);

    this.toy = this.game.add.sprite(235, 570, 'toy');
    this.toy.anchor.setTo(0.5);
    this.toy.inputEnabled = true;
    this.toy.customParams = {fun: 20};
    this.toy.events.onInputDown.add(this.pickItem, this);

    this.rotate = this.game.add.sprite(317, 570, 'rotate');
    this.rotate.anchor.setTo(0.5);
    this.rotate.inputEnabled = true;
    this.rotate.events.onInputDown.add(this.rotatePet, this);

    this.buttons = [this.apple, this.candy, this.toy, this.rotate];
    this.selectedItem = null;
    this.uiBlocked = false;


    this.deathSound = this.game.add.audio('death');

    let style = {font: '20px Arial', fill: 'black'};
    this.game.add.text(140, 20, 'Health:', style);
    this.game.add.text(260, 20, 'Fun:', style);

    this.healthText = this.game.add.text(210, 20, '', style);
    this.funText = this.game.add.text(305, 20, '', style);

    this.refreshStats();

    this.statsDecreaser = this.game.time.events.loop(Phaser.Timer.SECOND * 5, this.reduceProperties, this);


    this.stage.backgroundColor = 0x282c34;
    //this.addStartKitLabel();
  }

  update() {
    if(this.pet.customParams.health <= 0 || this.pet.customParams.fun <= 0 ) {
      this.deathSound.play();
      this.pet.alpha = 0.4;
      this.uiBlocked = true;
      this.game.time.events.add(2000, this.gameOver, this);
    }
  }

  render() {

  }

  pickItem(sprite, event) {

    if(!this.uiBlocked) {

      this.clearSelection();

      sprite.alpha = 0.4;

      this.selectedItem = sprite;
    }
  }

  rotatePet(sprite, event) {
    if(!this.uiBlocked) {

      this.uiBlocked = true;

      this.clearSelection();
      sprite.alpha = 0.4;

      let petRotation = this.game.add.tween(this.pet);

      petRotation.to({angle: '+720'}, 1000);
      petRotation.onComplete.add(() => {
        this.uiBlocked = false;

        sprite.alpha = 1;

        this.pet.customParams.fun += 10;
        this.refreshStats();
      }, this);
      petRotation.start();
    }
  }

  clearSelection() {
    this.buttons.forEach((element, index) => {
      element.alpha = 1;
    });

    this.selectedItem = null;
  }

  placeItem(sprite, event) {
    if(this.selectedItem && !this.uiBlocked) {
      let x = event.position.x;
      let y = event.position.y;

      let newItem = this.game.add.sprite(x, y, this.selectedItem.key);
      newItem.anchor.setTo(0.5);
      newItem.scale.setTo(0.5);
      newItem.customParams = this.selectedItem.customParams;

      this.uiBlocked = true;

      if(this.pet.x <= x) {
        this.pet.scale.setTo(0.5);
      } else {
        this.pet.scale.setTo(-0.5, 0.5);
      }


      let petMovement = this.game.add.tween(this.pet);
      petMovement.to({x: x, y: y}, 700);
      petMovement.onComplete.add(() => {
        newItem.destroy();

        this.pet.animations.play('eating');

        this.uiBlocked = false;

        let stat;
        for(stat in newItem.customParams) {
          if(newItem.customParams.hasOwnProperty(stat)) {
            this.pet.customParams[stat] += newItem.customParams[stat];
          }
        }
        this.refreshStats();
      }, this);
      petMovement.start();

    }
  }

  refreshStats() {
    this.healthText.text = this.pet.customParams.health;
    this.funText.text = this.pet.customParams.fun;
  }

  reduceProperties() {
    this.pet.customParams.health -= 10;
    this.pet.customParams.fun -= 15;
    this.refreshStats();
  }

  gameOver() {
    this.state.start('Home', true, false, 'GAME OVER!');
  }



  addStartKitLabel() {
    const x = 15;
    const y = 15;

    this.add.text(x, y, 'game 2', {
      fill: 'white', font: '26px Open Sans'
    });
  }
}
