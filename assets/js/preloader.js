Game.preloader = function (game) {
    
};



Game.preloader.prototype = {
    init: function () {
        
    },
    
    preload: function () {
        
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
        this.preloadBar.anchor.setTo(0.5);
        this.load.setPreloadSprite(this.preloadBar);
        
        //Load assets
        this.load.image('back', 'assets/images/back.png');
        this.load.image('btn', 'assets/images/button.png');
        this.load.spritesheet('player', 'assets/images/miks2.png', 100, 130);
        
        //loading map        
        this.load.image('tile', 'assets/images/tile.png');

        
        
        
    },
    
    create: function (){        
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.renderer.renderSession.roundPixels = true;
        this.state.start('level');
        console.log("Level1 wird gestartet...");
        
    },
};