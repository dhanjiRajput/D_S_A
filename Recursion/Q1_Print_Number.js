const print=(n)=>{
    // Base Case

    if(n==0){
        return;
    }

    print(n-1)
    console.log(n);
}

console.log(print(10));