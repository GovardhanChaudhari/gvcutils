import chai from 'chai';
//const should = chai.should();
//const expect = chai.expect();
const assert = chai.assert;

import StringUtils from '../src/StringUtils';

const testSamples = [
  // { input: null, expectedResult:Error, description: 'should throw error invalid log level null' },
  { input: 'hi', expectedResult:'Hi', description: 'should return Hi' }
];


describe('StringUtils.catpitalize', () => {
  testSamples.forEach((sample) => {
    it(sample.description, () => {
        assert.equal(StringUtils.capitalize(sample.input),sample.expectedResult);
    });
  });
});
