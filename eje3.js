for (let x=2;x<=1000;x++){
    let esprimo = true;
    for (let y=2;x>y;y++){
        if(x%y===0){
            esprimo = false;
            break;
        }
       
    }
    if(esprimo===true){
            console.log(x)
    }
}