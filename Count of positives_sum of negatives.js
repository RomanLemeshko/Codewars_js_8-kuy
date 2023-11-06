function countPositivesSumNegatives(input) {
  if (input === null || input.length < 1)
  return [];
  let newArr = [0,0];
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      newArr[0] += 1;
      } else {
        newArr[1] += input[i];
        }
    }
    return newArr;
  }