import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	
	constructor() {
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint();
		//vogliamo selezionare una collezione con tutte le pagine
		this.pageSections = $(".page-section");
		//seleziono tutti i link element della primary-nav
		this.headerLinks = $(".primary-nav a");
		this.addSmoothScrolling();
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}
	
	//waypoint per l`header
	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			// element si aspetta un elemento standard? javascript, prendendo il primo elemeento della collezione jquey ottengo questo
			element: this.headerTriggerElement[0],
			handler: function(direction){
				if(direction == "down") {
				  that.siteHeader.addClass("site-header--dark");
				} else {
				 that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}
	
	
}

export default StickyHeader;