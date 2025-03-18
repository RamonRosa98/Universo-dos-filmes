let cards = document.querySelector(".container-cards");
let todosOsFilmes = document.getElementById("Todos");
let resultado = "";
const generos = document.querySelectorAll(".card-genero");

function exibirFilmesNaTela(filmesParaExibir = filmes){
    let resultado = "";
    for(filme of filmesParaExibir){
        resultado += `
            <div class="card-filme">
                <h2 class="genero">${filme.genero}</h2>
                <img src="${filme.imagem}" class="poster">
                <img ${filme.imagem} >
            </div>
        `
    };
    cards.innerHTML = resultado;
};
exibirFilmesNaTela();

generos.forEach(genero =>{
    genero.addEventListener("click", function(){
        filtrarFilmes(this.value);
    });
});

function filtrarFilmes(generoSelecionado) {
    let filmesFiltrados = filtrarPorCategoria(generoSelecionado);
    exibirFilmesNaTela(filmesFiltrados);
};

function filtrarPorCategoria(genero){
    return filmes.filter(filme => filme.genero.includes(genero));
};

todosOsFilmes.addEventListener("click", function(){
    exibirFilmesNaTela(filmes);
});