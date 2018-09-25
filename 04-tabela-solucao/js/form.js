var adicionarAluno = document.querySelector("#adicionar-aluno");


adicionarAluno.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var notaum = form.notaum.value;
    var notadois = form.notadois.value;

    var alunoTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var notaUmTd = document.createElement("td");
    var notaDoisTd = document.createElement("td");
    var mediaTd = document.createElement("td");

    nomeTd.textContent = nome;
    notaUmTd.textContent = notaum;
    notaDoisTd.textContent = notadois;
    mediaTd.textContent = calcularMedia(notaum, notadois);

    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(notaUmTd);
    alunoTr.appendChild(notaDoisTd);
    alunoTr.appendChild(mediaTd);

    var tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);
    
});