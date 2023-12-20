// Verificar se os dados do usuário estão na sessionStorage
const userId = sessionStorage.getItem("user_id");
const userNome = sessionStorage.getItem("user_nome");

if (userId && userNome) {
  console.log("Usuário logado:", userId, userNome);
} else {
  // Redirecionar para a página de login se os dados não estiverem presentes
  window.location.href = "../index.html";
}
