var Game = {
    height: 1000,
    width: 400
};

var game = null;

Game.init = function (game) {
    
};

function init () {
    
    game = new Phaser.Game(Game.width, Game.height, Phaser.CANVAS, '', null, false, false);
    
    game.state.add('init', Game.init);
    game.state.add('preloader', Game.preloader);
    game.state.add('level', Game.level);
    
    game.state.start('preloader');
    
};

