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
		reload: 'ArrowUp',
		whiteflute: 'ArrowLeft',
		blackflute: 'ArrowRight',
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
		if (keys.reload == e.key) {
			if (debounce.reload) return;
			debounce.reload = true;
			buttons.reload.click();
		}
		else if (keys.whiteflute == e.key) {
			if (debounce.whiteflute) return;
			debounce.whiteflute = true;
			buttons.whiteflute.click();
		}
		else if (keys.blackflute == e.key) {
			if (debounce.blackflute) return;
			debounce.blackflute = true;
			buttons.blackflute.click();
		}
	});

	window.addEventListener('keyup', function(e) {
		if (keys.reload == e.key) debounce.reload = false;
		else if (keys.whiteflute == e.key) debounce.whiteflute = false;
		else if (keys.blackflute == e.key) debounce.blackflute = false;
	});
})();
