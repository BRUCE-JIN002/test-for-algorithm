var lemonadeChange = function (bills) {
  let five = 0;
  let ten = 0;
  for (let i = 0; i < bills.length; i++) {
    let bill = bills[i];
    if (bill === 5) {
      five += 1;
    } else if (bill === 10) {
      ten += 1;
      if (five > 0) {
        five -= 1;
      } else {
        return false;
      }
    } else {
      if (ten > 0 && five > 0) {
        five -= 1;
        ten -= 1;
      } else if (five > 2) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};

const bills = [5, 5, 5, 10, 5, 5, 10, 20, 20, 20];
console.log(lemonadeChange(bills));
