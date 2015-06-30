'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');
var show = require('../show');

router.route('activities', function () {
	
	$.ajax({
	  method: "GET",
	  url: "/api/activities/"
	})
	  .done(function( data ) {
	    show('home', {activities: data})
	});

});