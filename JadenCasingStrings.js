// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"



String.prototype.toJadenCase = function () {
    let str = this.split(" ")
    .map((newStr) => newStr[0].toUpperCase() + newStr.slice(1))
    .join(" ");
    return str;
  };



String.prototype.toJadenCase = function () {
  let arr = this.split(" ");
  let newArr = arr.map((newArr) => newArr[0].toUpperCase() + newArr.slice(1));
  let result = newArr.join(" ");
  return result;
};