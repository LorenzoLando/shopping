import $ from 'jquery';

class DropDown {
	constructor() {
		this.button = $(".btn");
		this.menu = $(".site-header__dropdown-menu");
		this.toggle();
	}

	toggle(){
		this.menu.hide();
		var that = this;
		this.button.on("click", function(){
			that.menu.slideToggle();
		});
	}
}

export default DropDown;