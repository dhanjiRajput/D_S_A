let arr=[[1,2,3,4],
        [5,6,7,8],
        [9,10,11,12]];

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

//print Last Row to First
console.log("\n Print Last Row to First......");
for(let i=r-1;i>=0;i--){
    let str=``;
    for(let j=0;j<c;j++){
        str+=` ${arr[i][j]} `
    }
    console.log(str);
}