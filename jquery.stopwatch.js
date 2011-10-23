/*
* jQuery Stopwatch plugin 
*
* Copyright (c) 2011 Shawn Lee
*/
(function($) {

	$.widget( "la.stopwatch", {
	    
		// set default options
	    options: {
	        interval: 1,
	        timer: null
	    },
	    
		// initialize the plugin
		_create: function() {
			this.options.timer = 0;
			
			// This is bit messy, but IE is a crybaby and must be coddled. 
			this.element.html('<span class="min">00</span>:<span class="sec">00</span>');
		},
		
		// clean up on destroy/removal
		start: function() {
			var m=this.element.find('.min');
			var s=this.element.find('.sec');
			this.options.timer = setInterval(dotime, this.options.interval*1000);
			
			function dotime(){
				minute = parseFloat(m.text());
				second = parseFloat(s.text());
				
				second++;
				
				if(second > 59) {
					second = 0;
					minute = minute + 1;
				}
				
				m.html("0".substring(minute >= 10) + minute);
				s.html("0".substring(second >= 10) + second);
			}
		},
		stop: function(){
			clearInterval(this.options.timer);
			this.options.timer = 0;
		},
		reset: function(){
			clearInterval(this.options.timer);
			this.options.timer = 0;
			this.element.find('.min').html("00");
			this.element.find('.sec').html("00");
		}
	});

	
})(jQuery);