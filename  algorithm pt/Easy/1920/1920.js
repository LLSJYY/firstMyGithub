// const nums = [5,0,1,2,3,4];
// let ans = [];

// for(let i =0;i < nums.length; i++){
//   ans.push(nums[nums[i]])
// }

// ans;
let nums = [5,0,1,2,3,4];

const ans = nums.map(function(el,index){
    console.log(el,index);
  return nums[nums[index]];

  })
  console.log(ans);  // 맵 사용버


  
// nums.forEach(function(e){
//   debugger;
//   console.log(e);
//     ans.push(nums[nums[e]]);
//     return ans;
// });
// ans;
