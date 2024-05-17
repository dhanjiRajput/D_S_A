let arr = [1, 2, 3, 4, 3, 5, 6, 10, 20, 30];
let l=arr.length;
let currsum=0;
let maxsum=0;

for(let i=0;i<l;i++){
    if(arr[i]<arr[i+1]){
        currsum=currsum+arr[i];
    }
    else{
        currsum=currsum+arr[i];
        if(maxsum<currsum){
            maxsum=currsum;
        }
        currsum=0;
    }

    if(i+1==l-1){
        currsum+=arr[i+1]
        if(maxsum<currsum){
            maxsum=currsum;
        }
        currsum=0;
    }
}
console.log(maxsum);