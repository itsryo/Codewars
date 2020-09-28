function isDivideBy(number, a, b) {
    if(number%a==0&&number%b==0)
      {
        return true;
      }
    else
      {
        return false;
      }
  }

  //Best Practices
//   const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;