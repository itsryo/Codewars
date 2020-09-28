const divisors = (num) => {
  
    let retArr = [];
    
    if(isPrime(num)) {
      return num + ' is prime';
    }
    
    for(let i = 2; i < num; i++) {
      
      if(num % i === 0) {
        retArr.push(i);
      }
      
    }
    return retArr;
  }
  
  function isPrime (num) {
    
    for(let i = 2; i < num; i++) {
      
      if(!(num % i)) {
        return false;
      }
      
    }
    return true;
  }
  
  
  console.log(divisors(12));
  console.log(divisors(25));
  console.log(divisors(13));
  
  //best practice solution
  
  function divisorss(integer) {
    var res = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i === 0) res.push(i);
    return res.length ? res : integer + ' is prime'
  }
  