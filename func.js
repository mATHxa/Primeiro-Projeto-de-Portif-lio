// Seleciona todos os botões de aba com a classe 'tab-btn'
const tabs = document.querySelectorAll('.tab-btn');

// Adiciona um ouvinte de evento de clique para cada botão de aba
tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

// Função executada quando uma aba é clicada
const tabClicked = (tab) => {
    // Remove a classe 'active' de todos os botões de aba
    tabs.forEach(content => content.classList.remove('active'));
    
    // Adiciona a classe 'active' ao botão de aba clicado
    tab.classList.add('active');
    
    // Seleciona todos os conteúdos das abas
    const contents = document.querySelectorAll('.content');
    
    // Remove a classe 'show' de todos os conteúdos
    contents.forEach(content => content.classList.remove('show'));

    // Obtém o ID do conteúdo relacionado ao botão de aba clicado
    const contentId = tab.getAttribute('content-id');
    
    // Seleciona o conteúdo correspondente ao ID obtido
    const content = document.getElementById(contentId);
    
    // Adiciona a classe 'show' ao conteúdo correspondente para exibi-lo
    content.classList.add('show');
}