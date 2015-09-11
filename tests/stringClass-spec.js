var file = require('../src/stringClass');


describe('stringClass', function() {

  it('hasVowel method should return true if string contains vowel', function() {

    var texts = 'I will come tommorrow',
      simple = 'light',
      consonants = 'rhythm';

    expect(texts.hasVowel()).toBeDefined();
    expect(texts.hasVowel()).toEqual(true);
    expect(simple.hasVowel()).toEqual(true);
    expect(consonants.hasVowel()).toEqual(false);

  });

  it('toUpper method should convert string to uppercase', function() {

    var texts = 'I love you',
      simple = 'Diary',
      name = 'Atolagbe Bisoye';

    expect(texts.toUpper()).toBeDefined();
    expect(texts.toUpper()).toEqual('I LOVE YOU');
    expect(simple.toUpper()).toEqual('DIARY');
    expect(name.toUpper()).toEqual('ATOLAGBE BISOYE');

  });

  it('toLower method should convert string to lowercase', function() {

    var texts = 'I Love You',
      simple = 'BEAUTIFUL',
      name = 'Atolagbe Bisoye';

    expect(texts.toLower()).toBeDefined();
    expect(texts.toLower()).toEqual('i love you');
    expect(simple.toLower()).toEqual('beautiful');
    expect(name.toLower()).toEqual('atolagbe bisoye');

  });

  it('ucFirst method should convert the first character to uppercase', function() {

    var texts = 'run very fast',
      simple = 'Andela',
      sentence = 'thank you';

    expect(texts.ucFirst()).toBeDefined();
    expect(texts.ucFirst()).toEqual('Run very fast');
    expect(simple.ucFirst()).toEqual('Andela');
    expect(sentence.ucFirst()).toEqual('Thank you');

  });

  it('isQuestion should correctly check if a string is a question', function() {

    var texts = 'how are you?',
      sentence = 'I am happy',
      simple = 'What?';

    expect(texts.isQuestion()).toBeDefined();
    expect(texts.isQuestion()).toEqual(true);
    expect(simple.isQuestion()).toEqual(true);
    expect(sentence.isQuestion()).toEqual(false);

  });


  it('words should return a list of words in the string', function() {

    var texts = 'I am happy',
      sentence = 'a good song, make me want to dance.',
      simple = 'one; two: and three';

    expect(texts.words()).toBeDefined();
    expect(texts.words()).toEqual(['I', 'am', 'happy']);
    expect(sentence.words()).toEqual(['a', 'good', 'song', 'make', 'me', 'want', 'to', 'dance']);
    expect(simple.words()).toEqual(['one', 'two', 'and', 'three']);

  });

  it('wordCount should return the number of words in the string', function() {

    var texts = 'I am happy',
      sentence = 'a good song, make me want to dance.',
      simple = 'one; two: and three';

    expect(texts.wordCount()).toBeDefined();
    expect(texts.wordCount()).toEqual(3);
    expect(sentence.wordCount()).toEqual(8);
    expect(simple.wordCount()).toEqual(4);

  });

  it('toCurrency should return a currency representation of numbers', function() {

    var num = 1000,
      num2 = 534683.11,
      num3 = 20000.00,
      num4 = 300;

    expect(num.toCurrency()).toBeDefined();
    expect(num.toCurrency()).toEqual('1,000.00');
    expect(num2.toCurrency()).toEqual('534,683.11');
    expect(num3.toCurrency()).toEqual('20,000.00');
    expect(num4.toCurrency()).toEqual('300.00');

  });


  it('fromCurrency should return a number representation of currencies', function() {

    var num = '1,000',
      num2 = '534,683.11',
      num3 = '20,000.00',
      num4 = '300';

    expect(num.fromCurrency()).toBeDefined();
    expect(num.fromCurrency()).toEqual(1000);
    expect(num2.fromCurrency()).toEqual(534683.11);
    expect(num3.fromCurrency()).toEqual(20000.00);
    expect(num4.fromCurrency()).toEqual(300);

  });

});
