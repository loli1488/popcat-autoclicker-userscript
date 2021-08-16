// ==UserScript==
// @name         Popcat
// @version      1.0
// @description  Pop pop pop pop
// @author       Loli
// @match        https://popcat.click/
// @grant        none
// ==/UserScript==



(function() {
    'use strict';
    var interval = 1000 / (800 / 30) ;
    var e = document.getElementsByClassName('cat-img')[0];
    var event = new KeyboardEvent('keydown', {
        key: 'g',
        ctrlKey: true
    });
    setInterval(function() {document.dispatchEvent(event);}, interval);
})();
