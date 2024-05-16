let arr=[[1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16]];

let r=arr.length;
let c=arr[0].length;

//print original Array
console.log("Print Original Array......");
for(let i=0;i<r;i++){
    let str=``;
    for(let j=0;j<c;j++){
        str+=` ${arr[i][j]} `
    }
    console.log(str);
}

//Print Row Wise MAximum Number
console.log("\n Print Maximum Number Element......");

// const find_max=(arr)=>{
//     let max=arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//         console.log(max);
//     }
// }

// for(let i=0;i<arr.length;i++){
//     find_max(arr);
// }

for(let i=0;i<arr.length;i++){
    console.log(Math.max(...arr[i]));
}