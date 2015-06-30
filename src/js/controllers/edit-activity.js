'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');
var show = require('../show');
var getCookie = require('../csrf.js');

router.route('activities/:id/edit', function (id) {
	
	var csrftoken = getCookie('csrftoken');	

	$.ajax({
	  method: "GET",
	  url: "/api/activities/" + id 
	})
	  .done(function(data) {
	    show('edit-template', { activity: data });
	});

	$('.main-content').on('submit', '.edit-record-form' , function (e) {
		e.preventDefault();


		$.ajax({
			beforeSend: function (request)
            {
             request.setRequestHeader('X-CSRFToken', csrftoken);
            },
		  method: "PUT",
		  url: "/api/activities/" + id + "/",
		  data: {
		  	id: id,
		  	activity_name: $('.edit-activity-field').val(),
		  	description:	$('.edit-description-field').val()
		  } 
		})
	  	.done(function(msg) {
	    	window.location.href="#/activities"
		});


	});




});