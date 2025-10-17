export function soma(num1, num2) {
    return num1 + num2;
}

export function subtracao(num1, num2) {
    return num1 - num2;
}

export function multiplicacao(num1, num2) {
    return num1 * num2;
}

export function divisao(num1, num2) {
    if (num2 === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return num1 / num2;
}
