'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');
var show = require('../show');
var show = require('../show');
var getCookie = require('../csrf.js')

router.route('activities/new', function () {
	show('new-template');

	var csrftoken = getCookie('csrftoken');	

	$('.new-record-form').on('submit', function (e) {
		e.preventDefault();

	  $.ajax({
	  	beforeSend: function (request)
            {
             request.setRequestHeader('X-CSRFToken', csrftoken);
            },
		  method: "POST",
		  url: "/api/activities/",
		  data: {	 
		  				'activity_name': $('.activity-field').val(),
		  				'description': $('.description-field').val() }
		})
	  	.done(function() {
	    	window.location.href="#/activities"
  	});
	
	});


});