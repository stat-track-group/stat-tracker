'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');
var show = require('../show');

router.route('', function () {
	show('home');

	$.ajax({
	  method: "POST",
	  url: "api/activities/"
	})
	  .done(function( data ) {
	    console.log(data)
	  });


});