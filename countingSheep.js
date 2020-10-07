function CountSheep(num){
    //base
    if(num === 0){
        console.log("all sheep jumps over the fence")
        return;
    }

    console.log(num + ": another sheep jumps over the fence");
    //recursive case
    return CountSheep(num - 1);
    
}

CountSheep(3);