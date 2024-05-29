const pow=(n)=>{

    if(n==0){
        return 1;
    }

    return 2 * pow(n-1);
}

console.log(pow(3));