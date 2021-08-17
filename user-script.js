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
    var interval = 38;
    var e = document.getElementsByClassName('cat-img')[0];
    var event = new KeyboardEvent('keydown', {
        key: 'g',
        ctrlKey: true
    });
    setInterval(function() {document.dispatchEvent(event);}, interval);
})();
