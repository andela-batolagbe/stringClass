var file = require('../src/stringClass');
var fs = require('fs');

var testData, data;

data = fs.readFileSync(__dirname + '/fixtures.json', 'utf8')

testData = JSON.parse(data)

describe('stringClass', function() {

  it('hasVowel method should return true if string contains vowel', function() {

    expect(testData[0][0].hasVowel()).toBeDefined();
    expect(testData[0][0].hasVowel()).toEqual(true);
    expect(testData[0][1].hasVowel()).toEqual(true);
    expect(testData[0][2].hasVowel()).toEqual(false);

  });

  it('toUpper method should convert string to uppercase', function() {

    expect(testData[0][3].toUpper()).toBeDefined();
    expect(testData[0][3].toUpper()).toEqual('I LOVE YOU');
    expect(testData[0][4].toUpper()).toEqual('DIARY');
    expect(testData[0][5].toUpper()).toEqual('ATOLAGBE BISOYE');

  });

  it('toLower method should convert string to lowercase', function() {

    expect(testData[0][0].toLower()).toBeDefined();
    expect(testData[0][3].toLower()).toEqual('i love you');
    expect(testData[0][5].toLower()).toEqual('atolagbe bisoye');
    expect(testData[0][6].toLower()).toEqual('beautiful');

  });

  it('ucFirst method should convert the first character to uppercase', function() {

    expect(testData[0][7].ucFirst()).toBeDefined();
    expect(testData[0][7].ucFirst()).toEqual('Run very fast');
    expect(testData[0][8].ucFirst()).toEqual('Andela');
    expect(testData[0][9].ucFirst()).toEqual('Thank you');

  });

  it('isQuestion should correctly check if a string is a question', function() {

    expect(testData[0][10].isQuestion()).toBeDefined();
    expect(testData[0][10].isQuestion()).toEqual(true);
    expect(testData[0][11].isQuestion()).toEqual(false);
    expect(testData[0][12].isQuestion()).toEqual(true);
    expect(testData[0][13].isQuestion()).toEqual(false);
  });


  it('words should return a list of words in the string', function() {

    expect(testData[1][0].words()).toBeDefined();
    expect(testData[1][0].words()).toEqual(['I', 'am', 'happy']);
    expect(testData[1][1].words()).toEqual(['a', 'good', 'song', 'make', 'me', 'want', 'to', 'dance']);
    expect(testData[1][2].words()).toEqual(['one', 'two', 'and', 'three']);

  });

  it('wordCount should return the number of words in the string', function() {

    expect(testData[1][0].wordCount()).toBeDefined();
    expect(testData[1][0].wordCount()).toEqual(3);
    expect(testData[1][1].wordCount()).toEqual(8);
    expect(testData[1][2].wordCount()).toEqual(4);

  });

  it('toCurrency should return a currency representation of numbers', function() {

    expect(testData[2][0].toCurrency()).toBeDefined();
    expect(testData[2][0].toCurrency()).toEqual('1,000.00');
    expect(testData[2][1].toCurrency()).toEqual('534,683.11');
    expect(testData[2][2].toCurrency()).toEqual('20,000.00');
    expect(testData[2][3].toCurrency()).toEqual('300.00');

  });


  it('fromCurrency should return a number representation of currencies', function() {

    expect(testData[3][0].fromCurrency()).toBeDefined();
    expect(testData[3][0].fromCurrency()).toEqual(1000);
    expect(testData[3][1].fromCurrency()).toEqual(534683.11);
    expect(testData[3][2].fromCurrency()).toEqual(20000.00);
    expect(testData[3][3].fromCurrency()).toEqual(300);

  });

});
