export default class PasswordGenerator {
  constructor() {
    this.lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    this.upperLetters = this.lowerLetters.toUpperCase();
    this.numbers = "1234567890";
    this.symbols = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  generatePassword = function (charLen, lower, upper, nums, symbols) {
    let charList = "";
    charList += lower ? this.lowerLetters : "";
    charList += upper ? this.upperLetters : "";
    charList += nums ? this.numbers : "";
    charList += symbols ? this.symbols : "";

    return charList.slice(0, charLen);
  };
}
