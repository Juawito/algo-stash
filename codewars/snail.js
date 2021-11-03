snail = function (array) {
  // enjoy
  const result = [];
  result.push(...array[0]);
  let y = array.length - 1;
  let x = array.length - 2;
  let maxIndex = (array.length * array.length); 
  while (true) {
    if (array.length === 0) return;
    for (let i = 1; i < maxIndex; i++) {
      if (i <= array.length -1 ){
      result.push(array[i][y]);
       continue;
      }
      if (i >= array.length -1) {
        let j = Math.floor(i/array.length);
        if(x < 0) {
          x = array.length - 2;
          y--
        }
        for (let index = 0; index < j; index++) {
        result.push(array[y][x]);
        x--;
          
        }
      };
      if(y === 0) {
        return console.log(result)
      }
      console.log(result);
    }
    break;
  }
}
snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
