/*
 * {%= name %}
 * {%= homepage %}
 * Created with gbase.
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */
/* jshint strict: false, plusplus: true */
/*global define: false, require: false, module: false, exports: false */
(function (root, name, deps, factory) {
    "use strict";
    // Node
     if(typeof deps === 'function') {
        factory = deps;
        deps = [];
    }

    if (typeof exports === 'object') {
        module.exports = factory.apply(root, deps.map(require));
    } else if (typeof define === 'function' && 'amd' in define) {
        //require js, here we assume the file is named as the lower
        //case module name.
        define(name.toLowerCase(), deps, factory);
    } else {
        // Browser
        var d, i = 0, global = root, old = global[name], mod;
        while((d = deps[i]) !== undefined) deps[i++] = root[d];
        global[name] = mod = factory.apply(global, deps);
        //Export no 'conflict module', aliases the module.
        mod.noConflict = function(){
            global[name] = old;
            return mod;
        };
    }
}(this, '{%= title%}', ['extend'], function(extend) {

    /**
     * Extend method.
     * @param  {Object} target Source object
     * @return {Object}        Resulting object from
     *                         meging target to params.
     */
    var _extend= extend;

    /**
     * Shim console, make sure that if no console
     * available calls do not generate errors.
     * @return {Object} Console shim.
     */
    var _shimConsole = function(con) {

        if (con) return con;

        con = {};
        var empty = {},
            noop = function() {},
            properties = 'memory'.split(','),
            methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
                'groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,' +
                'table,time,timeEnd,timeStamp,trace,warn').split(','),
            prop,
            method;

        while (method = methods.pop()) con[method] = noop;
        while (prop = properties.pop()) con[prop] = empty;

        return con;
    };



///////////////////////////////////////////////////
// CONSTRUCTOR
///////////////////////////////////////////////////

	var options = {

    };

    /**
     * {%= title%} constructor
     *
     * @param  {object} config Configuration object.
     */
    var {%= title%} = function(config){
        config  = config || {};

        config = _extend({}, this.constructor.DEFAULTS, config);

        this.init(config);
    };

    {%= title%}.name = {%= title%}.prototype.name = '{%= title%}';

    {%= title%}.VERSION = '0.0.0';

    /**
     * Make default options available so we
     * can override.
     */
    {%= title%}.DEFAULTS = options;

///////////////////////////////////////////////////
// PRIVATE METHODS
///////////////////////////////////////////////////

    {%= title%}.prototype.init = function(config){
        if(this.initialized) return this.logger.warn('Already initialized');
        this.initialized = true;

        console.log('{%= title%}: Init!');
        _extend(this, config);

        return 'This is just a stub!';
    };

    /**
     * Logger method, meant to be implemented by
     * mixin. As a placeholder, we use console if available
     * or a shim if not present.
     */
    {%= title %}.prototype.logger = _shimConsole(console);

    /**
     * PubSub emit method stub.
     */
    {%= title %}.prototype.emit = function() {
        this.logger.warn({%= title %}, 'emit method is not implemented', arguments);
    };

    return {%= title%};
}));
