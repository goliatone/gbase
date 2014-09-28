/*global define:true, describe:true , it:true , expect:true,
beforeEach:true, sinon:true, spyOn:true , expect:true */
/* jshint strict: false */
define(['{%= name%}', 'jquery'], function({%= title%}, $) {

    describe('just checking', function() {

        it('{%= title%} should be loaded', function() {
            expect({%= title%}).toBeTruthy();
            var {%= name%} = new {%= title%}();
            expect({%= name%}).toBeTruthy();
        });

        it('{%= title%} should initialize', function() {
            var {%= name%} = new {%= title%}({autoinitialize:false});
            var output   = {%= name%}.init();
            var expected = 'This is just a stub!';
            expect(output).toEqual(expected);
        });
    });
});