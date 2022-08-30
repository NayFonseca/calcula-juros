var valorCompra = 3000;
var taxa = 2.39; // em porcentagem (%)
//var parcelas = prompt("Informe o número de parcelas.");
var parcelas = 10;

imprima("Parcelamento em " + parcelas + " vezes: ")
imprima("Juros: " + calculaJuros(valorCompra, parcelas, taxa).toFixed(2));
imprima("Valor Total: " + calculaValorTotal(valorCompra, parcelas, taxa).toFixed(2));
imprima("Parcela: " + calculaParcela(valorCompra, parcelas, taxa).toFixed(2));

imprima("");
imprima(descobreJUROS(3000, 850, 10));

imprima("");
imprima(calculaDesconto(4999, 15).toFixed(2));



function imprima(texto) {
    document.write(texto + "<br>");
}

function calculaJuros(capital, intervalo, taxa) {
    return (capital * (taxa / 100) * intervalo);
}

function calculaValorTotal(capital, intervalo, taxa) {
    return (calculaJuros(capital, intervalo, taxa) + capital);
}


function calculaParcela(capital, intervalo, taxa) {
    return (calculaValorTotal(capital, intervalo, taxa) / parcelas);
}

// Descobrir quantidade de juros ao mês
function descobreJUROS(valorCompra, valorParcela, parcelas) {
    var valorTotal = valorParcela * parcelas;
    var juros = valorTotal - valorCompra;
    var taxa = juros / (valorCompra * parcelas);
    return (taxa * 100) + "%";
}

// Descobrir o valor a ser pago com o desconto recebido
function calculaDesconto(valor, desconto) {
    var valorDescontado = valor * (desconto / 100);
    var valorComDesconto = valor - valorDescontado;
    return valorComDesconto;
}
// Descobrir o valor a ser pago com o desconto recebido (simplificado)
function calculaDesconto(valor, desconto) {
    return valor - (valor * desconto / 100);
}