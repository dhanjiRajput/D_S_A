let arr=[1,2,3,4,5];

let maxsum=0;
let currsum=0;
let k=3;

for(let i=0;i<k;i++){
    currsum+=arr[i];
}

maxsum=currsum;

for(let i=k;i<arr.length;i++){
    currsum+=arr[i]-arr[i-k];

    if(maxsum<currsum)
    {
        maxsum=currsum;
    }
    // maxsum=Math.max(maxsum,currsum);
}

console.log(maxsum);
