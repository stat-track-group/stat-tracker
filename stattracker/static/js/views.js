require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"views":[function(require,module,exports){
var views={"detail-template":"<h1>Details Page</h1>\n \n<p> <%- m.activity.activity_name %> </p>\n<p> <%- m.activity.description %> </p>\n<a href=\"#/activities/<%- m.activity.id %>/edit\">Edit</a>","edit-template":"<h1>Edit Activity</h1>\n\n\t<form class=\"edit-record-form\">\n   \n\t  <input class=\"edit-activity-field\" type=\"text\" value=\"<%- m.activity.activity_name %>\">\n    <input class=\"edit-description-field\" type=\"text-area\" value=\"<%- m.activity.description %>\">\n    <button type=\"submit\">Edit</button>\n    \n  </form>","home":"<h1>List of activities</h1>\n\n\n<ul class=\"activities-ul\">\n\t<% m.activities.forEach(function(activity) { %>\n\t\t<a href=\"#/activities/<%- activity.id %>\"><li class=\"activity-li\"><%- activity.activity_name %>\n\t\t<%- activity.description %></li></a>\n\t<% }) %>\n</ul>\n<a href=\"#/activities/new\">Create New Activity</a>","new-template":"<h1>Add a new Activity to track!</h1>\n\n\t<form class=\"new-record-form\">\n   \n\t  <input class=\"activity-field\" type=\"text\" placeholder=\"Activity\">\n    <input class=\"description-field\" type=\"text-area\" placeholder=\"Description\">\n    <button type=\"submit\">Submit</button>\n    \n  </form>","not-found":"<h1>404 Not found!</h1>"};
if (typeof module !== "undefined" && module.exports) { module.exports = views; }
},{}]},{},[]);
