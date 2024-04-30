let arr=[1,2,3,4,5,6,7,8,9];

let n=arr.length;

//Create Function To Sum The Array
const Sum=(arr,n)=>{

    let add=0;

    for(let i=0;i<n;i++)
    {
        add=add+arr[i];
    }

    return add;
}

//Call The Function
console.log(Sum(arr,n));