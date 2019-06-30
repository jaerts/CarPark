
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

function loadComplete() {
	this.ready = true;
}


BasicGame.Preloader.prototype = {

	init: function () {
		this.preloadBar = null;
		this.ready = false;
	},

	preload: function () {

		//	These are the assets we loaded in Boot.js				
		this.preloadBar = this.add.sprite(this.game.width / 2, this.game.height / 2, 'preloaderBar');		
		this.preloadBar.anchor.setTo(0.5);

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.

		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		//	You can find all of these assets in the Phaser Examples repository

		this.load.image('starfield', 'assets/images/starfield.png');

		// Audio track Attribution (menu sci-fi 1.ogg, CC 3.0)
		// Alexandr-Zhelanov: https://soundcloud.com/alexandr-zhelanov 
	//	this.load.audio('bgm', ['assets/audio/menusci-fi1.ogg', 'assets/audio/menusci-fi1.mp3']);
		
		
		// load theme's
		game.load.image('mushroom1', 'assets/images/mushroom1.png');
    	game.load.image('snail', 'assets/images/snail.png');
    
    	game.load.image('mushroom2h', 'assets/images/mushroom2h.png');
    	game.load.image('mushroom3h', 'assets/images/mushroom3h.png');
    
		game.load.image('mushroom2v', 'assets/images/mushroom2v.png');
    	game.load.image('mushroom3v', 'assets/images/mushroom3v.png');
		game.load.image('gridbg', 'assets/images/gridbackground.png');
		
		game.load.image('i_check', 'assets/images/check.png');
		
		
		// load buttons
		game.load.image('b_easy', 'assets/images/button_easy.png');
		game.load.image('b_medium', 'assets/images/button_medium.png');
		game.load.image('b_hard', 'assets/images/button_hard.png');
		game.load.image('b_crazy', 'assets/images/button_crazy.png');
		
		game.load.image('b_start', 'assets/images/button_start-playing.png');
		
		//game.load.image('i_top', 'assets/images/pagetop.png');
		game.load.image('starfield', 'assets/images/starfield.png');
		
		// clear all storage button
		game.load.image('b_clear', 'assets/images/edit_clear.png');
		
		// game buttons
		game.load.image('b_border', 'assets/images/buttonborder.png');
		game.load.image('b_next', 'assets/images/next.png');
		game.load.image('b_prev', 'assets/images/prev.png');
		game.load.image('b_restart', 'assets/images/restart.png');
		game.load.image('b_exit', 'assets/images/button_exit-game.png');
		game.load.image('b_return', 'assets/images/undo.png');
		game.load.image('b_list', 'assets/images/list.png');
		
		// level select
		game.load.image('b_level', 'assets/images/level.png');
		game.load.image('b_level_easy', 'assets/images/level_easy.png');
		game.load.image('b_level_medium', 'assets/images/level_medium.png');
		game.load.image('b_level_hard', 'assets/images/level_hard.png');
		game.load.image('b_level_crazy', 'assets/images/level_crazy.png');
		
		// load levels
		game.load.text('easylevels', 'assets/levels/easy.txt');	
		game.load.text('mediumlevels', 'assets/levels/medium.txt');	
		game.load.text('hardlevels', 'assets/levels/hard.txt');	
		game.load.text('crazylevels', 'assets/levels/crazy.txt');	
		//BasicGame.easyLevels = game.cache.getText('easylevels');
    	//text = html.split('\n');

		game.load.onLoadComplete.add(loadComplete, this);
		
	},

	create: function () {


	//	this.state.start('MainMenu');


	},
	update: function () {

	//	if (this.cache.isSoundDecoded('bgm') && this.ready == false) {
			if (this.ready); {
			this.state.start('MainMenu');
			}
	//	}
	}

};
