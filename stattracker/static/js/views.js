require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"views":[function(require,module,exports){
<<<<<<< HEAD
var views={"home":"My name is john","not-found":"<h1>404 Not found!</h1>"};
=======
var views={"detail-template":"<header></header>","edit-template":"","home":"","new-template":"<header></header>\n\n<h1>Add a new Activity to track!</h1>\n\n<form>\n   \n\t  <input type=\"text\" placeholder=\"Activity\">\n    <input type=\"text-area\" placeholder=\"Description\">\n    <button type=\"submit\">Submit</button>\n    \n  </form>","not-found":"<h1>404 Not found!</h1>"};
>>>>>>> 330d6c814a44496cccc46c6abf683f9980407845
if (typeof module !== "undefined" && module.exports) { module.exports = views; }
},{}]},{},[]);
