// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Необходимо вернуть цифры этого числа в массиве в обратном порядке.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
    let arr = [];
    let newStr = String(n);
    for (let i = newStr.length-1; i >= 0; i--) {
      arr.push(Number(newStr[i]));
      }
      return arr;
  }