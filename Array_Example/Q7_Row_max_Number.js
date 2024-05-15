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
let max=0;
let maxrow=-1;

for(let i=0;i<r;i++){
    let count=0;
    for(j=0;j<c;j++){
        if(arr[i][j]==1){
            count++;
        }
    }
    if(count>max)
    {
        max=count;
        maxrow=i+1;
    }
}

console.log(maxrow,max);