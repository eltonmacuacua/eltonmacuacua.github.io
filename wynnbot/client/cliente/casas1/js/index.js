var clickCount = 0;
var horasLista2 = [];
var ultimoClique = 0;

function adicionarItem() {
  var agora = new Date().getTime();
  var intervaloEntreCliques = agora - ultimoClique;

  if (intervaloEntreCliques < 33460) {
  //if (intervaloEntreCliques < 0) {
    // Se o intervalo entre cliques for inferior a 33 segundos, ignore
    return;
  }

  var selectNumber = document.getElementById("selectNumber");
  var numRepeticoes = parseInt(selectNumber.value);

  var lista1 = document.getElementById("lista1");
  var lista2 = document.getElementById("lista2");

  lista1.innerHTML = ""; // Limpar lista1
  lista2.innerHTML = ""; // Limpar lista2

  var horarios = [];

  if (isNaN(numRepeticoes) || numRepeticoes === 0) {
    // Gerar 40 itens aleatórios com cores aleatórias
    for (var i = 0; i < 40; i++) {
      var hora = gerarHoraAleatoria();
      var cor = gerarCorAleatoria();

      var li = document.createElement("li");
      li.classList.add("custom");
      li.style.backgroundColor = cor;
      li.appendChild(document.createTextNode(hora));
      lista1.appendChild(li);

      horarios.push(hora);
    }
  } else {
    // Gerar itens com base no valor fornecido pelo usuário
    for (var j = 0; j < numRepeticoes; j++) {
      var hora = gerarHoraAleatoria();
      var cor = gerarCorAleatoria();

      var li = document.createElement("li");
      li.classList.add("custom");
      li.style.backgroundColor = cor;
      li.appendChild(document.createTextNode(hora));
      lista1.appendChild(li);

      horarios.push(hora);
    }
  }

  // Ordenar horários de forma crescente para lista2
  horarios.sort();
  var horaAtual = new Date();
  var horaAtualCentralizada = horaAtual.getHours();
  var minutoAtual = horaAtual.getMinutes();
  var segundoAtual = horaAtual.getSeconds();

  if (clickCount % 40 === 0) {
    var novaHoraLista2 = gerarHoraLista2(
      horaAtualCentralizada,
      minutoAtual,
      segundoAtual
    );

    if (
      horaMaiorOuIgual(
        horaAtualCentralizada,
        minutoAtual,
        segundoAtual,
        novaHoraLista2
      )
    ) {
      horasLista2.push(novaHoraLista2);
    }
  }

  // Adicionar horas ordenadas à lista2
  for (var k = 0; k < horasLista2.length; k++) {
    var li = document.createElement("li");
    li.classList.add("pinkbackground");
    li.appendChild(document.createTextNode(horasLista2[k]));
    lista2.appendChild(li);
  }

  var lista2 = document.getElementById("lista2");

  ultimoClique = agora;
}

function horaMaiorOuIgual(horaAtual, minutoAtual, segundoAtual, hora) {
  var horaSeparada = hora.split(":");
  var horaLista2 = parseInt(horaSeparada[0]);
  var minutoLista2 = parseInt(horaSeparada[1]);
  var segundoLista2 = parseInt(horaSeparada[2]);

  return (
    horaLista2 > horaAtual ||
    (horaLista2 === horaAtual && minutoLista2 > minutoAtual)
  );
}

function gerarHoraAleatoria() {
  var hora = Math.floor(Math.random() * 24);
  var minuto = Math.floor(Math.random() * 60);
  var segundo = Math.floor(Math.random() * 60);

  hora = hora < 10 ? "0" + hora : hora;
  minuto = minuto < 10 ? "0" + minuto : minuto;
  segundo = segundo < 10 ? "0" + segundo : segundo;

  return hora + ":" + minuto + ":" + segundo;
}

function gerarCorAleatoria() {
  var cores = ["#B00AB2", "#28A7FD", "#8E40F5"];
  var corAleatoria = cores[Math.floor(Math.random() * cores.length)];

  return corAleatoria;
}

function gerarHoraLista2(horaAtualCentralizada, minutoAtual, segundoAtual) {
  var hora = horaAtualCentralizada;
  var minuto = Math.floor(Math.random() * (60 - minutoAtual)) + minutoAtual;
  var segundo = Math.floor(Math.random() * 60);

  var horaFormatada = hora < 10 ? "0" + hora : hora;
  var minutoFormatado = minuto < 10 ? "0" + minuto : minuto;
  var segundoFormatado = segundo < 10 ? "0" + segundo : segundo;

  return horaFormatada + ":" + minutoFormatado + ":" + segundoFormatado;
}

var btnAdicionar = document.getElementById("btnAdicionar");
btnAdicionar.addEventListener("click", adicionarItem);
