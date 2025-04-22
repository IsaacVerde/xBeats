function mostrarLicencas() {
    let opcoes = event.target.nextElementSibling;
    opcoes.classList.toggle("hidden");
}

function mostrarDetalhes(tipo) {
    let detalhes = event.target.parentElement.nextElementSibling;

    if (detalhes.classList.contains("hidden")) {
        let infoLicenca = {
            "exclusive": `<p>📀EXCLUSIVE📀<br>📌 Período de uso: Ilimitado<br>📌 Distribuições ilimitadas<br>📌 Streaming de áudio ilimitado<br>📌 Permissões para videoclipe, rádio e televisão</p>
                          <button class='buy-button' onclick='comprarLicenca("exclusive")'>Comprar Exclusive</button>`,
            "platinum": `<p>🥈PLATINUM🥈<br>📌 Período de uso: 4 anos<br>📌 200k em distribuições<br>📌 200k em streamings de áudio<br>📌 Permitido apenas videoclipe</p>
                          <button class='buy-button' onclick='comprarLicenca("platinum")'>Comprar Platinum</button>`,
            "silver": `<p>🥉SILVER🥉<br>📌 Período de uso: 3 anos<br>📌 100k em distribuições e streamings<br>🚫 Sem permissões para clipes ou rádio</p>
                          <button class='buy-button' onclick='comprarLicenca("silver")'>Comprar Silver</button>`
        };

        detalhes.innerHTML = infoLicenca[tipo];
        detalhes.classList.remove("hidden");
    } else {
        detalhes.classList.add("hidden");
        detalhes.innerHTML = ""; // Limpa o conteúdo para evitar bugs
    }
}

function comprarLicenca(tipo) {
    alert("Você selecionou a licença " + tipo + ". Agora será direcionado para a página de pagamento!");
    // Aqui, você pode adicionar uma funcionalidade para redirecionar para um sistema de pagamento.
}

// Alternar modo escuro
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Variável para armazenar o áudio que está tocando no momento
let audioAtual = null; // Variável para armazenar o áudio atualmente tocando

document.querySelectorAll(".audio-player").forEach(audio => {
    audio.addEventListener("play", function() {
        // Pausa todos os outros áudios antes de iniciar um novo
        document.querySelectorAll(".audio-player").forEach(outroAudio => {
            if (outroAudio !== audio) {
                outroAudio.pause();
                outroAudio.currentTime = 0; // Reinicia o áudio anterior
            }
        });
    });
});