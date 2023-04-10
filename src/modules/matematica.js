export default function SumaTotal(num1, num2, num3){
    return num1 + num2 + num3;
}

export function RestaTotal(num1, num2, num3){
    return  num1 - num2 - num3;
}

function Promedio(num1, num2, num3){
    let Promedio;
    Promedio = num1 + num2 + num3;
    Promedio = Promedio % 3;
    return Promedio;
}

export default function Multiplicar(num1, num2){
    return num1*num2;
}
