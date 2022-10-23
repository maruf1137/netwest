tabJs = (navContainer, navItems, navTabs, contentTab, contains) => {
	let tabs = Array.prototype.slice.apply(document.querySelectorAll(navTabs));
	let items = Array.prototype.slice.apply(document.querySelectorAll(navItems));
	let panels = Array.prototype.slice.apply(document.querySelectorAll(contentTab));

	document.getElementById(navContainer).addEventListener('click', (e) => {
		if (e.target.classList.contains(contains)) {
			let i = tabs.indexOf(e.target);
			tabs.map((tab) => tab.classList.remove('active'));
			tabs[i].classList.add('active');
			items.map((item) => item.classList.remove('gds-nav-tabs__list-item--active'));
			items[i].classList.add('gds-nav-tabs__list-item--active');
			panels.map((tab) => tab.classList.remove('active'));
			panels[i].classList.add('active');
		}
	});
};

tabJs('tabContainer', '.gds-nav-tabs__list-item ', '.itm', '.tabs', 'itm');

// sticky nav
const nav4 = document.querySelector('.nav4');
window.addEventListener('scroll', (e) => {
	if (window.scrollY >= 700) {
		nav4.classList.add('sticky');
	} else {
		nav4.classList.remove('sticky');
	}
});
