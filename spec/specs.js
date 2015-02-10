describe('pigLatin', function() {
  it("adds 'ay' to the end of words that start with a vowel", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

  it("will move a starting consonant to rear and add 'ay' to end", function(){
    expect(pigLatin("read")).to.equal("eadray");
  });

  it("will all the starting consonants to rear and add 'ay' to end", function() {
    expect(pigLatin("three")).to.equal("eethray");
  });
});
