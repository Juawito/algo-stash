const fibo = (n) => {
    let akin = {}
    for (let i = 1; i <= n; i++) {
      if (i < 3) {
          akin[i] = 1
          continue
      }
      const idx1 = i - akin[i-1]
      const idx2 = i - akin[i-2]
      akin[i] = akin[idx1] + akin[idx2]
    }
    return akin
}

const checkValue = (n, comp) => {
    const akin = fibo(n);
    let result = 0;
    for (let i = 15; i <= n; i++) {
        const curr = akin[i];
        if (curr >= comp){
            result++
        }
    }
    return result;
}
const lessThanAkin = (n) => {
    const akin = fibo(n);
    let numberOfDiff = 0;

    for (let i = 15; i <= n; i++) {
        const curr = akin[i];
        const previous = akin[i-1];
        if (curr < previous){
            numberOfDiff++
        }
    }
    return numberOfDiff;

}