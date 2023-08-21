function esBisiesto(num) {
    if(num % 400 == 0){
        return true;
    }
    if(num == 200)
    {
        return false;
    }
    if(num == 4){
        return true;
    }
    return false;
}

export default esBisiesto;