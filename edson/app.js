
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


var auth = firebase.auth();
var firestore = firebase.firestore();

// Função para registrar um novo usuário
var registerUser = async function(nome, email, senha, telefone, endereco, tipoDeficiencia) {
    try {
        var userCredential = await auth.createUserWithEmailAndPassword(email, senha);
        var user = userCredential.user;

        // Definir o nome do usuário no perfil (displayName)
        await user.updateProfile({
            displayName: nome, 
            email: email,
            telefone: telefone,
            endereco: endereco,
            tipo_deficiencia: tipoDeficiencia

        });

        var userRef = firestore.collection('usuarios').doc(user.uid);
        await userRef.set({
            id: user.uid,
            nome_completo: nome,
            tipo_deficiencia: tipoDeficiencia,
            email: email,
            telefone: telefone,
            endereco: endereco
        });

        console.log("Usuário registrado com sucesso!");
        alert("Usuário registrado com sucesso!");

        window.location.href = "main.html";
    } catch (error) {
        console.error("Erro ao registrar usuário:", error.message);
        alert("Erro ao registrar usuário. Tente novamente.");
    }
};


var signupForm = document.getElementById('signup-form');

if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var nome = signupForm['nome'].value;
        var email = signupForm['email'].value;
        var senha = signupForm['password'].value;
        var telefone = signupForm['telefone'].value;
        var endereco = signupForm['endereco'].value;
        var tipoDeficiencia = signupForm['tipo-deficiencia'].value;

        if (tipoDeficiencia === "") {
            alert("Por favor, selecione um tipo de deficiência.");
            return;
        }

        registerUser(nome, email, senha, telefone, endereco, tipoDeficiencia);
    });
}

// Função para realizar o login do usuário
var loginUser = async function(email, senha) {
    try {        
        var userCredential = await auth.signInWithEmailAndPassword(email, senha);
        var user = userCredential.user;

        console.log("Usuário autenticado com sucesso:", user.uid);        
        window.location.href = "main.html";
    } catch (error) {
        console.error("Erro ao autenticar usuário:", error.message);        
        alert("Erro ao autenticar. Verifique seu email e senha.");
    }
};

var loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var email = loginForm['email'].value;
        var senha = loginForm['password'].value;
        
        loginUser(email, senha);
    });
}

// Função para realizar o logout do usuário
var logoutUser = function() {
    auth.signOut().then(function() {
        console.log("Usuário desconectado com sucesso.");
        window.location.href = "index.html";
    }).catch(function(error) {
        console.error("Erro ao desconectar usuário:", error);
        alert("Erro ao fazer logout. Tente novamente.");
    });
};

var logoutLink = document.getElementById('logout-link');

if (logoutLink) {
    logoutLink.addEventListener('click', function(e) {
        e.preventDefault();
        logoutUser();
    });
}