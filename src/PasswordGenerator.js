export default class PasswordGenerator {
  constructor() {
    this.lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    this.upperLetters = this.lowerLetters.toUpperCase();
    this.numbers = "1234567890";
    this.symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  shuffleString = function (str) {
    const chars = str.split("");
    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    return chars.join("");
  };

  generatePassword = function (charLen, lower, upper, nums, symbols) {
    let charList = "";
    charList += lower ? this.lowerLetters : "";
    charList += upper ? this.upperLetters : "";
    charList += nums ? this.numbers : "";
    charList += symbols ? this.symbols : "";

    const shuffledString = this.shuffleString(charList);
    return shuffledString.slice(0, charLen);
  };
}
