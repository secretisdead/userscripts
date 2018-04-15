// ==UserScript==
// @name         PokéFarm Q custom player sprites
// @namespace    https://secret.graphics
// @version      0.1
// @description  Change player sprites for specified users on PokéFarm Q
// @author       secret
// @match        https://pokefarm.com/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	let players = {
		'player name': {
			sprite: 'custom player sprite url',
			accessory: true,
		},
		/** /
		'player name': {
			sprite: 'custom player sprite url',
			accessory: true,
		},
		/**/
	};

	let cardNames = document.querySelectorAll('.tc-name');
	for (let i = 0; i < cardNames.length; i++) {
		if (cardNames[i].innerText in players) {
			let player = players[cardNames[i].innerText];
			let cardSprite = cardNames[i].parentNode.querySelector('.tc-sprite');
			cardSprite.querySelector('.layer:first-child').style.backgroundImage = 'url("' + player.sprite + '")';
			if (!player.accessory)
				cardSprite.querySelector('.layer:nth-child(2)').style.display = 'none';
		}
	}
})();
