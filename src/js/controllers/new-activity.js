'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');
var show = require('../show');

// router.route('activities/new', function () {
// 	show('new-template');

// 	$('.new-record-form').on('submit', function (e) {
// 		e.preventDefault();

// 		var activity = $('.activity-field').val();
// 		var description = $('.description-field').val();

// 		var newActivity = {
// 			'activity_name': activity,
// 			'description': description
// 		};

// 	  $.ajax({
// 		  method: "GET",
// 		  url: "/api/activities/",
// 		  data: { newActivity }
// 		})
// 	  	.done(function( msg ) {
// 	    	alert( "Data Saved: " + msg );
//   	});


// 	})
// });