let arr=[1,3,4,5,6,7,8,0];

let n=arr.length;

//Function for Sum of Index
const Sum_Index=(arr,n)=>{
    let sum=0;
    for(let i=1;i<=n;i++)
    {
         sum+=i;
    }
    return sum;
}

//Function for Sum of Index Value
const Sum_Value=(arr,n)=>{
    let sum=0;
    for(let i=0;i<n;i++)
    {
        sum+=arr[i];
    }
    return sum;
}

//Call the function
console.log(Sum_Index(arr,n)-Sum_Value(arr,n));