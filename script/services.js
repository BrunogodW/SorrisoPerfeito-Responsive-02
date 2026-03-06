const services = [
    {
      icon: "😊",
      title: "Clareamento Dental",
      description: "Recupere o brilho natural do seu sorriso com nossos tratamentos de clareamento."
    }
    ,{
       icon: "🛡️",
      title: "Prevenção",
      description: "Limpezas regulares e check-ups para manter seus dentes sempre saudáveis."
    }
    ,{
       icon: "✨",
      title: "Estética Dental",
      description: "Transforme seu sorriso com facetas, lentes de contato e restaurações."
    }
    ,{
       icon: "🩺",
      title: "Ortodontia",
      description: "Aparelhos e alinhadores invisíveis para corrigir o alinhamento dos dentes."
    }
    ,{
       icon: "👶",
      title: "Odontopediatria",
      description: "Cuidado especializado e carinhoso para a saúde bucal das crianças."
    }
    ,{
       icon: "🦷",
      title: "Implantes Dentários",
      description: "Recupere a função e a estética com implantes dentários de alta qualidade."
    }
];

const grid = document.getElementById("servicesGrid");

services.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <div class="service-icon">${service.icon}</div>
      <div class="service-content">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </div>
    `;
    grid.appendChild(card);
});

