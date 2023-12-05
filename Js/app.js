    const divImagemPrincipal = document.querySelector("#imagem-principal");
    const imagemPrincipal = divImagemPrincipal.querySelector("img");
    const textoAlternativo = divImagemPrincipal.querySelector(".texto-alternativo");
    const btnProximo = divImagemPrincipal.querySelector(".proximo");
    const btnAnterior = divImagemPrincipal.querySelector(".anterior");
    const todasImagens = document.querySelectorAll("#imagens img");
    let idImagemAtiva = 0;

    const proximaImagem = function () {
        idImagemAtiva++;
        if (idImagemAtiva >= todasImagens.length) idImagemAtiva = 0;
        selecionarImagem();
    };

    const imagemAnterior = function () {
        idImagemAtiva--;
        if (idImagemAtiva < 0) {
            idImagemAtiva = todasImagens.length - 1;
        }
        selecionarImagem();
    };

    const selecionarImagem = function () {
        todasImagens.forEach(function (imagem) {
            imagem.classList.remove('selecionada');
        });
        todasImagens[idImagemAtiva].classList.add('selecionada');

        imagemPrincipal.src = todasImagens[idImagemAtiva].src;
        imagemPrincipal.alt = todasImagens[idImagemAtiva].alt;

        textoAlternativo.textContent = todasImagens[idImagemAtiva].alt;
    };

    btnProximo.addEventListener('click', proximaImagem);
    btnAnterior.addEventListener('click', imagemAnterior);

    todasImagens.forEach(function (imagem, numeroImagem) {
        imagem.addEventListener("click", function () {
            idImagemAtiva = numeroImagem;
            imagemPrincipal.src = imagem.src;
            imagemPrincipal.alt = imagem.alt;
            textoAlternativo.textContent = imagem.alt;
            selecionarImagem();
        });
    });
    
   
