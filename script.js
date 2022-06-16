
function canculaFatorial(number) {
    let numeroFatorial = 1;
    let num = number;
    if (number < 0) {
        return 'Digite um numero inteiro';
    }
    for (let i = 1; i < number; i++) {
        num = num * i;
        numeroFatorial = num;
    }
    return numeroFatorial;

}
console.log(canculaFatorial(5));


