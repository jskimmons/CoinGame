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
var price;
var priceText;
var score;
var scoreText;
var coins;
var pointer;

function create(){

	score=0;

	//scaling
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    game.world.setBounds(0,0,4000,600);

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

   	// sprites for one coin and coin purse
    quarter = game.add.sprite(50, 50, 'quarter');
    quarter.initialX = 50;
    quarter.value = 25;
    quarter.events.onDragStop.add(onDragStop, this);
   	dime = game.add.sprite(170, 50, 'dime');
   	dime.initialX = 170;
   	dime.value = 10;
   	dime.events.onDragStop.add(onDragStop, this);
    nickel = game.add.sprite(250, 50, 'nickel');
    nickel.initialX = 250;
    nickel.value = 5;
    nickel.events.onDragStop.add(onDragStop, this);
    penny = game.add.sprite(350, 50, 'penny');
    penny.initialX = 350;
    penny.value = 1;
    penny.events.onDragStop.add(onDragStop, this);

    coins = [quarter, dime, nickel, penny];

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

    // Random price
    price = randPrice();
    // Add game text
    priceText = game.add.text(550, 16, 'Price: ' + price + ' cents', { font: "32px Verdana", fill: '#fff' });
    scoreText = game.add.text(528, 60, 'Added: ' + score + ' cents', { font: "32px Verdana", fill: '#fff' });

}

function update(){
	if(score == price){
		score = 0;
		scoreText.text = 'You Win!';
		price = randPrice();
		priceText.text = 'Price: ' + price + ' cents'
	}
	if(score>price){
		scoreText.text = 'You Lose';
		restart();
	}
}

function randPrice(){
	return Math.ceil(Math.random() * (99 - 1) + 1);
}

function restart(){
	score = 0;
	scoreText.text = 'Score: ' + score;
}


function onDragStop(sprite, pointer){
	if (sprite.position.y > 300) {
			sprite.position.x=sprite.initialX;
			sprite.position.y=50;
			score += sprite.value;
			scoreText.text = 'Score: ' + score;
		}
}