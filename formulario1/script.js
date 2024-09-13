// script.js
function submitForm() {
    // Obtenha os dados do formulário
    const branch = document.getElementById('branch').value;
    const date = document.getElementById('date').value;
    const customerNo = document.getElementById('customerNo').value;
    const customerNoDetails = document.getElementById('customerNoDetails').value;
    const accountHolder = document.getElementById('accountHolder').value;
    const usCitizen = document.querySelector('input[name="usCitizen"]:checked')?.value;
    const usTaxResidence = document.querySelector('input[name="usTaxResidence"]:checked')?.value;
    const usTIN = document.getElementById('usTIN').value;
    const address = document.getElementById('address').value;

    // Simular envio para nova página (redirecionar para uma nova página)
    const newPageUrl = 'submitPage.html'; // Altere para o caminho da nova página que você deseja
    window.location.href = newPageUrl + `?branch=${branch}&date=${date}&customerNo=${customerNo}&customerNoDetails=${customerNoDetails}&accountHolder=${accountHolder}&usCitizen=${usCitizen}&usTaxResidence=${usTaxResidence}&usTIN=${usTIN}&address=${address}`;
}