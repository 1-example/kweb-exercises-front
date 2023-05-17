const isValidNumber = num => {
    Num = parseInt(num);
    if (Num != num) return false
    return Num>=1 && Num<=9
}
