function revString(str){
    if(str.length === 0){
        return '';
    }
    return revString(str.slice(1)) + str[0];

}
console.log(revString('dogbark'));