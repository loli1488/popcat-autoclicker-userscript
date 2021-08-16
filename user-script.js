// ==UserScript==
// @name         Popcat
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Pop pop pop pop
// @author       Loli
// @match        https://popcat.click/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var e = document.getElementsByClassName('cat-img')[0];
    var event = new KeyboardEvent('keydown', {
        key: 'g',
        ctrlKey: true
    });
    setInterval(function() {document.dispatchEvent(event);}, 1000/26);
})();
