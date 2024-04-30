let arr=[1,2,3,4,5,6,7,8,9,0];

let n=arr.length;


//Create Function for Print Array
const Print_Array=(arr,n)=>{
    for(let i=0;i<n;i++)
    {
        console.log(arr[i]);
    }
}

//Call The Function
Print_Array(arr,n);