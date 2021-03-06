  //checkpoint 2 string class;
  //Atolagbe Bisoye

  //hasVowel
  String.prototype.hasVowel = function() {

    //search if string has vowel and return true or false
    return this.search(/(a|e|i|o|u)/i) !== -1;
  };

  //toUpper
  String.prototype.toUpper = function() {

    var upper = this.replace(/([a-z])/g, function makeUpper(l) {
      var asciiDiff = 32;
      var asciiVal = l.charCodeAt(0) - asciiDiff;
      return String.fromCharCode(asciiVal);
    });

    return upper;
  }

  //toLower
  String.prototype.toLower = function() {

    var lower = this.replace(/([A-Z])/g, function makeLower(l) {
      var asciiDiff = 32;
      var asciiVal = l.charCodeAt(0) + asciiDiff;
      return String.fromCharCode(asciiVal);
    });

    return lower;
  };

  //ucFirst
  String.prototype.ucFirst = function() {

    var upperFirst = this.replace(/^([a-z])/, function makeFirst(f) {
      return String.fromCharCode(f.charCodeAt(0) - 32)
    });

    return upperFirst;
  };


  //is Question
  String.prototype.isQuestion = function() {

    return this.search(/\?$/g) !== -1;
  };

  //words
  String.prototype.words = function() {

    //split by all non alphabets
    var wordArray = this.split(/[\s\W\d]+/g);

    //remove extra white spaces
    if (wordArray.indexOf('') !== -1) {
      wordArray.splice(wordArray.indexOf(/\s/), 1);
    }

    return wordArray;
  };


  //wordCount
  String.prototype.wordCount = function() {

    var wordArray = this.words();

    return wordArray.length;
  };


  //to Currency
  Number.prototype.toCurrency = function() {

    //fix to two decimal places (currency) and convert to string
    var inString = this.toFixed(2).toString();

    var len = inString.length,
      currency;

    //if length is 3 or less return, else insert neccesary commas
    if (len > 3) {
      currency = inString.replace(/(\d(?=(\d{3})+\.))/g, '$&,');

    } else {
      currency = inString;
    }
    return currency;
  };

  //from Currency
  String.prototype.fromCurrency = function() {

    //remove all commas, and join
    var nums = this.split(/\s*,\s*/);

    var joiner = nums.join('');

    //convert to digit
    var digit = Math.round(joiner * 100) / 100;

    return digit;
  };

  exports.String = String;
