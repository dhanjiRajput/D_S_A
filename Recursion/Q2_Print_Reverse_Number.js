const print=(n)=>{
    // Base Case

    if(n==0){
        return;
    }

    console.log(n);
    print(n-1)
}

console.log(print(10));