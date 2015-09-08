  String.prototype.hasVowel = function() {

    if (this.search(/(a|e|i|o|u)/i) !== -1) {
      return true;
    } else {
      return false;
    }

  };

  String.prototype.toUpper = function() {

    var upper = this.toUpperCase();

    return upper;
  };

  String.prototype.toLower = function() {

    var lower = this.toLowerCase();

    return lower;
  };

  String.prototype.ucFirst = function() {

    var change = this[0].toUpperCase();

    var upperFirst = this.replace(this[0], change);

    return upperFirst;
  };

  String.prototype.isQuestion = function() {

    if (this.search(/\?/) !== -1) {
      return true;
    } else {
      return false;
    }
  };

  String.prototype.words = function() {

    var wordArray = this.split(/\s*[^\w]\s*/g);

    return wordArray;
  };


  String.prototype.wordCount = function() {

    var wordArray = this.words();

    return wordArray.length;
  };

  Number.prototype.toCurrency = function() {

    var inString = this.toFixed(2).toString();

    var len = inString.length,

      currency;

    if (len > 3) {
      currency = inString.replace(/(\d(?=(\d{3})+\.))/g, '$&,');

    } else {
      currency = inString;
    }
    return currency;
  };


  String.prototype.fromCurrency = function() {

    var nums = this.split(/\s*,\s*/);

    var joiner = nums.join('');

    var digit = Math.round(joiner * 100) / 100;

    return digit;
  };

  exports.String = String;
