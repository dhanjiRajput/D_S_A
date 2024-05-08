let arr1=[2,4,8];
let arr2=[3,5,6,7,10,20,9];
let arr3=[];
let i=0,j=0;


while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        arr3.push(arr1[i]);
        i++;
    }
    else{
        arr3.push(arr2[j]);
        j++;
    }
}

while(i<arr1.length)
{
    arr3.push(arr1[i]);
    i++;
}

while(j<arr2.length)
{
    arr3.push(arr2[j]);
    j++;
}

console.log(arr3);