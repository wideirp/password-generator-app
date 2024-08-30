import { Strengths } from "./store";

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

  getStrength = function (charLen, lower, upper, nums, symbols) {
    if ((!lower && !upper && !nums && !symbols) || charLen <= 0) {
      return Strengths.NONE;
    }
    let strength = Strengths.TOOWEAK;
    if (lower && upper && nums && symbols && charLen >= 8) {
      strength = Strengths.STRONG;
    } else if ((lower || upper) && symbols && charLen >= 6) {
      strength = Strengths.MEDIUM;
    } else if ((lower || upper) && !symbols && charLen >= 6) {
      strength = Strengths.WEAK;
    }
    return strength;
  };

  generatePassword = function (charLen, lower, upper, nums, symbols) {
    let charList = "";
    charList += lower ? this.lowerLetters : "";
    charList += upper ? this.upperLetters : "";
    charList += nums ? this.numbers : "";
    charList += symbols ? this.symbols : "";

    const shuffledString = this.shuffleString(charList);
    const newPassword = shuffledString.slice(0, charLen);

    const strength = this.getStrength(charLen, lower, upper, nums, symbols);
    return [newPassword, strength];
  };
}
