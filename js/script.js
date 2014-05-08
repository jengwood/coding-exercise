(function () {

	//polling options
	var options = {frequency: 15};

	//update html for each awesome band
	var callback = function(awesomeBands) {
		$(awesomeBands).each(function(index) {
			var band = this;
			$('#list').children().eq(index).fadeOut(300);
			setTimeout(function() {
				$('#list').children().eq(index).html('<h1>'+band.name+'</h1><span class="mentions">Mentions</span><span class="number">'+formatNum(band.count)+'</span>').fadeIn(300);
			}, 300);
		});
	}

	//add commas- http://stackoverflow.com/questions/3883342/add-commas-to-a-number-in-jquery
	var formatNum = function(val) {
		while (/(\d+)(\d{3})/.test(val.toString())){
		  val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
		}
		return val;
	}
	
	//create and start new awesome bands
	var awesomeBands = new massrel.Poller(options, callback);
	awesomeBands.start();

})();
