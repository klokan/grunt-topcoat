'use strict';

var grunt = require('grunt');
var fs    = require('fs');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.topcoat = {
    controls: function(test) {
        fs.exists("tmp/src/controls/button.zip", function(exists) {
            test.ok(exists);
        });

        // This is just a placeholder until we have more controls repos.
        // I needed to test is downloading more than one repo.
        // TODO: Update this test once more controls repos are added
        fs.exists("tmp/src/controls/button-skin.zip", function(exists) {
            test.ok(exists);
        });

        fs.exists("tmp/src/theme.zip", function(exists) {
            test.ok(exists);
        });

        test.done();
    }
};