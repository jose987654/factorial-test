module.exports = function factorial(num) {
    if (num === 0 || num === 1) return 1;
    for (i = num - 1; i >= 1; i--) {
      // console.log(num);
      num = num * i;
  
    }
    return num;
  };
  