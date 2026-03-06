const avaliacoes = [
    {
        stars: "⭐⭐⭐⭐⭐",
        author: "Bruno Soares",
        description: "Fiquei muito satisfeito com o atendimento e os resultados. Recomendo a todos!",
        foto:  "assets/img/Soares.png"
    },
    {
        stars: "⭐⭐⭐⭐⭐",
        author: "Vitor Harthmann",
        description: "Atendimento impecável e profissionais muito atenciosos. Perdi o medo de dentista aqui.",
        foto: "assets/img/Harthmann.jpeg"
    },
    {
        stars: "⭐⭐⭐⭐⭐",
        author: "Jacinto Pinto",
        description: "Minha filha adora vir nas consultas. A odontopediatra é muito carinhosa e paciente.",
        foto: "assets/img/Gusang.png"
    }

]

const gridAvaliacoes = document.getElementById("avaliacaoGrid");

avaliacoes.forEach(avaliacao => {
    const cardAvaliacao = document.createElement("div");
    cardAvaliacao.className = "avaliacao-card";
    cardAvaliacao.innerHTML = `
        <div class="avaliacao-stars">${avaliacao.stars}</div>
        <div class="avaliacao-content">
            <p>"${avaliacao.description}"</p>
            
            <div class="avaliacao-foto">
                <img src="${avaliacao.foto || 'assets/img/default-avatar.png'}" alt="Foto de ${avaliacao.author}">
            </div>
            <h3>-${avaliacao.author}</h3>
            
        </div>
    `;
    gridAvaliacoes.appendChild(cardAvaliacao);
}); 