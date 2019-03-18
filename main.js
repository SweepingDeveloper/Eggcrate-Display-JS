//For audio files:
/*
var audio = new Audio('audio.mp3');
audio.play();

*/

//------------
//System Vars
//------------
var stage = document.getElementById('gameCanvas');
stage.width = STAGE_WIDTH;
stage.height = STAGE_HEIGHT;
var ctx = stage.getContext("2d");
ctx.fillStyle = "black";
ctx.font = GAME_FONTS;
var display_value = "00000001";
var values = "0123456789$.,";
var blink = 0;
var counter = 0;
var counterflag = 0;
var countdown = 0;

var mouseX = 0;
var mouseY = 0;
var mouseflag = 0;

//-----------------
	//Browser Detection
	//-----------------
	navigator.sayswho= (function(){
		var N= navigator.appName, ua= navigator.userAgent, tem;
		var M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
		if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
		M= M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];

		return M;
	})();

	var browser;
	if (navigator.sayswho[0] == "Firefox")
		browser="f";
	else if (navigator.sayswho[0] == "Chrome")
		browser="c";
	else if (navigator.sayswho[0] == "Safari")
		browser="s";
	else  if (navigator.sayswho[0] == "Microsoft")
		browser="m";
	else
		browser="f";


//---------------
//Preloading ...
//---------------
var gameImage = new Image();
gameImage.onload = setInterval(mainloop, FRAMERATE);
gameImage.src = IMAGE_PATH;


	var d_value = document.getElementById('n_bar');
	var blink_box = document.getElementById('blink');
	var countdown_box = document.getElementById('countdown');
	var sound_box = document.getElementById('sound');
	
	console.log("Element is "+d_value);
	d_value.addEventListener('change',displayNum);
	countdown_box.addEventListener('change', function(){counter = 0;})
	
//------------
//Game Loop
//------------


function mainloop()
{

	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,stage.width,stage.height);
	ctx.fillStyle = "#FFFFFF";
	//ctx.fillText("Counter: "+counter+ "  Blink: "+blink+"    Countdown: "+countdown,8,32);
	//ctx.fillText("Value: "+display_value,8,64);
	
	blink =0 ;
	countdown = 0;

	if (blink_box.checked) {blink = 1;}
	if (countdown_box.checked) 
		{
			countdown = 1;
			/*
			if (counterflag == 0)
			{
				counterflag = 1;
				counter = 0;
			}
			*/
		}
	

	
	for (var a = 0; a <= display_value.length; a++)
	{
		for (var b = 0; b <= values.length; b++)
		{
			if (display_value.substring(a,a+1) ==  values[b])
			{
				if (blink == 1 && counter <= FRAMERATE/2)
				{
					ctx.drawImage(gameImage,COORDS_X[b], COORDS_Y[b], DIM_X, DIM_Y, PLACE_X+a*(SCALE_X+4), PLACE_Y, SCALE_X, SCALE_Y);						
				}		
				if (blink == 0)
				{
					ctx.drawImage(gameImage,COORDS_X[b], COORDS_Y[b], DIM_X, DIM_Y, PLACE_X+a*(SCALE_X+4), PLACE_Y, SCALE_X, SCALE_Y);						
				}						
			}
		}
	}
	
	counter++;
	if (counter == FRAMERATE) 
	{
		counter = 0;
		if (countdown == 1)
		{
			
			d_value.value = parseInt(d_value.value)-1;
			if (d_value.value == "0") 
				{
					countdown_box.checked = false;
					counterflag = 0;
				}
			
			
			displayNum();
			
		}
	}
	
}


function displayNum()
{
	display_value = "";
	
	for (var a = 1; a <= 8-d_value.value.length; a++)
	{
		display_value += " ";	
	}
	display_value += d_value.value;
	
	if (sound_box.checked)
	{
		DING.play();
	
	}
	
	
	/*
	countdown = 0;
	blink = 0;
	//Check for blinking
	
	if (display_value.substring(display_value.length-1, display_value.length) == 'b')
	{
		display_value = " " + display_value.substring(0,(display_value.length)-1);
		console.log(display_value);
		blink = 1;
	}
	
	//Check for a clock
	if (display_value.substring(display_value.length-1, display_value.length) == 'c')
	{
		display_value = " " + display_value.substring(0,(display_value.length)-1);
		console.log(display_value);
		countdown = 1;
	}
	*/
	
	
	
}


function mouseDown(event)
{
	if (mouseflag == 0) {mouseflag = 1;}

	if (browser == "f" || browser == "m")
	{
	mouseX = event.clientX - stage.offsetLeft + document.documentElement.scrollLeft;
	mouseY = event.clientY - stage.offsetTop + document.documentElement.scrollTop;
	}
	else //"s" or "c"
	{
	mouseX = event.clientX - stage.offsetLeft + document.body.scrollLeft;
	mouseY = event.clientY - stage.offsetTop + document.body.scrollTop;
	}
		

}

function mouseUp(event)
{	
	if (mouseflag == 1) 
	{
		mouseflag = 0;
		
		
	}
	if (browser == "f" || browser == "m")
	{
	mouseX = event.clientX - stage.offsetLeft + document.documentElement.scrollLeft;
	mouseY = event.clientY - stage.offsetTop + document.documentElement.scrollTop;
	}
	else //"s" or "c"
	{
	mouseX = event.clientX - stage.offsetLeft + document.body.scrollLeft;
	mouseY = event.clientY - stage.offsetTop + document.body.scrollTop;
	}
}	






	