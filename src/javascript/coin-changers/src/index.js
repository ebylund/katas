module.exports = (input) => {
  let remaining = input

  const coins = {
    half: 50,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  }

  const change = {
    penny: 0,
    nickel: 0,
    dime: 0,
    quarter: 0,
    half: 0
  }

  // while (remaining > 0) {
    if (remaining > coins.half) {
      change.half += 1;
      remaining -= 50;
    }
    // for (const key in coins) {
    //   console.log(key);
    //   console.log(coins[key]);
    // }
    // const keys = Object.keys(coins)
    // const values = Object.value(coins)
    // keys.forEach(it => {
      
    // })
  // }

  // while(remaining >= 50) {
  //   change.half += 1
  //   remaining -= 50
  // }

  // while(remaining >= 25) {
  //   change.quarter += 1
  //   remaining -= 25
  // }
  
  // while(remaining >= 10) {
  //   change.dime += 1
  //   remaining -= 10
  // }

  // while(remaining >= 5) {
  //   change.nickel += 1
  //   remaining -= 5
  // }

  // while(remaining >= 1) {
  //   change.penny += 1
  //   remaining -= 1
  // }

  return change
}
