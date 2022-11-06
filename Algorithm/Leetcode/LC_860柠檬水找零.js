var lemonadeChange = function(bills) {
    const change = new Array(3).fill(0);
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            change[0] += 1;
        } else if (bills[i] === 10 && change[0] !== 0) {
            change[1] += 1;
            change[0] -= 1;
        } else if (bills[i] === 20) {
            change[2] += 1;
            let temp = 15;
            if (change[1] !== 0) {
                change[1] -= 1;
                temp -= 10;
            }
            while (temp && change[0] !== 0) {
                temp -= 5;
                change[0] -= 1;
            }
            if (temp !== 0) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
};

const bill = [5, 5, 10, 10, 20];
console.log(lemonadeChange(bill));