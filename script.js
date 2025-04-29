document.addEventListener("DOMContentLoaded", () => {
    // Função para alternar exibição das licenças
    function mostrarLicencas(event) {
        const opcoes = event.target.nextElementSibling; // Localiza o próximo elemento (license-options)
        if (opcoes) {
            opcoes.classList.toggle("hidden"); // Alterna visibilidade (mostra/esconde)
        } else {
            console.error("Elemento license-options não encontrado. Verifique o HTML.");
        }
    }

    // Função para exibir detalhes da licença
    function mostrarDetalhes(tipo) {
        const detalhes = document.querySelector(".license-details");
        const infoLicenca = {
            "exclusive": `<p>📀EXCLUSIVE📀<br>📌 Período de uso: Ilimitado<br>📌 Distribuições ilimitadas<br>📌 Streaming de áudio ilimitado<br>📌 Permissões para videoclipe, rádio e televisão</p>
                          <button class='buy-button' onclick='comprarLicenca("exclusive")'>Comprar Exclusive</button>`,
            "platinum": `<p>🥈PLATINUM🥈<br>📌 Período de uso: 4 anos<br>📌 200k em distribuições<br>📌 200k em streamings de áudio<br>📌 Permitido apenas videoclipe</p>
                          <button class='buy-button' onclick='comprarLicenca("platinum")'>Comprar Platinum</button>`,
            "silver": `<p>🥉SILVER🥉<br>📌 Período de uso: 3 anos<br>📌 100k em distribuições e streamings<br>🚫 Sem permissões para clipes ou rádio</p>
                          <button class='buy-button' onclick='comprarLicenca("silver")'>Comprar Silver</button>`
        };
    
        // Se os detalhes estiverem visíveis, esconda-os; caso contrário, exiba-os
        if (detalhes && !detalhes.classList.contains("hidden")) {
            detalhes.classList.add("hidden");
            detalhes.innerHTML = ""; // Limpa o conteúdo para evitar erros
        } else if (detalhes) {
            detalhes.innerHTML = infoLicenca[tipo]; // Insere os detalhes da licença
            detalhes.classList.remove("hidden");
        } else {
            console.error("Elemento license-details não encontrado. Verifique o HTML.");
        }
    }

    // Função para simular compra da licença
    function comprarLicenca(tipo) {
        alert("Você selecionou a licença " + tipo + ". Agora será direcionado para a página de pagamento!");
        // Aqui você pode incluir um redirecionamento para sistema de pagamento.
    }

    // Configura os botões para mostrar licenças
    const botoesLicencas = document.querySelectorAll(".price-button");
    botoesLicencas.forEach(botao => {
        botao.addEventListener("click", mostrarLicencas);
    });

    // Configura os botões para tipos de licenças
    const botoesTipos = document.querySelectorAll(".license-options button");
    botoesTipos.forEach(botao => {
        const tipo = botao.textContent.toLowerCase(); // Obtém o tipo da licença
        botao.addEventListener("click", () => mostrarDetalhes(tipo));
    });

    console.log("Eventos configurados para botões de licenças e detalhes.");

    // Controle de áudio: permite apenas um áudio ativo de cada vez
    document.querySelectorAll(".audio-player").forEach(audio => {
        audio.addEventListener("play", () => {
            document.querySelectorAll(".audio-player").forEach(outroAudio => {
                if (outroAudio !== audio) {
                    outroAudio.pause();
                    outroAudio.currentTime = 0; // Reinicia o áudio anterior
                }
            });
        });
    });

    // Carrossel de imagens
    let slideIndex = 0;
    const slides = document.querySelectorAll(".carrousel-item");
    const carrousel = document.querySelector(".carrousel");
    const dots = document.querySelectorAll(".dot");

    if (slides.length === 0 || !carrousel) {
        console.error("Slides ou carrossel não encontrados. Verifique o HTML.");
        return;
    }

    function mostrarSlide(index) {
        if (index >= slides.length) slideIndex = 0;
        if (index < 0) slideIndex = slides.length - 1;

        carrousel.style.transform = `translateX(${-slideIndex * 100}%)`;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[slideIndex].classList.add("active");
    }

    function mudarSlide(n) {
        slideIndex += n;
        mostrarSlide(slideIndex);
    }

    function definirSlide(n) {
        slideIndex = n;
        mostrarSlide(slideIndex);
    }

    function avancarSlideAutomatico() {
        slideIndex++;
        mostrarSlide(slideIndex);
    }

    // Inicializa o carrossel
    mostrarSlide(slideIndex);
    setInterval(avancarSlideAutomatico, 10000);

    // Configura botões de navegação do carrossel
    document.querySelector(".prev").addEventListener("click", () => mudarSlide(-1));
    document.querySelector(".next").addEventListener("click", () => mudarSlide(1));

    // Configura navegação manual via dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => definirSlide(index));
    });

    console.log("Carrossel configurado com sucesso.");

    //Beats Recentes
    let beatIndex = 0;

function mudarBeatSlide(n) {
    const beats = document.querySelectorAll(".recent-beat-item");
    const carrousel = document.querySelector(".recent-carrousel");
    const totalBeats = beats.length;

    // Atualiza o índice do slide
    beatIndex += n;
    if (beatIndex >= totalBeats) beatIndex = 0; // Volta ao início
    if (beatIndex < 0) beatIndex = totalBeats - 1; // Vai para o final

    // Move o carrossel
    carrousel.style.transform = `translateX(${-beatIndex * 260}px)`; // Ajuste de largura
}

});

document.addEventListener("DOMContentLoaded", () => {
    const beatsContainer = document.getElementById("beats-container");
    const searchBar = document.getElementById("search-bar");

    // Função para filtrar por gênero
    function filtrarPorGenero(genero) {
        const beats = document.querySelectorAll(".beat-box");
        beats.forEach(beat => {
            // Mostra ou esconde os beats com base no gênero
            if (genero === "todos" || beat.dataset.genero === genero) {
                beat.style.display = "block";
            } else {
                beat.style.display = "none";
            }
        });
    }

    // Função para pesquisar beats
    searchBar.addEventListener("input", () => {
        const searchTerm = searchBar.value.toLowerCase();
        const beats = document.querySelectorAll(".beat-box");

        beats.forEach(beat => {
            const beatName = beat.querySelector("h2").textContent.toLowerCase();
            if (beatName.includes(searchTerm)) {
                beat.style.display = "block";
            } else {
                beat.style.display = "none";
            }
        });
    });

    // Exemplo de beats com gênero
    beatsContainer.innerHTML = `
        <div class="beat-box" data-genero="hiphop">
            <h2>Beat Hip Hop</h2>
        </div>
        <div class="beat-box" data-genero="trap">
            <h2>Beat Trap</h2>
        </div>
        <div class="beat-box" data-genero="lofi">
            <h2>Beat Lo-Fi</h2>
        </div>
        <div class="beat-box" data-genero="drill">
            <h2>Beat Drill</h2>
        </div>
        <div class="beat-box" data-genero="pop">
            <h2>Beat Pop</h2>
        </div>
    `;
});