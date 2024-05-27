let arr=[3,4,5,0];
let maxsum=0;

const findsum=(arr)=>{
    
    let sum=arr.reduce((total,curr)=>total+curr);
    return sum;
}

for(let i=0;i<arr.length;i++){
    let subarray=[];
    for(let j=i;j<arr.length;j++){
        subarray.push(arr[j]);
        let currsum=findsum(subarray);
        maxsum=Math.max(maxsum,currsum);
    }
}

console.log(maxsum);