module.exports = function factorial(num) {
    if (num == 0 || num == 1) return 1;
    for (i = num - 1; i >= 2; i--) {      
      num = num * i;  
    }
    return num;
  };
  