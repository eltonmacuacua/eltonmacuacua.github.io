let predictionInterval = 20000; // Intervalo padrão de 20 segundos

// Função para atualizar o texto dinâmico
function updateDynamicText() {
  const dynamicText = document.getElementById("dynamicText");
  const possibilities = ["Azul", "Roxo", "Rosa"];
  const randomPossibility =
    possibilities[Math.floor(Math.random() * possibilities.length)];
  let randomText = randomPossibility;

  // Correção: A probabilidade de "Rosa" agora é de 45.87%
  if (randomPossibility === "Rosa" || Math.random() <= 0.4587) {

    //muda hora do proximo rosa
    adicionarItem()

    predictionInterval = 20000; // Intervalo de 20 segundos
  } else if (randomPossibility === "Roxo") {
    predictionInterval = 10000; // Intervalo de 10 segundos
  } else {
    predictionInterval = 5000; // Intervalo de 5 segundos
  }

  dynamicText.textContent = randomText;

  setMarketState();

  mudaCor();

  setTimeout(updateDynamicText, predictionInterval); // Atualiza dinamicamente
}

// Função para definir o "Estado do Mercado" uma vez no início
function setMarketState() {
  const marketState = document.getElementById("marketState");
  const currentTime = new Date().getHours();
  let marketStateText;

  if (currentTime > 15) {
    marketStateText = `${(Math.random() * (90 - 60) + 60).toFixed(2)}%`;
  } else {
    marketStateText = `${(Math.random() * (60 - 40) + 40).toFixed(2)}%`;
  }

  //imprime o a percentagem do grafico
  marketState.textContent = `${marketStateText}`;
}

// Chama a função para definir o "Estado do Mercado" uma vez no início
//setMarketState();

// Inicia a atualização do texto dinâmico
setTimeout(updateDynamicText, predictionInterval);

// Função para atualizar o relógio
function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  //dateElement.textContent = `${day}/${month}/${year}`;
}

// Atualize o relógio a cada segundo
setInterval(updateClock, 1000);

// Chame a função inicialmente para exibir a hora atual
updateClock();










var clickCount = 0;
var horasLista2 = [];

function adicionarItem() {

  var selectNumber = document.getElementById("selectNumber");
  var numRepeticoes = 20;

  var lista1 = 20;
  var lista2 = document.getElementById("lista2");

  lista1.innerHTML = ""; // Limpar lista1
  lista2.innerHTML = ""; // Limpar lista2


  // Ordenar horários de forma crescente para lista2
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
    lista2.innerHTML = "";
    var li = document.createElement("i");
    li.classList.add("pinkbackground");
    li.appendChild(document.createTextNode(horasLista2[k]));
    lista2.appendChild(li);
  }

  var lista2 = document.getElementById("lista2");
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


function gerarHoraLista2(horaAtualCentralizada, minutoAtual, segundoAtual) {
  var hora = horaAtualCentralizada;
  var minuto = Math.floor(Math.random() * (60 - minutoAtual)) + minutoAtual;
  var segundo = Math.floor(Math.random() * 60);

  var horaFormatada = hora < 10 ? "0" + hora : hora;
  var minutoFormatado = minuto < 10 ? "0" + minuto : minuto;
  var segundoFormatado = segundo < 10 ? "0" + segundo : segundo;

  return horaFormatada + ":" + minutoFormatado + ":" + segundoFormatado;
}