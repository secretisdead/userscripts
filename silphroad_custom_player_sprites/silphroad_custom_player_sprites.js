// ==UserScript==
// @name         Silph Road custom player sprites
// @namespace    https://secret.graphics
// @version      0.1
// @description  Change player sprites for specified users on Silph Road
// @author       secret
// @match        https://sil.ph/*
// @match        https://thesilphroad.com/card
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
	'use strict';

	let players = {
		'player name': {
			sprite: 'custom player sprite url',
			marginLeft: '0px',
			marginRight: '0px',
		},
		/** /
		'player name': {
			sprite: 'custom player sprite url',
			marginLeft: '0px',
			marginRight: '0px',
		},
		/**/
	};

	let observerConfig = { attributes: true, childList: true, characterData: true, subtree: true, };
	let observer = new MutationObserver(mutations => {
		for (let i = 0; i < mutations.length; i++) {
			let mutation = mutations[i];
			if (!mutation.addedNodes.length) continue;
			for (let j = 0; j < mutation.addedNodes.length; j++) {
				let node = mutation.addedNodes[j];
				if (!(node instanceof Element)) continue;
				if (!node.classList.contains('front')) continue;
				let headers = node.querySelectorAll('h3');
				for (let x = 0; x < headers.length; x++) {
					let header = headers[x];
					let playerName = header.innerText.toLowerCase();
					if (!(playerName in players)) continue;
					let cardSprite = header.parentNode.querySelector('#avatarWrap img');
					let player = players[playerName];
					cardSprite.src = player.sprite;
					cardSprite.style.marginLeft = player.marginLeft;
					cardSprite.style.marginRight = player.marginRight;
					return;
				}
				observer.disconnect();
			}
		}
	});
	observer.observe(document.documentElement, observerConfig);
})();
