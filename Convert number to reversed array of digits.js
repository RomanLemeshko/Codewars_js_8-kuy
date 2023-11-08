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
