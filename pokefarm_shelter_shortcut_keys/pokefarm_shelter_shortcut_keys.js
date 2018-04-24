// ==UserScript==
// @name         PokéFarm Q shelter shortcut keys
// @namespace    https://secret.graphics
// @version      0.1
// @description  Add shortcut keys for shelter buttons on PokéFarm Q
// @author       secret
// @match        https://pokefarm.com/shelter
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	let keys = {
		reload: ['ArrowUp', 'w'],
		whiteflute: ['ArrowLeft', 'a'],
		blackflute: ['ArrowRight', 'd'],
	};

	let debounce = {
		reload: false,
		whiteflute: false,
		blackflute: false,
	};

	let buttons = {
		reload: document.querySelector('button[data-shelter="reload"]'),
		whiteflute: document.querySelector('button[data-shelter="whiteflute"]'),
		blackflute: document.querySelector('button[data-shelter="blackflute"]'),
	};

	window.addEventListener('keydown', function(e) {
		if (keys.reload.includes(e.key)) {
			if (debounce.reload) return;
			debounce.reload = true;
			buttons.reload.click();
		}
		else if (keys.whiteflute.includes(e.key)) {
			if (debounce.whiteflute) return;
			debounce.whiteflute = true;
			buttons.whiteflute.click();
		}
		else if (keys.blackflute.includes(e.key)) {
			if (debounce.blackflute) return;
			debounce.blackflute = true;
			buttons.blackflute.click();
		}
	});

	window.addEventListener('keyup', function(e) {
		if (keys.reload.includes(e.key)) debounce.reload = false;
		else if (keys.whiteflute.includes(e.key)) debounce.whiteflute = false;
		else if (keys.blackflute.includes(e.key)) debounce.blackflute = false;
	});
})();
