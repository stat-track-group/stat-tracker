'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');
var show = require('../show');

router.route('activities/:id', function (id) {

	$.ajax({
	  method: "GET",
	  url: "/api/activities/" + id 
	})
	  .done(function(data) {
	    show('detail-template', { activity: data });
	});



});