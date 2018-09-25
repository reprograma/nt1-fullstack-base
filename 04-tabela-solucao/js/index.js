var todosOsAlunos = document.querySelectorAll(".aluno");
// console.log(todosOsAlunos);


for (var i = 0; i < todosOsAlunos.length; i++) {
    // console.log(todosOsAlunos[i]);

    var aluno = todosOsAlunos[i];
    var tdPrimeiraNota = aluno.querySelector(".info-notaum");
    console.log(tdPrimeiraNota);
    var primeiraNota = tdPrimeiraNota.textContent;
    var tdSegundaNota = aluno.querySelector(".info-notadois");
    var segundaNota = tdSegundaNota.textContent;
    var mediaFinal = aluno.querySelector(".info-media");

    var notaEhValida = true;

    if (primeiraNota < 0 || primeiraNota > 10) {
        notaEhValida = false;
        mediaFinal.textContent = "Nota Inválida";
    }

    if (notaEhValida) {
        var mediaCalculada =
            // ((parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2);
            calcularMedia(primeiraNota, segundaNota);
        if (mediaCalculada < 5) {
            // aluno.style.backgroundColor = "red";
            aluno.classList.add("abaixo-da-media");
        }
        mediaFinal.textContent = mediaCalculada.toFixed(2);
    }

}

function calcularMedia(provaUm, provaDois) {
    var mediaDentroDaFuncao = 0;
    mediaDentroDaFuncao = ((parseFloat(provaUm) + parseFloat(provaDois)) / 2);
    return mediaDentroDaFuncao;
}

// http://dontpad.com/reprograma-js-jquery