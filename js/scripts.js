var pigLatin = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];

  var begin_vowel = false;

  vowels.forEach(function(vowel) {
    if (word[0] === vowel) {
      begin_vowel = true;
    }
  });

  if (begin_vowel) {
    word = word + "ay";
  } else {
    var new_end = word.slice(0,1) + "ay";
    word = word.substr(1) + new_end;
  }

  return word;

};
