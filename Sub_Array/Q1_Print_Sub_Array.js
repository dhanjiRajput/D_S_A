let arr=[3,4,5];

for(let i=0;i<arr.length;i++){
    let subarray=[];
    for(let j=i;j<arr.length;j++){
        subarray.push(arr[j]);
        console.log(subarray);
    }
}