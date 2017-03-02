Game.level = function (game) {};

var scrollback = 0.2;

Game.level.prototype = {
    preload: function () {

        
    },
    create: function () {
        physic = 1400;
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.stage.backgroundColor = '#992d2d';
        this.player = Player(this, 200, 600);
        
        this.player.create();
        
        this.tileWidth = this.game.cache.getImage('tile').width;
        this.tileHeight = this.game.cache.getImage('tile').height;
        
        this.platforms = this.game.add.group();
        this.platforms.enableBody = true;
        this.platforms.createMultiple(250, 'tile');
        
        this.score = 0;
        this.Score();
        
        
        
        
       this.timer = game.time.events.loop(1000, this.addPlatform, this);
    },
    update: function () {
        this.physics.arcade.gravity.y = physic;
        this.game.physics.arcade.collide(this.player, this.platforms);
        
        
        this.player.input();
        
        if(this.player.body.position.y >= this.game.world.height - this.player.body.height){
            this.gameOver();
        }
        
        if(this.player.body.position.x >= this.game.world.width - this.player.body.width){
            console.log("Level1 wird gestartet...");
        }
        
        
    },   
    Score: function(){
        scoreFont = '100px Arial';
        
        this.scoreLabel = this.game.add.text((this.game.world.centerX), 100, '0', {font: scoreFont, fill: '#fff'});
        this.scoreLabel.anchor.setTo(0.5);
        this.scoreLabel.align = 'center';
    },
    initScore: function(){
        
        this.score += 1;
        this.scoreLabel.text = this.score;
    },
    gameOver: function(){
        this.game.state.start('level');
        console.log("Level1 wird gestartet...");
        
    },   
    addTile: function(x, y){
        var tile = this.platforms.getFirstDead();
        
        tile.reset(x, y);
        tile.body.velocity.y = 0;
        tile.body.immovable = true;
        
        tile.checkWorldBounds = true;
        tile.outOfBoundsKill = true;
    },    
    addPlatform: function(y){
      
        if(typeof(y) == 'undefined'){ 
            y = -this.tileHeight;
            this.initScore();
        }
        
        var tilesNeeded = Math.ceil(this.game.world.width / this.tileWidth);
        
        var hole = Math.floor(Math.random() * (tilesNeeded - 3)) + 1;
        
        for (var i = 0; i < tilesNeeded; i++){
            if (i != hole && i != hole + 3){
                this.addTile(i * this.tileWidth, y); 
            }           
        }
    },    
};