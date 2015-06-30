'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');
var show = require('../show');

router.route('activities/:id', function (id) {
	show('detail-template');

	$.ajax({
	  method: "GET",
	  contentType: "application/json; charset=utf-8",
	  url: "/api/activities/" + id 
	})
	  .done(function( data ) {
	    show('detail-template', {data});
	    console.log(data);
	});



});