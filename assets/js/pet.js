var Pet = function (world, x, y) {
	var pet = game.add.sprite(x, y, 'pet');
    pet.scale.setTo(0.75);
	

	pet.create = function() {
        game.physics.arcade.enable(pet);
              
        //___Prepare animations___
	    pet.animations.add('down', [0, 1, 2, 3], 4, true);
        pet.animations.add('left', [4, 5, 6, 7], 4, true);
        pet.animations.add('right', [8, 9, 10, 11], 4, true);
        pet.animations.add('up', [12, 13, 14, 15], 4, true);
        pet.animations.add('idle', [0], 0, true);
    
        
        petSpeed = 150;
        

        //___Configure Btns___
        controls = {
            right : game.input.keyboard.addKey(Phaser.Keyboard.D),
            left : game.input.keyboard.addKey(Phaser.Keyboard.A),
            up : game.input.keyboard.addKey(Phaser.Keyboard.W), 
            down : game.input.keyboard.addKey(Phaser.Keyboard.S),        
        };        
    },
	

	pet.input = function() {
 

        pet.body.velocity.x = 0;
        pet.body.velocity.y = 0;



        if(controls.right.isDown){
            pet.animations.play('right');
            pet.body.velocity.x += petSpeed;
        } else if(controls.up.isDown) {
            pet.animations.play('up');
            pet.body.velocity.y -= petSpeed;

        } else if(controls.left.isDown) {
            pet.animations.play('left');
            pet.body.velocity.x -= petSpeed;

        } else if(controls.down.isDown) {
            pet.animations.play('down');
            pet.body.velocity.y += petSpeed;

        } else if(pet.body.velocity.x == 0 && pet.body.velocity.y == 0) {
            pet.animations.play('idle');
        }

    }
	console.log('pet Geladen!');
    return pet;
};

