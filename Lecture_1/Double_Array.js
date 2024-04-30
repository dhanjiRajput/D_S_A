let arr=[1,2,3,4,5,6,7,8,9];

let n=arr.length;

//Create A Function To Double Array Value
const Double=(arr,n)=>{
    for(let i=0;i<n;i++)
    {
        arr[i]=arr[i]*2;
        console.log(arr[i]);
    }
}

Double(arr,n);
