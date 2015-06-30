'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');
var show = require('../show');
var getCookie = require('../csrf.js');

router.route('activities/:id', function (id) {

	var csrftoken = getCookie('csrftoken');	

	$.ajax({
	  method: "GET",
	  url: "/api/activities/" + id 
	})
	  .done(function(data) {
	    show('detail-template', { activity: data });
	});




	$('.main-content').on('click', '.rmv-btn' , function() {
		console.log('hello')

		$.ajax({
			beforeSend: function (request)
            {
             request.setRequestHeader('X-CSRFToken', csrftoken);
            },
			method: "DELETE",
			url: "/api/activities/" + id 
		}).done(function() {
			console.log('great')
		})
	})  



});