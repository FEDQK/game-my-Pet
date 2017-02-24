/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  width: 360,
  height: 640
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boot = function (_Phaser$State) {
  _inherits(Boot, _Phaser$State);

  function Boot() {
    _classCallCheck(this, Boot);

    return _possibleConstructorReturn(this, (Boot.__proto__ || Object.getPrototypeOf(Boot)).call(this));
  }

  _createClass(Boot, [{
    key: 'init',
    value: function init() {
      this.game.stage.disableVisibilityChange = true;
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.pageAlignHorizontally = true;
      this.scale.pageAlignVertically = true;
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.load.image('preloadBar', 'assets/images/bar.png');
      this.load.image('logo', 'assets/images/toy.png');
    }
  }, {
    key: 'create',
    value: function create() {
      this.game.stage.backgroundColor = '#fff';

      this.state.start('Loader');
    }
  }]);

  return Boot;
}(Phaser.State);

exports.default = Boot;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_Phaser$State) {
  _inherits(Game, _Phaser$State);

  function Game() {
    _classCallCheck(this, Game);

    return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this));
  }

  _createClass(Game, [{
    key: 'init',
    value: function init() {}
  }, {
    key: 'preload',
    value: function preload() {}
  }, {
    key: 'create',
    value: function create() {
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

      this.pet.animations.add('eating', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 60, false);

      this.pet.customParams = { health: 100, fun: 100 };

      this.pet.inputEnabled = true;
      this.pet.input.pixelPerfectClick = true;
      this.pet.input.enableDrag();

      this.apple = this.game.add.sprite(56, 570, 'apple');
      this.apple.anchor.setTo(0.5);
      this.apple.inputEnabled = true;
      this.apple.customParams = { health: 20 };
      this.apple.events.onInputDown.add(this.pickItem, this);

      this.candy = this.game.add.sprite(148, 570, 'candy');
      this.candy.anchor.setTo(0.5);
      this.candy.inputEnabled = true;
      this.candy.customParams = { health: -10, fun: 10 };
      this.candy.events.onInputDown.add(this.pickItem, this);

      this.toy = this.game.add.sprite(235, 570, 'toy');
      this.toy.anchor.setTo(0.5);
      this.toy.inputEnabled = true;
      this.toy.customParams = { fun: 20 };
      this.toy.events.onInputDown.add(this.pickItem, this);

      this.rotate = this.game.add.sprite(317, 570, 'rotate');
      this.rotate.anchor.setTo(0.5);
      this.rotate.inputEnabled = true;
      this.rotate.events.onInputDown.add(this.rotatePet, this);

      this.buttons = [this.apple, this.candy, this.toy, this.rotate];
      this.selectedItem = null;
      this.uiBlocked = false;

      this.deathSound = this.game.add.audio('death');

      var style = { font: '20px Arial', fill: 'black' };

      this.healthText = this.game.add.text(100, 20, '', style);
      this.funText = this.game.add.text(250, 20, '', style);

      this.refreshStats();

      this.statsDecreaser = this.game.time.events.loop(Phaser.Timer.SECOND * 5, this.reduceProperties, this);

      this.stage.backgroundColor = 0x282c34;
      //this.addStartKitLabel();
    }
  }, {
    key: 'update',
    value: function update() {
      this.timeLive++;
      if (this.pet.customParams.health <= 0 || this.pet.customParams.fun <= 0) {
        this.pet.alpha = 0.4;
        this.uiBlocked = true;
        this.game.time.events.add(800, this.gameOver, this);
      }
    }
  }, {
    key: 'render',
    value: function render() {}
  }, {
    key: 'pickItem',
    value: function pickItem(sprite, event) {

      if (!this.uiBlocked) {

        this.clearSelection();

        sprite.alpha = 0.4;

        this.selectedItem = sprite;
      }
    }
  }, {
    key: 'rotatePet',
    value: function rotatePet(sprite, event) {
      var _this2 = this;

      if (!this.uiBlocked) {

        this.uiBlocked = true;

        this.clearSelection();
        sprite.alpha = 0.4;

        var petRotation = this.game.add.tween(this.pet);

        petRotation.to({ angle: '+720' }, 1000);
        petRotation.onComplete.add(function () {
          _this2.uiBlocked = false;

          sprite.alpha = 1;

          _this2.pet.customParams.fun += 10;
          _this2.refreshStats();
        }, this);
        petRotation.start();
      }
    }
  }, {
    key: 'clearSelection',
    value: function clearSelection() {
      this.buttons.forEach(function (element, index) {
        element.alpha = 1;
      });

      this.selectedItem = null;
    }
  }, {
    key: 'placeItem',
    value: function placeItem(sprite, event) {
      var _this3 = this;

      if (this.selectedItem && !this.uiBlocked) {
        (function () {
          var x = event.position.x;
          var y = event.position.y;

          var newItem = _this3.game.add.sprite(x, y, _this3.selectedItem.key);
          newItem.anchor.setTo(0.5);
          newItem.scale.setTo(0.5);
          newItem.customParams = _this3.selectedItem.customParams;

          _this3.uiBlocked = true;

          if (_this3.pet.x <= x) {
            _this3.pet.scale.setTo(0.5);
          } else {
            _this3.pet.scale.setTo(-0.5, 0.5);
          }
          var styleHeath = { fill: '#d52c37' };
          var styleFun = { fill: '#98e738' };

          var marginText = 0;

          if (newItem.customParams.health != undefined) marginText = 50;

          _this3.addHealthText = _this3.game.add.text(x + 20, y, newItem.customParams.health, styleHeath);
          _this3.addFunText = _this3.game.add.text(x + marginText + 20, y, newItem.customParams.fun, styleFun);

          var petMovement = _this3.game.add.tween(_this3.pet);
          var healthTextMovement = _this3.game.add.tween(_this3.addHealthText);
          var funTextMovement = _this3.game.add.tween(_this3.addFunText);
          healthTextMovement.to({ x: 100, y: 20 }, 700);
          funTextMovement.to({ x: 250, y: 20 }, 700);
          healthTextMovement.onComplete.add(function () {
            _this3.addHealthText.destroy();
          });
          funTextMovement.onComplete.add(function () {
            _this3.addFunText.destroy();
          });
          healthTextMovement.start();
          funTextMovement.start();
          petMovement.to({ x: x, y: y }, 700);
          petMovement.onComplete.add(function () {
            newItem.destroy();

            _this3.pet.animations.play('eating');

            _this3.uiBlocked = false;

            var stat = void 0;
            for (stat in newItem.customParams) {
              if (newItem.customParams.hasOwnProperty(stat)) {
                _this3.pet.customParams[stat] += newItem.customParams[stat];
              }
            }
            _this3.refreshStats();
          }, _this3);
          petMovement.start();
        })();
      }
    }
  }, {
    key: 'refreshStats',
    value: function refreshStats() {
      this.healthText.text = this.pet.customParams.health;
      this.funText.text = this.pet.customParams.fun;
    }
  }, {
    key: 'reduceProperties',
    value: function reduceProperties() {
      this.pet.customParams.health -= 10;
      this.pet.customParams.fun -= 15;
      this.refreshStats();
    }
  }, {
    key: 'gameOver',
    value: function gameOver() {
      var max = 0;
      for (var index in localStorage) {
        if (localStorage[index] * 1 > max) max = localStorage[index];
      }
      this.deathSound.play();
      localStorage.setItem(this.timeLive, this.timeLive);
      this.state.start('Home', true, false, 'GAME OVER! \nSCORE ' + this.timeLive + '\nBEST SCORE ' + max);
    }
  }, {
    key: 'addStartKitLabel',
    value: function addStartKitLabel() {
      var x = 15;
      var y = 15;

      this.add.text(x, y, 'game 2', {
        fill: 'white', font: '26px Open Sans'
      });
    }
  }]);

  return Game;
}(Phaser.State);

exports.default = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Phaser$State) {
  _inherits(Home, _Phaser$State);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));
  }

  _createClass(Home, [{
    key: 'init',
    value: function init(message) {
      this.message = message;
    }
  }, {
    key: 'create',
    value: function create() {
      var _this2 = this;

      var background = this.game.add.sprite(0, 0, 'background');
      background.inputEnabled = true;

      background.events.onInputDown.add(function () {
        _this2.state.start('Game');
      }, this);

      var style = { font: '35px Arial', fill: '#fff', align: 'center' };
      this.game.add.text(30, this.game.world.centerY + 200, 'TOUCH TO START', style);

      if (this.message) {
        this.game.add.text(0, this.game.world.centerY - 200, this.message, style);
      }
    }
  }]);

  return Home;
}(Phaser.State);

exports.default = Home;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loader = function (_Phaser$State) {
  _inherits(Loader, _Phaser$State);

  function Loader() {
    _classCallCheck(this, Loader);

    return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this));
  }

  _createClass(Loader, [{
    key: 'preload',
    value: function preload() {
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
      this.load.spritesheet('pet', 'assets/images/pet.png', 192, 192, 24);

      this.load.audio('death', ['assets/audio/death.ogg', 'assets/audio/death.mp3']);
    }
  }, {
    key: 'create',
    value: function create() {
      this.state.start('Home');
    }
  }, {
    key: 'addProgressLabel',
    value: function addProgressLabel() {
      var style = {
        font: '41px Open Sans',
        fill: '#000'
      };

      this.progressLabel = this.add.text(this.game.world.centerX, this.game.world.centerY + 100, 'Loading: 0% (0/0)', style);
      this.progressLabel.anchor.setTo(0.5);
    }
  }, {
    key: 'refreshProgress',
    value: function refreshProgress(progress, cacheKey, success, totalLoaded, totalFiles) {
      this.progressLabel.text = 'Loading ' + progress + '% (' + totalLoaded + '/' + totalFiles + ')';
    }
  }]);

  return Loader;
}(Phaser.State);

exports.default = Loader;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var init = exports.init = function init(key) {
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

  ga('create', key, 'auto');
  ga('send', 'pageview');
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var init = exports.init = function init() {
  var script = document.createElement('script');
  script.onload = function () {
    var stats = new Stats();
    document.body.appendChild(stats.dom);
    requestAnimationFrame(function loop() {
      stats.update();
      requestAnimationFrame(loop);
    });
  };
  script.src = '//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';
  document.head.appendChild(script);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _analytics = __webpack_require__(5);

var analytics = _interopRequireWildcard(_analytics);

var _stats = __webpack_require__(6);

var stats = _interopRequireWildcard(_stats);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _boot = __webpack_require__(1);

var _boot2 = _interopRequireDefault(_boot);

var _game = __webpack_require__(2);

var _game2 = _interopRequireDefault(_game);

var _loader = __webpack_require__(4);

var _loader2 = _interopRequireDefault(_loader);

var _home = __webpack_require__(3);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

analytics.init();
stats.init();

var game = new Phaser.Game(_config2.default.width, _config2.default.height, Phaser.AUTO);

window.onresize = function () {
  //game.scale.setGameSize(window.innerWidth, window.innerHeight);
};

game.state.add('Boot', _boot2.default);
game.state.add('Game', _game2.default);
game.state.add('Loader', _loader2.default);
game.state.add('Home', _home2.default);

game.state.start('Boot');

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map