function jumpingOnClouds(c, k) {
    const n = c[0];
    const jump = c[1];
    let i = 0;
    let energy = 100;
    
    
     do {
       i = (i + jump) % n;
        energy -= k[i] * 2 + 1;
     }  while (i != 0);
     return energy
 }

 const arr1 = [8,2];
 const arr2 = [0, 0, 1, 0, 0, 1, 1, 0];

 jumpingOnClouds(arr1, arr2);