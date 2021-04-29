// ==UserScript==
// @name         Tabula Timetable
// @namespace    https://github.com/adamskrz/
// @version      0.1
// @description  Quick JS script to add direct link to timetable in Tabula menubar
// @author       adamskrz
// @match        https://tabula.warwick.ac.uk/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var add = document.createElement('li');
    var link = document.createElement("a");
    link.textContent = "https://tabula.warwick.ac.uk/profiles/timetable";
    link.textContent = "My Timetable";
    link.href = "https://tabula.warwick.ac.uk/profiles/timetable";
    add.appendChild(link);
    var target = document.querySelector("#primary-nav > nav > ul > li.groups-active");
    target.before(add);
})();
