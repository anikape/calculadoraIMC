function calculate() {
    var height = document.getElementById("altura").value;
    var weight = document.getElementById("peso").value;


    var imc = weight / (height * height).toFixed(1);

    var classificacao = '';

    if (imc < 16) {
        classificacao = 'Valor inválido';
    } else if (imc <= 16.9) {
        classificacao = 'Muito abaixo do peso';
    } else if (imc <= 18.4) {
        classificacao = 'Abaixo do peso';
    } else if (imc <= 24.9) {
        classificacao = 'Peso Normal.';
    } else if (imc <= 29.9) {
        classificacao = 'Acima do Peso.';
    } else if (imc <= 34.9) {
        classificacao = 'Obesidade grau I.';
    } else if (imc <= 40) {
        classificacao = 'Obesidade grau II.';
    } else if (imc > 40) {
        classificacao = 'Obesidade grau III.';
    }
    document.getElementById("text_area").innerHTML = classificacao
}