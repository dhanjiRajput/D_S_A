let arr=[1,2,3,4,5,6,7,8,9,1,2,3,5];

arr.sort((a,b)=>a-b);

//Function for FInd Duplicate Number
const Duplicate=(arr)=>{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==arr[i+1])
        {
            console.log(arr[i]);
        }
    }
}

//Call the Duplicate function
Duplicate(arr);