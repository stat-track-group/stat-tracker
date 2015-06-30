'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');
var show = require('../show');
var getCookie = require('../csrf.js');

router.route('activities/:id/stats', function (id) {
		
	show('stats');

	var csrftoken = getCookie('csrftoken');

	$('.main-content').on('submit', '.stat-form', function(e) {
		e.preventDefault();
		alert($('.stat-input').val())
		$.ajax({
			beforeSend: function (request)
            {
             request.setRequestHeader('X-CSRFToken', csrftoken);
            },
	  	method: "POST",
	  	url: "/api/stats/",
	  	data: {
	  		activity_id: id,
    		value: $('.stat-input').val()
	  	}
		})
	  	.done(function() {
	  		alert('success')
		});

	})  


});