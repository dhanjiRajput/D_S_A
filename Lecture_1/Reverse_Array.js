let arr=[1,2,3,4,5,6,7,8,9];

let n=arr.length;

//Create the Function To Reverse The Array
const Reverse=(arr,n)=>{
    for(let i=n-1;i>=0;i--)
    {
        console.log(arr[i]);
    }
}

//Call the function 
Reverse(arr,n);