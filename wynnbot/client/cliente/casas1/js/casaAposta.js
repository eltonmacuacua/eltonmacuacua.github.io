document.addEventListener('DOMContentLoaded', function () {
    // Função para obter parâmetro da URL
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Obter o valor do parâmetro 'nome' da URL
    var nome = getParameterByName('nome');

    // Exibir o valor obtido na página
    document.getElementById('resultado').innerHTML = nome;
});