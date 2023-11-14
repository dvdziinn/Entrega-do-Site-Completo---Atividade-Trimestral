function redirecionarParaOutraPagina() {
    // Substitua "outrapagina.html" pelo caminho da sua outra página
    window.location.href = "indexx.html";
}
function redirecionarParaOutraPagina() {
    // Substitua "outrapagina.html" pelo caminho da sua outra página
    window.location.href = "indexxx.html";
}
function redirecionarParaOutraPagina() {
    // Substitua "outrapagina.html" pelo caminho da sua outra página
    window.location.href = "sobre.html";
}
function redirecionarParaOutraPagina() {
    // Substitua "outrapagina.html" pelo caminho da sua outra página
    window.location.href = "configuraçoes";
}
 
function saveSettings() {
    // Coletar as configurações do usuário do DOM
    const notificacoes = document.getElementById('notificacoes').checked;
    const idioma = document.getElementById('idioma').value;
    const tema = document.getElementById('tema').value;
    const tamanhoFonte = document.getElementById('tamanho-fonte').value;
    const notificacoesSonoras = document.getElementById('notificacoes-sonoras').checked;
    const modoNoturno = document.getElementById('modo-noturno').checked;
    const modoLeitura = document.getElementById('modo-leitura').checked;

    // Enviar as configurações para o servidor ou armazenar localmente
    // Aqui você pode usar AJAX para enviar para um servidor ou armazenar localmente com localStorage, por exemplo

    // Exemplo de armazenamento local:
    const settings = {
        notificacoes,
        idioma,
        tema,
        'tamanho-fonte': tamanhoFonte,
        'notificacoes-sonoras': notificacoesSonoras,
        'modo-noturno': modoNoturno,
        'modo-leitura': modoLeitura,
    };

    // Salvar as configurações no localStorage
    localStorage.setItem('userSettings', JSON.stringify(settings));

    // Exibir as configurações salvas (simulação)
    console.log('Configurações salvas:', settings);
}
document.addEventListener('DOMContentLoaded', function () {
    // Restaurar as configurações salvas do localStorage
    const savedSettingsJSON = localStorage.getItem('userSettings');
    if (savedSettingsJSON) {
        const savedSettings = JSON.parse(savedSettingsJSON);

        // Aplicar as configurações aos elementos do DOM
        for (const key in savedSettings) {
            const input = document.getElementById(key);
            if (input) {
                if (input.type === 'checkbox') {
                    input.checked = savedSettings[key];
                } else {
                    input.value = savedSettings[key];
                }
            }
        }
    }
});
