const abouts = [
    {
      icon: "🏅",
      title: "Profissionais Qualificados",
      description: "Nossa equipe é formada por especialistas dedicados à saúde do seu sorriso."
    }
    ,{
       icon: "🤍",
      title: "Atendimento Humanizado",
      description: "Cuidamos de você com carinho, atenção e o máximo de conforto."
    }
    ,{
       icon: "🕒",
      title: "Horários Flexíveis",
      description: "Atendemos de segunda a sábado para melhor atender sua rotina."
    }
];

const gridA = document.getElementById("aboutGrid");

abouts.forEach(about => {
    const cardA = document.createElement("div");
    cardA.className = "about-card";
    cardA.innerHTML = `
      <div class="about-icon">${about.icon}</div>
      <div class="about-content">
        <h3>${about.title}</h3> 
        <p>${about.description}</p>
      </div>
    `;
    gridA.appendChild(cardA);
});

