function stringSplit(str){
    if(str.length === 0){
        return [];
    }
    let stringy = str[0] === "/" ? "," : str[0];

    return [stringy + stringSplit(str.slice(1))]

}
console.log(stringSplit("02/20/2020"))