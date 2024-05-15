let arr=[1,2,3,4,5];
let arr2=[];
let total=1;
for(let i=0;i<arr.length;i++){
    total=total*arr[i];
}


for(let i=0;i<arr.length;i++){
    arr[i]=total/arr[i];
}

console.log(arr);