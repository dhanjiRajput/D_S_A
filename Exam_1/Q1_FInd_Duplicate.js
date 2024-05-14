let arr=[1,2,3,4,1,2,2,2,3];
let maxcount=0;
let ele;

let result=[-1,-1];

for(let i=0;i<arr.length;i++){
    let count=0;
    for(let j=0;j<arr.length;j++){
        if(arr[i]==arr[j]){
            count++;
        }
    }

    if(count>maxcount){
        maxcount=count;
        ele=arr[i];
    }
}

if(maxcount>1){
    result[0]=maxcount;
    result[1]=ele;
}

console.log(result);