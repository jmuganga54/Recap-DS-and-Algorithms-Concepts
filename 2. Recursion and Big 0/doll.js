const openRussianDoll = (doll)=>{
    if(doll == 1){
        console.log('All dolls are opened')
    }else{
        console.log(doll)
        openRussianDoll(doll-1)

    }
}

openRussianDoll(4)