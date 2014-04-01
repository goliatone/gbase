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
}(this, "{%= title%}", function() {

    /**
     * Extend method.
     * @param  {Object} target Source object
     * @return {Object}        Resulting object from
     *                         meging target to params.
     */
    var _extend = function(target) {
        var i = 1, length = arguments.length, source;
        for ( ; i < length; i++ ) {
            // Only deal with defined values
            if ((source = arguments[i]) != undefined ){
                Object.getOwnPropertyNames(source).forEach(function(k){
                    var d = Object.getOwnPropertyDescriptor(source, k) || {value:source[k]};
                    if (d.get) {
                        target.__defineGetter__(k, d.get);
                        if (d.set) target.__defineSetter__(k, d.set);
                    } else if (target !== d.value) target[k] = d.value;
                });
            }
        }
        return target;
    };

    /**
     * Shim console, make sure that if no console
     * available calls do not generate errors.
     * @return {Object} Console shim.
     */
    var _shimConsole = function(){
        var empty = {},
            con   = {},
            noop  = function() {},
            properties = 'memory'.split(','),
            methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
                       'groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,' +
                       'table,time,timeEnd,timeStamp,trace,warn').split(','),
            prop,
            method;

        while (method = methods.pop())    con[method] = noop;
        while (prop   = properties.pop()) con[prop]   = empty;

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

        config = _extend({}, {%= title%}.defaults || options, config);

        this.init(config);
    };

    /**
     * Make default options available so we
     * can override.
     */
    {%= title%}.defaults = options;

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
    {%= title %}.prototype.logger = console || _shimConsole();

    return {%= title%};
}));