let arr=[1,2,3,4,5,6,1];
let n=arr.length;

let set=new Set(arr);
let m=set.size;

if(n!=m){
    console.log("Duplicate");
}else{
    console.log("Not Duplicate");
}
