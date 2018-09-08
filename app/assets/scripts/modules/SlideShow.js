import $ from 'jquery';

class SlideShow {
	constructor() {
		
		this.sliding();
	}

	sliding(){
		$("#slideshow > div:gt(0)").hide();

		setInterval(function() { 
		  $('#slideshow > div:first')
		    .slideUp(3000)
		    .next()
		    .slideDown(3000)
		    .end()
		    .appendTo('#slideshow');
		},  3000);
	}
		
}

export default SlideShow;


