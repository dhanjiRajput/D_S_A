let arr=[9,2,3,4,5,6,7,8,9];
let k=3;
let minsum=0;
let currsum=0;

for(let i=0;i<k;i++){
    currsum+=arr[i];
}

minsum=currsum;

for(let i=k;i<arr.length;i++){
    currsum+=arr[i]-arr[i-k];

    if(currsum<minsum){
        minsum=currsum;
    }
}

console.log(minsum);