let arr=[1,2,3,4,5,6,7,8,9,10];

let i=0;
let j=arr.length-1;
let target=12;

while(i<j){
    if(arr[i]+arr[j]==target){
        console.log(`Index : ${i} Value : ${arr[i]} Index : ${j} Value : ${arr[j]}`);
        i++;
        j--;
    }
    else if(arr[i]+arr[j]>target){
        j--;
    }
    else{
        i++;
    }
}