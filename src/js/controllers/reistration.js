'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');
var show = require('../show');
var getCookie = require('../csrf.js');

router.route('user', function () {

	var csrftoken = getCookie('csrftoken');	

	show('registration');

	$('.registration-form').on('submit', function (e) {
		e.preventDefault();

	  $.ajax({
	  	beforeSend: function (request)
            {
             request.setRequestHeader('X-CSRFToken', csrftoken);
            },
		  method: "POST",
		  url: "/api/users/",
		  data: {	 
		  				'username': $('.reg-username').val(),
		  				'first_name': $('.reg-firstName').val(),
		  				'last_name': $('.reg-lastName').val(),
		  				'password': $('.password').val(),
		  			}
		})
	  	.done(function() {
	    	window.location.href="#/activities"
  	});
	
	})



});