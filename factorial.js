function factorial(num){
    if(num === 0){
        return 1
    }

    //expected 
    // 5 = 5 * 4 * 3 * 2 * 1
    return num * factorial(num - 1);   
}
console.log(factorial(5));