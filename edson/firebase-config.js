// Configuração do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDjq-pq8mG4-5RLPwgtpux7Rgo-hWObjQs",
    authDomain: "edson-app-4defb.firebaseapp.com",
    projectId: "edson-app-4defb",
    storageBucket: "edson-app-4defb.appspot.com",
    messagingSenderId: "117709245318",
    appId: "1:117709245318:web:31e6e546347742554a7a07",
    measurementId: "G-GH3QW8K2YX"
};

// Inicializar o Firebase
firebase.initializeApp(firebaseConfig);

// Obter instâncias
var auth = firebase.auth();
var firestore = firebase.firestore();
