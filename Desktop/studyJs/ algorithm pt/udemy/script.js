/** aaz != azz  */


// const intersection = array1.filter(element => array2.includes(element));

// const anagram = function (a,b) {
// let aArr = [];
// let bArr = [];
  
// for(let word of a){
//     aArr.push(word);
// };

// for(let word of b){
//   bArr.push(word);
// }

// for(let i =0;i < a.length;i++){
// if(aArr[i]!== bArr[i]) return false;

// }
// console.log("true")

// };
// const vaildAnagram = function(first,second){
//   if(first.length != second.length) return false; 

//   const lookup = {};

//   for(let i = 0;i<first.length;i++){
//     let letter = first[i];

//     lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1;

//   }
//   for(let i = 0;second.length;  i++){
//     let letter = second[i];

//     if(!lookup[letter]){
//       return false;
//     }else{
//       lookup[letter]-= 1;
//     }
//   }
//   return true;
// }

// vaildAnagram('happy','yapp')

// function anagram(first,second){
//   const lookup = {};
//   for(let i=0;i<first.length; i++){
//     let letter = first[i];
    

//     lookup[letter] ? lookup[letter] +=1 : lookup[letter] =1;
   

//   }

//   for(let i=0;i<second.length;i++){
//     let letter = second[i];
    
//     if(!lookup[`${letter}`]){
//       return false
//     }else{
//       lookup[second] -= 1;
//       console.log(lookup);
//     }
//   }
 
//   return true;
// }


function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let a in countNum1){
     console.log(a);
     
    if(countNum1[a] !== countNum2[a]) return false;
  }
 
  return true;
}

sameFrequency('azz','zza')

