function exibirDataHora() {
    var dataAtual = new Date();
    var horaAtual = dataAtual.getHours() + ":" + dataAtual.getMinutes() + ":" + dataAtual.getSeconds();
    var diaSemana = dataAtual.toLocaleDateString(undefined, { weekday: 'long' });
    var umaSemanaAtras = new Date(dataAtual.getTime() - 7 * 24 * 60 * 60 * 1000);

    document.getElementById("hora-atual").textContent = horaAtual;
    document.getElementById("data-atual").textContent = dataAtual.toLocaleDateString();
    document.getElementById("uma-semana-atras").textContent = umaSemanaAtras.toLocaleDateString();
    document.getElementById("dia-semana").textContent = diaSemana;
}

// Update the time every second
setInterval(exibirDataHora, 1000);

// Initial display
exibirDataHora();