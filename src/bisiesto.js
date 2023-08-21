function esBisiesto(num) {
    if(num % 400 == 0){
        return true;
    }
    if(num % 100 == 0 && num % 400 != 0)
    {
        return false;
    }
    if(num == 4){
        return true;
    }
    return false;
}

export default esBisiesto;