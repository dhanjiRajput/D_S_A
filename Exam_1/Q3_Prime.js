let arr=[[1,2,3,4],
        [5,6,7,8],
        [9,10,11,12]];

let r=arr.length;
let c=arr[0].length;

const IsPrime=(n)=>{
    if(n==1){
        return false;
    }

    for(let i=2;i<n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

for(let i=0;i<r;i++){
    for(j=0;j<c;j++){
        if(IsPrime(arr[i][j])){
            console.log(arr[i][j]);
        }
    }
}