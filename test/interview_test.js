/*
 * interview
 * https://github.com/woopra/interview
 *
 * Copyright (c) 2013 Billy Vong
 * Licensed under the MIT license.
 */

var WoopraTest = require('../lib/interview').WoopraTest,
    expect = require('chai').expect;

describe('Woopra Interview', function() {
    var woopra;

    // this runs before each test (in each it() after this)
    // don't worry about this when writing your own test
    beforeEach(function() {
        woopra = new WoopraTest();
        woopra.attachCampaignData();
        // default options
        woopra._options = {
          name: 'billy',
          company: 'woopra',
          email: 'billy@woopra.com'
        };
    });

    describe('the `option()` function', function() {
        it('should set a single option key when passed two parameters as `key`, `value`', function() {
            woopra.option('name', 'notbilly');
            woopra.option('age', 27);

            expect(woopra._options.name).to.equal('notbilly');
            expect(woopra._options.age).to.equal(27);
            // make sure default options aren't overwritten
            expect(woopra._options.company).to.equal('woopra');
            expect(woopra._options.email).to.equal('billy@woopra.com');
        });

        it('should return the value at `key` if only one parameter is passed', function() {
            expect(woopra.option('name')).to.equal('billy');
            expect(woopra.option('company')).to.equal('woopra');
            expect(woopra.option('email')).to.equal('billy@woopra.com');
            expect(woopra.option('fakeOption')).to.be.undefined;
        });

        it('should replace the entire object if the first parameter is an object', function() {
            var newOption = {
              name: 'notbilly',
              company: 'notwoopra',
              age: 28
            };

            woopra.option(newOption);

            expect(woopra.option('name')).to.equal('notbilly');
            expect(woopra.option('company')).to.equal('notwoopra');
            expect(woopra.option('email')).to.be.undefined;
            expect(woopra.option('fakeOption')).to.be.undefined;
            expect(woopra.option('age')).to.equal(28);
        });
    });

    // TODO: Write your tests here
    describe('tests for `attachCampaignData()`', function() {
        it('_campaignData should contain two values', function() {
            expect(woopra._campaignData.woopra_source).to.equal('test');
            expect(woopra._campaignData.woopra_content).to.equal('billy');
        });
    });
});
