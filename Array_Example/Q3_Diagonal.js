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

//print Diagonal Element
console.log("\n Print Diagonal Element......");
for(let i=0;i<r;i++){
    let str=``;
    for(let j=0;j<c;j++){
        if(i==j){
            str+=` ${arr[i][j]} `
        }
        else{
            str+=`    `;
        }
    }
    console.log(str);
}

// OR

// for(let i=0;i<r;i++){
//     console.log(arr[i][i]);
// }