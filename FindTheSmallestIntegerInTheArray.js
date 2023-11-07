// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let result = args[0];
      for(let i of args){
        if(i < result){
          result = i;
        }
      }
      return result;
    }
  }