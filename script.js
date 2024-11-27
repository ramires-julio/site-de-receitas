document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os links das receitas em destaque e outras receitas
    const recipeLinks = document.querySelectorAll(".destaque-container .card a, .outras-receitas .card-horizontal a");

    recipeLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link
            const url = link.getAttribute("href"); // Pega o URL do link

            // Carrega a página da receita no próprio documento
            window.location.href = url;
        });
    });
});
