const getIdealNums = (low, high) => {
    let powersOf3 = [];
    let powersOf5 = [];

    let memo = [];

    let power = 0;

    let total = 0;
    while (Math.pow(3, power) <= high || Math.pow(5, power) <= high) {
        powersOf3.push(Math.pow(3, power));
        powersOf5.push(Math.pow(5, power));
        power++
    }
    let counter1 = 0;
    let counter2 = 0;
    for (let i = 0; i <= (Math.pow(powersOf3.length,2)) - (powersOf3.length + 1); i++) {
        if (counter1 === powersOf3.length ) {
            counter1 = 0;
            counter2++;
        } if(counter2 === powersOf3.length && counter1 === powersOf3.length){
            return
        }
        console.log((powersOf3[counter1], counter1), (powersOf5[counter2], counter2), )
        memo.push(((powersOf3[counter1]) * (powersOf5[counter2])))
            counter1++
    }

    for (let j = 0; j < memo.length; j++) {
        if (memo[j]<=high && memo[j]>=low) {
            total++
        }
    }
    console.log(total)
    return total

}

getIdealNums(200, 405);
