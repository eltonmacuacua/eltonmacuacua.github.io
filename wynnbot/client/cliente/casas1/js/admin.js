const user= [];
user.uid= 10;
user.saldo_saque = 200;

if (user) {
  // O usuário está conectado
  const uid = user.uid;

} else {
  // O usuário não está conectado
  // Redirecionar para a página de login
  window.location.href = 'login.html';
  }
