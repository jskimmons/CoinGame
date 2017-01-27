var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload(){
	game.load.image('quarter', 'assets/quarter.png');
	game.load.image('dime', 'assets/dime.png');
	game.load.image('nickel', 'assets/nickel.png');
	game.load.image('penny', 'assets/penny.png');
}

var quarter;
var dime;
var nickel;
var penny;

function create(){

	//scaling
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    game.world.setBounds(0,0,4000,600);

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

   	// sprites for one coin and coin purse
    quarter = game.add.sprite(50, 50, 'quarter');
   	dime = game.add.sprite(150, 50, 'dime');
    nickel = game.add.sprite(250, 50, 'nickel');
    penny = game.add.sprite(350, 50, 'penny');

    //  Input Enable the sprites
    quarter.inputEnabled = true;
    dime.inputEnabled = true;
    nickel.inputEnabled = true;
    penny.inputEnabled = true;

    //  Allow dragging - the 'true' parameter will make the sprite snap to the center
    quarter.input.enableDrag(true);
    dime.input.enableDrag(true);
    nickel.input.enableDrag(true);
    penny.input.enableDrag(true);

}

function update(){

}