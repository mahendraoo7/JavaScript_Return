// Normal function

//  function Sum(a,b) {
//     console.log(a+b)
//  } 

//  Sum(22,33);

 // arrow funciton

//   const Sm = (a,b) => {
//     console.log(a+b)
//   }

//   Sm(22,33)

  //vowel COUNTER

  
//   const vowelCounter = (str) => {
//     let Count = 0; 

//     for(let char of str) {
      
//         if(char == 'a' || char == 'i' || char == 'o' || char == 'u' || char == 'e' || char == 'A' || char == 'I' || char == 'O' || char == 'U' || char == 'E')
//         {
//             Count++;
//         }
//     }
//     return Count;

//   }

//   vowelCounter("My name is mAhendra");
 

// Squre  ForEach

//  const Num = [11,22,33,44,55,66,77,88,99];

//   Num.forEach((v,i) => {
//       console.log(v*v, i);
//  });

// Map Method

// let arr = [22,33,23,24,25,26,27,28];

// let newArr = arr.map((value) => {

//  return value*2;
// })

// console.log(newArr);

//  Filter Method 

//  let Arr = [22,33,44,55,66,77,88];

//  let newArr = Arr.filter((value) => {
//     return value%2 == 0;
//  })

//  console.log(newArr)

//  Reduce Method   // convert array in One Element

//   let array = [12,23,34,54,56,76,78,89,90];

//   let newA = array.reduce((r,c) => {
//     return r*c;
//   })
 
//   console.log(newA)


// return largest value in reduce method

// const red = [22,33,44,22,21,34,65,54,98,56,78];

// let reduce = red.reduce((s,c) => {

//     return s>c ? s : c;
// } )

// console.log(reduce);

// Student MArks 

// const marks = [67,87,56,45,90,91,95,98,67,99,56,34,89,90];

// let Large = marks.filter(value => {
//     return value > 90;
// })

// console.log(Large)

// const mark = [34,98,89,76,45,93,56,94,98,99];

// let Largest = mark.map((value)=> {

//     return  value >90 ;
// })

// console.log(Largest)


// let n = prompt("enter Value");
// let a = [];
// for(let i=1; i<=n; i++) 
// {
//     a[i-1] = i;
// }

// console.log(a);


// factorial 

// let n = prompt("enter Number");

// let a = [];

// for(let i=1; i<=n; i++) 
// {
//     a[i-1] = i;
// }

// console.log(a);

// let reduce =  a.reduce((r , c) => {
//     return r*c;
// })
// let reducer =  a.reduce((r , c) => {
//     return r+c;
// })

// console.log("Sum" , reducer)

// console.log("Factorial",reduce)

