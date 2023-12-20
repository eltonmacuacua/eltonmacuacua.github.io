const nome = "Elton Kraker";

// Verifique se o nome do usuário está definido
if (nome) {
  // Nome do usuário disponível, exiba o conteúdo
  document.getElementById("userName").textContent = nome;
  document.getElementById("contentContainer").style.display = "block";
} else {
  // Nome do usuário não disponível, oculte o conteúdo
  document.getElementById("contentContainer").style.display = "none";
} 
