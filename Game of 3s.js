 function gamethreee(n) {
  
        while (n >= 1) {
          console.log(n, (n % 3) - 1);
            if (n % 3 === 1) {
                n -= 1;
                n /= 3;
            } else if (n % 3 === 2) {
                n += 1;
                n /= 3;
            } else {
                n /= 3;
              
            }
        }
        return n; // Assuming you want to return the final value of n
    }
    
    gamethreee(100);