# jquery.stopwatch

A very simple stopwatch mechanism for jQuery that supports multiple timers and controls per page

## Usage
### Simple Usage


#### HTML
    <div id="sw1" class="stopwatch"></div>
    <div id="start1" onclick="">Start</div>
    <div id="stop1" onclick="">Stop</div>
    <div id="reset1" onclick="">Reset</div>
    
    <div id="sw2" class="stopwatch"></div>
    <div id="start2" onclick="">Start</div>
    <div id="stop2" onclick="">Stop</div>
    <div id="reset2" onclick="">Reset</div>

#### jQuery
	//init our stopwatches to one second intervals
    $('.stopwatch').stopwatch({ interval: 1 });

	$('#start1').click(function(){
		$('#sw1').stopwatch('start');
	});
	$('#stop1').click(function(){
		$('#sw1').stopwatch('stop');
	});
	$('#reset1').click(function(){
		$('#sw1').stopwatch('reset');
	});
	
## Author

[ChriShawn Lee](http://chrishawn.net)

## License

Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php 
