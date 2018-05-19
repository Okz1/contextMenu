class ContextMenu {
	constructor(option){
		this.menu = document.getElementById(option.menu);
		this.trigger = document.querySelector(`.${option.trigger}`);
		this.menuList = document.querySelector(option.menuList);
		this.slideTop = document.querySelector(option.btnTop);
		this.slideBot = document.querySelector(option.btnBot);
		this.menuItem = document.querySelectorAll(option.menuItem);
		this.subMenuClass = option.subMenu;
		this.disableClass = option.disabled;
		this.transforamation = 0;
		this.body = document.body;
		this.menuOn();
		this.menuOff();
		this.slide();
		this.subMenu();
		this.menuDisable();
	}
	menuShow(e){
		e.preventDefault();
		let cordX = e.pageX + 'px';
		let cordY = e.pageY + 'px';
		let cordXNumb = parseInt(`${cordX}`);
		let cordYNumb = parseInt(`${cordY}`);
		let windowHeight = window.outerHeight;
		let windowWidth = window.innerWidth;
		this.menu.classList.add('menu-on-js');
		if(cordXNumb + 140 > windowWidth){

			this.menu.style.left = `${cordXNumb - 140}px`;
		}else{
			this.menu.style.left = cordX;
		}
		if(cordYNumb + 280 > windowHeight){
			console.log(1);
			this.menu.style.top = `${cordYNumb - 280}px`;
		}else{
			console.log(2);
			this.menu.style.top = cordY;
		}
	}
	menuHide(e){
		let target = e.target;
		if(target.classList.contains('menu__list__item') || target.classList.contains('menu__list')||target.classList.contains('slide__btn--bot')||target.classList.contains('slide__btn--top')){

		}else{
			this.menu.classList.remove('menu-on-js');
		}
	}
	menuOn(){
		this.trigger.addEventListener('contextmenu',	this.menuShow.bind(this));
	}
	menuOff(){
		this.body.addEventListener('click',	this.menuHide.bind(this));
	}
	slideBotFunc(){
		let listHeight = this.menuList.offsetHeight;
		let menuHeight = this.menu.offsetHeight;
		this.menuList.style.transform = `translateY(${this.transforamation + 'px'})`;
		if((listHeight - menuHeight + 2) <= -(this.transforamation)){
		}else{
			this.transforamation -= 40;
			this.slideBot.hidden=false;
		}
	}
	slideTopFunc(){
		if(this.transforamation === 0){
			this.menuList.style.transform = `translateY(0px)`;
		}else{
			this.transforamation += 40;
			this.menuList.style.transform = `translateY(${this.transforamation + 'px'})`;
			this.slideBot.hidden=false;
		}
	}
	slide(){
		this.slideBot.addEventListener('click',this.slideBotFunc.bind(this));
		this.slideTop.addEventListener('click',this.slideTopFunc.bind(this));
	}
	subMenu(){
		this.menuItem.forEach((item) =>{
			if(item.dataset.submenu){
				item.classList.add(this.subMenuClass);
			}
		})
	}
	menuDisable(){
		this.menuItem.forEach((item) =>{
			if(item.dataset.disable){
				item.classList.add(this.disableClass);
			}
		})
	}
}

const configOption = {
	menu: 'menu',
	menuList: '.menu__list',
	trigger: 'block2',
	menuItem: '.menu__list__item',
	subMenu: 'menu__list__item--more',
	disabled: 'disabled',
	btnTop: '.slide__btn--top',
	btnBot: '.slide__btn--bot',
};

const configOption1 = {
	menu: 'menu',
	menuList: '.menu__list',
	trigger: 'block4',
	menuItem: '.menu__list__item',
	subMenu: 'menu__list__item--more',
	disabled: 'disabled',
	btnTop: '.slide__btn--top',
	btnBot: '.slide__btn--bot',
};

const configOption2 = {
	menu: 'menu',
	menuList: '.menu__list',
	trigger: 'block5',
	menuItem: '.menu__list__item',
	subMenu: 'menu__list__item--more',
	disabled: 'disabled',
	btnTop: '.slide__btn--top',
	btnBot: '.slide__btn--bot',
};

const context = new ContextMenu(configOption);
const context1 = new ContextMenu(configOption1);
const context2 = new ContextMenu(configOption2);
