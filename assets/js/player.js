var Player = function (world, x, y) {
	var player = game.add.sprite(x, y, 'player');

	

	player.create = function() {
        Speed = 250;
        GJump = 0;
        size = 0.2;
        Graviti = 1000;
        game.physics.enable(player, Phaser.Physics.ARCADE);
        player.animations.add('walk', [1, 2, 3, 4], 10, true);
        player.animations.add('idle', [0], 10, true);
        player.body.collideWorldBounds = true;
        player.scale.setTo(size);
        player.anchor.setTo(0.5);

        
        controls = {
            right : game.input.keyboard.addKey(Phaser.Keyboard.D),
            left : game.input.keyboard.addKey(Phaser.Keyboard.A),
            up : game.input.keyboard.addKey(Phaser.Keyboard.W), 
            down : game.input.keyboard.addKey(Phaser.Keyboard.S),        
        }; 
     
    },
	

	player.input = function() {
        
        
        player.body.velocity.x = 0;
        player.body.allowGravity = false;

    
        if(controls.left.isDown){
            player.body.velocity.x = -Speed;
        } else if (controls.right.isDown)
        {
            player.body.velocity.x = Speed;  
        }
   
        
        
 

    }
	console.log('Player Geladen!');
    return player;
};

