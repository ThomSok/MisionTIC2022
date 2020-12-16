function numerosCalc() {
    let a = Number(document.getElementById("Entrada1").value);
    let b = Number(document.getElementById("Entrada2").value);
    return {a, b};
}

function sumar() {
    let {a,b} = numerosCalc();
    document.getElementById("Resultado").innerHTML = a + b;
}

function restar() {
    let {a,b} = numerosCalc();
    document.getElementById("Resultado").innerHTML = a - b;
}

function multiplicar() {
    let {a,b} = numerosCalc();
    document.getElementById("Resultado").innerHTML = a * b;
}

function dividir() {
    let {a,b} = numerosCalc();
    document.getElementById("Resultado").innerHTML = a / b;
}

function elevar() {
    let {a,b} = numerosCalc();
    document.getElementById("Resultado").innerHTML = a ** b;
}

function areaCirculo() {
    let c = Number(document.getElementById("EntradArea").value);
    let areacircun = Math.PI * c ** 2;
    document.getElementById("AreaTotal").innerHTML = areacircun.toFixed(2) + " m";
}

function fahrenheitToCelsius() {
    let d = Number(document.getElementById("EntradaTemperatura").value);
    let converted = (d-32) * 5/9;
    document.getElementById("TemperaturaConvertida").innerHTML = converted.toFixed(2) + " °C";
}

function numerosAlgebra() {
    let vala = Number(document.getElementById("ValorA").value);
    let valb = Number(document.getElementById("ValorB").value);
    let valc = Number(document.getElementById("ValorC").value);
    return {vala, valb, valc};
}

function sumaCuadrados() {
    let {vala, valb, valc} = numerosAlgebra();
    let suma2 = (vala + valb + valc) ** 2;
    document.getElementById("AlgebraResuelta").innerHTML = suma2;
    return suma2;
}

function productoTerminos() {
    let {vala, valb, valc} = numerosAlgebra();
    let productoValores = vala * valb * valc;
    document.getElementById("AlgebraResuelta").innerHTML = productoValores;
}

function productoCubo() {
    let {vala, valb, valc} = numerosAlgebra();
    let producto3 = (vala * valb * valc) ** 3;
    document.getElementById("AlgebraResuelta").innerHTML = producto3;
    return producto3;
}

function diferenciaTerminos() {
    let productoValores = sumaCuadrados() - productoCubo();
    document.getElementById("AlgebraResuelta").innerHTML = productoValores;
}

function promedioNotas() {
    let nombre = document.getElementById("Nombre").value;
    let codigo = document.getElementById("Codigo").value;
    let nota1 = Number(document.getElementById("Nota1").value);
    let nota2 = Number(document.getElementById("Nota2").value);
    let nota3 = Number(document.getElementById("Nota3").value);

    let promedioTotal = (nota1 + nota2 + nota3) / 3;

    document.getElementById("NombreForm").innerHTML = nombre;
    document.getElementById("CodigoForm").innerHTML = codigo;
    document.getElementById("PromedioNotas").innerHTML = promedioTotal.toFixed(2);
}