require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"views":[function(require,module,exports){
var views={"detail-template":"<h1>Details Page</h1>\n \n<p> <%- m.activity.activity_name %> </p>\n<p> <%- m.activity.description %> </p>\n<a href=\"#/activities/<%- m.activity.id %>/edit\">Edit</a>\n<button class=\"rmv-btn\">Delete</button>","edit-template":"<h1>Edit Activity</h1>\n\n\t<form class=\"edit-record-form\">\n   \n\t  <input class=\"edit-activity-field\" type=\"text\" value=\"<%- m.activity.activity_name %>\">\n    <input class=\"edit-description-field\" type=\"text-area\" value=\"<%- m.activity.description %>\">\n    <button type=\"submit\">Edit</button>\n    \n  </form>","home":"<h1>Stat-Pack <span> Activity Tracker</span></h1>\n\n\n<ul class=\"activities-ul\">\n\t<% m.activities.forEach(function(activity) { %>\n\t\t<a href=\"#/activities/<%- activity.id %>\"><li class=\"activity-li\"><%- activity.activity_name %></li></a><a href=\"#/activities/<%- activity.id %>/stats\">Add entry</a>\n\t\n\t<% }) %>\n</ul>\n<a href=\"#/activities/new\">Create New Activity</a>\n<a href=\"/logout\">Log Out</a>","landing-page":"<h1>Welcome to Stat-Tracker</h1>\n\n<a href=\"/login\">Login to your account</a>\n<a href=\"#/user\">Register for new account</a>\n","new-template":"<h1>Add a new Activity to track!</h1>\n\n\t<form class=\"new-record-form\">\n   \n\t  <input class=\"activity-field\" type=\"text\" placeholder=\"Activity\">\n    <input class=\"description-field\" type=\"text-area\" placeholder=\"Description\">\n    <button type=\"submit\">Submit</button>\n    \n  </form>","not-found":"<h1>404 Not found!</h1>","registration":"<h1>Sign up for a new account</h1>\n\n\n<form class=\"registration-form\">\n\tUsername:<input type=\"text\" class=\"reg-username\"><br>\n\tFirst Name:<input type=\"text\" class=\"reg-firstName\"><br>\n\tLast Name:<input type=\"text\" class=\"reg-lastName\"><br>\n\tPassword:<input type=\"text\" class=\"password\"><br>\n\t<button type=\"submit\">Submit</button>\n</form>\n\n\n","stats":"STATS PAGE\n\n<form class=\"stat-form\">\n\tRecord your entry: <input class=\"stat-input\" type=\"text\" >\n\t<button>Enter</button>\n</form>"};
if (typeof module !== "undefined" && module.exports) { module.exports = views; }
},{}]},{},[]);
