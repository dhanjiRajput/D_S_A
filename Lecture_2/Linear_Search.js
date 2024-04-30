let arr=[1,2,3,4,5,6,7,8,9];

let n=arr.length;

let target=7;

//Function for search data
const Search=(arr,n,target)=>{
    for(let i=0;i<n;i++)
    {
        if(target==arr[i])
        {
            return `Found index : ${i} for Target value :${target}`;
        }
    }
    return "Not Found";
}

//Call the function
console.log(Search(arr,n,target));
