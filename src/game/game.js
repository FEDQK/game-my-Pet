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

    this.timeLive = 0;

    this.panel = this.game.add.sprite(50, 13, 'panel');

    this.pet = this.game.add.sprite(100, 400, 'pet');
    this.pet.anchor.setTo(0.5);
    this.pet.scale.setTo(0.5);

    this.pet.animations.add('eating', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
      13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 60, false);

    this.pet.customParams = {health: 100, fun: 100 };

    this.pet.inputEnabled = true;
    this.pet.input.pixelPerfectClick = true;
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

    this.healthText = this.game.add.text(100, 20, '', style);
    this.funText = this.game.add.text(250, 20, '', style);

    this.refreshStats();

    this.statsDecreaser = this.game.time.events.loop(Phaser.Timer.SECOND * 5, this.reduceProperties, this);


    this.stage.backgroundColor = 0x282c34;
    //this.addStartKitLabel();
  }

  update() {
    this.timeLive++;
    if(this.pet.customParams.health <= 0 || this.pet.customParams.fun <= 0 ) {
      this.pet.alpha = 0.4;
      this.uiBlocked = true;
      this.game.time.events.add(800, this.gameOver, this);
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
      let styleHeath = {fill: '#d52c37'};
      let styleFun = {fill: '#98e738'};

      let marginText = 0;

      if(newItem.customParams.health != undefined)
      marginText = 50;


      this.addHealthText = this.game.add.text(x+20, y, newItem.customParams.health, styleHeath);
      this.addFunText = this.game.add.text(x+marginText+20, y, newItem.customParams.fun, styleFun);

      let petMovement = this.game.add.tween(this.pet);
      let healthTextMovement = this.game.add.tween(this.addHealthText);
      let funTextMovement = this.game.add.tween(this.addFunText);
      healthTextMovement.to({x: 100, y: 20},700);
      funTextMovement.to({x: 250, y: 20},700);
      healthTextMovement.onComplete.add(() => {
        this.addHealthText.destroy();
      });
      funTextMovement.onComplete.add(() => {
        this.addFunText.destroy();
      });
      healthTextMovement.start();
      funTextMovement.start();
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
    var max = 0;
    for (var index in localStorage) {
      if (localStorage[index]*1 > max) max = localStorage[index];
  }
    this.deathSound.play();
    localStorage.setItem(this.timeLive, this.timeLive);
    this.state.start('Home', true, false, 'GAME OVER! \nSCORE '+this.timeLive+'\nBEST SCORE ' +max);
  }



  addStartKitLabel() {
    const x = 15;
    const y = 15;

    this.add.text(x, y, 'game 2', {
      fill: 'white', font: '26px Open Sans'
    });
  }
}
