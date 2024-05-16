let str="nayan";
let arr=str.split("");
let arr2=[];
let flag=false;

for(let i=0;i<arr.length;i++){
    arr2[i]=arr[i];
}

arr2.reverse();

for(let i=0;i<arr.length;i++){
    if(arr[i]==arr2[i]){
        flag=true;
    }
}

if(flag){
    console.log("Is Palindrome.....!");
}else{
    console.log("Not Palindrome......!");
}
