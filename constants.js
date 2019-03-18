/*

Special Thanks to:

www.gaminglogy.com
W3Schools
Stack Overflow
Home and Learn


*/

var STAGE_WIDTH = 640, 
    STAGE_HEIGHT= 480,
	FRAMERATE   =  33,
	GAME_FONTS  = "bold 20px sans-serif";
	
var IMAGE_PATH = "pics/eggcrate.png";


var COORDS_X = [0,125,250,375,500,625,750,875,1000,1125,0,125,250,375,500];
var COORDS_Y = [0,0,0,0,0,0,0,0,0,0,175,175,175,175,175];
var DIM_X = 125;
var DIM_Y = 175;
var PLACE_X = 60;
var PLACE_Y = 200;
var SCALE_X = 60;
var SCALE_Y = 80;


var DING = new Audio('audio/ec_ding.wav');