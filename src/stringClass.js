  //checkpoint 2 string class;
  //Atolagbe Bisoye

  //hasVowel
  String.prototype.hasVowel = function() {

  	//search if string has vowel and return true or false
    if (this.search(/(a|e|i|o|u)/i) !== -1) {
      return true;
    } else {
      return false;
    }

  };

  //toUpper
  String.prototype.toUpper = function() {

    var upper = this.toUpperCase();

    return upper;
  };

  //toLower
  String.prototype.toLower = function() {

    var lower = this.toLowerCase();

    return lower;
  };

  //ucFirst
  String.prototype.ucFirst = function() {

    var change = this[0].toUpperCase();

    var upperFirst = this.replace(this[0], change);

    return upperFirst;
  };


  //is Question
  String.prototype.isQuestion = function() {

    if (this.search(/\?/g) !== -1) {
      return true;
    } else {
      return false;
    }
  };

  //words 
  String.prototype.words = function() {

  	//split by all non alphabets
    var wordArray = this.split(/[\s\W\d]+/g);
    
    var i = 0;
    
    //remove extra white spaces
    do{
    	if (wordArray[i] === ''){
    		wordArray.splice(i, 1);
    	}
    	
    	i+=1;
    }
    while(i < wordArray.length);

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
