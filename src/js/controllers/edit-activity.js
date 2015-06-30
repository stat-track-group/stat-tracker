'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');
var show = require('../show');

router.route('activities/:id/edit', function (id) {
	
	$.ajax({
	  method: "GET",
	  url: "/api/activities/" + id 
	})
	  .done(function(data) {
	    show('edit-template', { activity: data });
	});

	$('.main-content').on('submit', '.edit-record-form' , function (e) {
		e.preventDefault();

		var activityEdit = $('.edit-activity-field').val();
		var descripEdit = $('.edit-description-field').val();

		var editedObj = {
			id: id,
			activity_name: activityEdit,
			description: descripEdit
		};

		$.ajax({
		  method: "POST",
		  url: "/api/activities/" + id,
		  data: {edit: editedObj} 
		})
	  	.done(function(msg) {
	    // console.log('Updated!');
		});


	});




});