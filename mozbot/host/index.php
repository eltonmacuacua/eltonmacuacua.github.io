
<?php
// Credenciais do banco de dados
$servidor = 'db4free.net';
$usuario = 'wynnbot_perceu';
$senha = 'wynnbot_perceu';
$banco_de_dados = 'Celiaalfredo@123';

// Conectar ao banco de dados
$conexao = new mysqli($servidor, $usuario, $senha, $banco_de_dados);

// Verificar a conexão
if ($conexao->connect_error) {
    die("Erro na conexão: " . $conexao->connect_error);
}

echo "Conexão bem-sucedida!";

// Agora você pode realizar operações no banco de dados...

// Fechar a conexão quando não for mais necessária
$conexao->close();
?>
