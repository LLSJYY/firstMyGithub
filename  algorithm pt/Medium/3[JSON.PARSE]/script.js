let mat = [[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]];
let square = [];
let array = [];
console.log(mat[0].length);
for(let i = 0;i < mat.length ; i++){
  for(let j = 0; j < mat[i].length ; j++){
    array.push(mat[i][j]);
  }
}

// 일단 (0,0) 부터 (i(max),j(max))


console.log(array)
mat[0][1]