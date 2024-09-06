function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == "") {
        section.innerHTML = "<h3>Você precisa digitar o nome do atleta ou esporte</h3>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado no array de dados
    for (dado of dados) {
        nome = dado.nome.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
    
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria uma nova div para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (resultados == "") {
        section.innerHTML = "<h3>Nenhum resultado encontrado</h3>";
        return;
    }

    // Atualiza o conteúdo HTML da seção com os resultados
    section.innerHTML = resultados;
}