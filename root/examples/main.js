/*global define:true requirejs:true*/
/* jshint strict: false */
requirejs.config({
    paths: {
        'jquery': 'jquery/jquery',
        'extend': 'gextend/extend',
        '{%= name%}': '{%= name%}'
    }
});

define(['{%= name%}', 'jquery'], function ({%= title%}, $) {
    console.log('Loading');
	var {%= name%} = new {%= title%}();
	{%= name%}.init();
});