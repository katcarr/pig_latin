var pigLatin = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var consonants = ["b","c","d", "f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x", "y", "z"]
  var vowel_not_found = true;
  var new_end = "";
  while(vowel_not_found){
    for (var i = 0; i < consonants.length; i += 1) {
      if(word[0] === consonants[i]){
        new_end = new_end + word[0];
        word = word.substr(1);
        vowel_not_found = true;
        break;
      } else{
        vowel_not_found = false;
      }
    }
  }
  return word + new_end + "ay";
};
