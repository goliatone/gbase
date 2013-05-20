/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */
/*global define:true*/
/* jshint strict: false */
define('{%= name%}', ['jquery'], function($) {

    var {%= title%} = function(config){
        console.log('{%= title%}: Constructor!');
    };

    {%= title%}.prototype.init = function(){
        console.log('{%= title%}: Init!');
        return 'This is just a stub!';
    };

    return {%= title%};
});