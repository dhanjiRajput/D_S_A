let arr=[1,2,3,4,105,6,7,8,9];

let n=arr.length;

//Create A Function To Find Maximum number
const Min=(arr,n)=>{
    
    let mini=arr[0];

    for(let i=0;i<n;i++)
    {
        if(arr[i]<mini)
        {
            mini=arr[i];
        }
    }
    return mini;
}

console.log(Min(arr,n));