let arr=[1,2,3,4,5,6,7,8,9];

let n=arr.length;

//Function for Change the Position
const Position=(arr,n)=>{
    let i=0;
    let j=n-1;

   while(i<=j)
   {
        if(i==j)
        {
            console.log(arr[i]);
            i++;
            j--;
        }
        else
        {
            console.log(arr[j],arr[i]);
            i++;
            j--;
        }
   }
}

//Call the function
Position(arr,n);