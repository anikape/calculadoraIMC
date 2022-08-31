function calculate() {
    var height = document.getElementById("altura").value;
    var weight = document.getElementById("peso").value;


    var imc = weight / (height * height).toFixed(1);

    var classificacao = '';

    var imagem = '';

    var resultado = imc.toFixed(1);


    //Calculo do IMC
    if (imc < 16) {
        classificacao = ' ';
        document.getElementById("valorInvalido").style.display = "block"; // a imagem aparecerá
        document.getElementById("textoValue").innerHTML = "Olá! <br><br> Valor inválido. Por favor, verifique as informações iseridas." //mensagem que irá aparecer

    } else if (imc <= 16.9) {
        classificacao = 'muito abaixo do peso';
        document.getElementById("muitoAbaixo").style.display = "block";
        document.getElementById("muitoBaixo").innerHTML = "Olá! <br> Você está muito abaixo do peso. Que tal procurar a ajuda de um nutricionista e preparar aquela alimentação legal para chegar ao peso ideal"

    } else if (imc <= 18.4) {
        classificacao = 'abaixo do peso';
        document.getElementById("abaixoDoPeso").style.display = "block";
        document.getElementById("abaixoPeso").innerHTML = "Olá! Você está abaixo do peso. Mas com a ajuda de um nutricionista podemos chegar ao peso ideal. "

    } else if (imc <= 24.9) {
        classificacao = 'com seu peso Normal.';
        document.getElementById("pesoNormal").style.display = "block";
        document.getElementById("pesoNormal").innerHTML = "Olá! Parabéns. Seu peso está normal. Continue cuidando da sua saúde."

    } else if (imc <= 29.9) {
        classificacao = 'acima do Peso.';
        document.getElementById("acimaDoPeso").style.display = "block";
        document.getElementById("pesoAcima").innerHTML = "Olá! Você está acima do peso. Mas sem desespero, ok?! Exercíos físicos e uma alimentação saudável são os aliados."

    } else if (imc <= 34.9) {
        classificacao = 'com Obesidade grau I.';
        document.getElementById("ob1").style.display = "block";
        document.getElementById("obeso1").innerHTML = "Atenção! Você está com obesidade grau 1. Que tal iniciar um checkup?"

    } else if (imc <= 40) {
        classificacao = 'com Obesidade grau II.';
        document.getElementById("ob2").style.display = "block";
        document.getElementById("obeso2").innerHTML = "Atenção! Você está com obesidade grau 2. Que tal iniciar um checkup? "

    } else if (imc > 40) {
        classificacao = 'com Obesidade grau III.';
        document.getElementById("ob3").style.display = "block";
        document.getElementById("obeso3").innerHTML = "Atenção! Você está com obesidade grau 3. Que tal iniciar um checkup? Cuide-se!"

    }


    document.getElementById("text_area").innerHTML = resultado
    document.getElementById("valorInvalido").innerHTML = imagem

}






// alterancia de imagens