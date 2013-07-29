/*global define:true*/
/*global describe:true */
/*global it:true */
/*global expect:true */
/*global beforeEach:true */
/* jshint strict: false */
define(['{%= name%}', 'jquery'], function({%= title%}, $) {

    describe('just checking', function() {

        it('{%= title%} should be loaded', function() {
            expect({%= title%}).toBeTruthy();
            var {%= name%} = new {%= title%}();
            expect({%= name%}).toBeTruthy();
        });

        it('{%= title%} should initialize', function() {
            var {%= name%} = new {%= title%}();
            var output   = {%= name%}.init();
            var expected = 'This is just a stub!';
            expect(output).toEqual(expected);
        });
        
    });

});