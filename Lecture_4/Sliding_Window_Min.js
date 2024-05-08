let arr=[1,2,3,4,5];

let minsum=0;
let currsum=0;
let k=3;

for(let i=0;i<k;i++){
    currsum+=arr[i];
}

minsum=currsum;

for(let i=k;i<arr.length;i++){
    currsum+=arr[i]-arr[i-k];

    if(minsum>currsum)
    {
        minsum=currsum;
    }
    // maxsum=Math.min(maxsum,currsum);
}

console.log(minsum);