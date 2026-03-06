# 🦷 Sorriso Perfeito

> Site institucional de clínica odontológica com design responsivo, dark mode animado e integração com APIs externas.

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Como Executar](#como-executar)
- [Integrações e APIs](#integrações-e-apis)
- [Scripts JavaScript](#scripts-javascript)
- [Responsividade](#responsividade)
- [Dark Mode](#dark-mode)
- [Configurações Necessárias](#configurações-necessárias)

---

## Sobre o Projeto

O **Sorriso Perfeito** é um site institucional desenvolvido para uma clínica odontológica fictícia localizada em Sapucaia do Sul, RS. O projeto foi criado com **HTML, CSS e JavaScript puros** (sem frameworks), focando em boas práticas de desenvolvimento front-end, responsividade e integração com serviços externos.

O site permite que pacientes conheçam os serviços da clínica, leiam depoimentos, visualizem a localização no mapa, consultem o clima da cidade e entrem em contato através de um formulário funcional.

---

## Funcionalidades

- **Hero section** com apresentação da clínica e botão de agendamento com scroll suave
- **Seção de serviços** renderizada dinamicamente via JavaScript
- **Seção "Sobre Nós"** com cards de diferenciais da clínica
- **Depoimentos** de pacientes com foto, nome e avaliação em estrelas
- **Mapa interativo** do Google Maps com a localização da clínica
- **Widget de clima** exibindo temperatura e ícone do tempo em tempo real (OpenWeatherMap)
- **Formulário de contato** integrado ao EmailJS para envio de e-mails
- **Preenchimento automático de endereço** a partir do CEP via API ViaCEP
- **Dark Mode** com transição suave e animação no botão de alternância
- **Botão "Voltar ao Topo"** que aparece ao rolar a página
- **Navegação com scroll suave** por âncoras
- **Design totalmente responsivo** para mobile, tablet e desktop

---

## Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura e semântica do site |
| CSS3 | Estilização, layout (Flexbox/Grid), animações e responsividade |
| JavaScript (ES6+) | Lógica, manipulação do DOM e integrações |
| [EmailJS](https://www.emailjs.com/) | Envio de e-mails pelo formulário de contato |
| [ViaCEP](https://viacep.com.br/) | Preenchimento automático de endereço por CEP |
| [OpenWeatherMap](https://openweathermap.org/api) | Exibição de temperatura e clima em tempo real |
| [Google Maps Embed](https://developers.google.com/maps/documentation/embed/get-started) | Mapa interativo com localização da clínica |
| localStorage | Persistência da preferência de tema (light/dark) entre sessões |

---

## Estrutura de Arquivos

```
SorrisoPerfeito/
│
├── index.html                  # Página principal (estrutura HTML completa)
│
├── styles/
│   └── style.css               # Estilos globais, componentes, dark mode e media queries
│
├── pwabuilder-sw.js
│
├── manifest.json
│
├── script/
│   ├── main.js                 # Scroll suave, navegação e botão "voltar ao topo"
│   ├── services.js             # Renderização dinâmica dos cards de serviços
│   ├── about.js                # Renderização dinâmica dos cards "Sobre Nós"
│   ├── avaliacao.js            # Renderização dinâmica dos cards de depoimentos
│   ├── darkmode.js             # Lógica do dark mode com animação e persistência
│   ├── viaCEP.js               # Integração com a API ViaCEP para busca de endereço
│   ├── temperaturaAPI.js       # Integração com a API OpenWeatherMap
│   └── email.js                # Integração com EmailJS para envio do formulário
│
└── assets/
    └── img/
        ├── logoIcon.png        # Ícone do logotipo
        ├── mulherFeliz.png     # Imagem do hero section
        ├── Soares.png          # Foto do depoente Bruno Soares
        ├── Harthmann.jpeg      # Foto do depoente Vitor Harthmann
        ├── Gusang.png          # Foto do depoente Jacinto Pinto
        └── GusangC.png         # Variação de imagem
```

---

## Como Executar

O projeto é 100% front-end e não requer instalação de dependências ou servidor back-end.

**1. Clone ou baixe o repositório:**

```bash
git clone https://github.com/seu-usuario/sorriso-perfeito.git
```

**2. Abra o arquivo principal no navegador:**

```bash
# Opção 1 — direto pelo sistema operacional
Abra o arquivo index.html com um duplo clique

# Opção 2 — usando Live Server (recomendado para desenvolvimento)
# Instale a extensão Live Server no VS Code e clique em "Go Live"

# Opção 3 — usando Python
python -m http.server 8000
# Acesse http://localhost:8000 no navegador
```

> ⚠️ Algumas APIs (como OpenWeatherMap) podem não funcionar em `file://`. Recomenda-se o uso do Live Server ou qualquer outro servidor local.

---

## Integrações e APIs

### 📩 EmailJS — Formulário de Contato

O formulário de contato usa o [EmailJS](https://www.emailjs.com/) para enviar e-mails sem back-end. Ao submeter o formulário, o EmailJS envia um e-mail diretamente para o endereço configurado no painel.

**Arquivo:** `script/email.js`

```js
emailjs.init('SUA_PUBLIC_KEY');

emailjs.sendForm('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', e.target)
```

**Campos enviados pelo formulário:**
- Nome
- Telefone
- E-mail
- CEP
- Endereço (preenchido automaticamente)
- Mensagem

---

### 📮 ViaCEP — Preenchimento Automático de Endereço

Ao digitar o CEP no formulário e sair do campo (evento `blur`), o sistema consulta automaticamente a API pública [ViaCEP](https://viacep.com.br/) e preenche o campo de endereço com logradouro, bairro, cidade e estado.

**Arquivo:** `script/viaCEP.js`

```js
const url = `https://viacep.com.br/ws/${cep}/json/`;
```

O campo de endereço é `readonly` — o usuário não precisa digitá-lo manualmente. Se o CEP for inválido ou não encontrado, o campo é limpo e um alerta é exibido.

---

### 🌤️ OpenWeatherMap — Widget de Clima

A seção de contato exibe a temperatura atual e um ícone do tempo da cidade da clínica (Sapucaia do Sul), consultando a API da [OpenWeatherMap](https://openweathermap.org/api) em tempo real.

**Arquivo:** `script/temperaturaAPI.js`

```js
const api = `http://api.openweathermap.org/data/2.5/weather?q=sapucaia&appid=SUA_API_KEY&units=metric`;
```

Os dados exibidos são temperatura em graus Celsius e o ícone representativo do clima atual.

---

### 🗺️ Google Maps Embed

Um `<iframe>` do Google Maps é embutido diretamente no HTML para exibir a localização da clínica. Não exige chave de API para uso básico de embed.

---

## Scripts JavaScript

### `main.js`
Controla o comportamento de navegação geral do site:
- Exibe o botão "Voltar ao Topo" quando o usuário rola mais de 300px
- Implementa scroll suave ao clicar nos links da navbar (`#services`, `#about`, `#avaliacao`, `#contact`)
- O botão "Agende uma consulta" da hero section também usa scroll suave para a seção de contato

### `services.js`
Contém o array de serviços e renderiza dinamicamente os cards na seção **Nossos Serviços**. Para adicionar ou remover um serviço, basta editar o array `services`:

```js
const services = [
  { icon: "😊", title: "Clareamento Dental", description: "..." },
  { icon: "🛡️", title: "Prevenção", description: "..." },
  // ...
];
```

Serviços disponíveis: Clareamento Dental, Prevenção, Estética Dental, Ortodontia, Odontopediatria e Implantes Dentários.

### `about.js`
Funciona da mesma forma que `services.js`, mas para a seção **Sobre Nós**. O array `abouts` contém os diferenciais da clínica (profissionais qualificados, atendimento humanizado e horários flexíveis).

### `avaliacao.js`
Renderiza os cards de depoimentos de pacientes. Cada objeto no array `avaliacoes` contém estrelas, nome do autor, texto do depoimento e caminho para a foto do paciente.

### `darkmode.js`
Gerencia a alternância entre o tema claro e o escuro:
- Salva a preferência do usuário no `localStorage`, mantendo o tema escolhido entre sessões
- Ao clicar no botão 🌙/☀️, uma animação de rotação (180°) é executada no ícone antes de alternar o tema
- A classe `dark` é adicionada ao `<body>`, ativando todas as variáveis CSS do modo escuro

### `viaCEP.js`
Escuta o evento `blur` no campo de CEP. Quando o usuário preenche 8 ou mais dígitos e sai do campo, faz uma requisição `fetch` à API ViaCEP e preenche automaticamente o campo de endereço no formato: `Logradouro, Bairro, Cidade - UF`.

### `temperaturaAPI.js`
Faz uma requisição `fetch` à API OpenWeatherMap ao carregar a página e exibe temperatura e ícone do tempo no widget da seção de contato.

### `email.js`
Inicializa o EmailJS com a chave pública e captura o evento de submit do formulário. Em caso de sucesso, exibe um alerta e limpa todos os campos. Em caso de erro, exibe o erro no console e notifica o usuário.

---

## Responsividade

O site é totalmente responsivo com três breakpoints definidos em `style.css`:

| Breakpoint | Largura | Ajustes Principais |
|---|---|---|
| **Desktop** | > 1024px | Layout padrão em duas colunas, grid de serviços 2x3 |
| **Tablet** | ≤ 1024px | Grid de serviços em coluna única, cards de avaliação empilhados |
| **Mobile** | ≤ 768px | Header em coluna, hero com imagem acima do texto, navegação centralizada |
| **Mobile pequeno** | ≤ 480px | Ajustes finos de fontes e espaçamentos para telas menores |

Principais adaptações no mobile:
- O header empilha logo e navegação verticalmente
- A hero section inverte a ordem (imagem antes do texto) e centraliza o conteúdo
- Todos os grids passam para uma única coluna
- O iframe do Google Maps é redimensionado para 90% da largura da tela
- O formulário ocupa 90% da largura disponível

---

## Dark Mode

O dark mode é implementado via **CSS Custom Properties (variáveis)** e alternância de classe no `<body>`.

**Como funciona:**

1. O CSS define as variáveis de cor padrão em `:root` (tema claro)
2. O seletor `body.dark` sobrescreve essas variáveis com as cores escuras
3. A transição entre temas é suave graças à propriedade `transition` aplicada globalmente no seletor `*`:

```css
* {
  transition:
    background-color 0.45s ease,
    color 0.45s ease,
    border-color 0.45s ease,
    box-shadow 0.45s ease;
}
```

4. O botão executa uma animação de rotação ao ser clicado, dando feedback visual ao usuário
5. A preferência é salva no `localStorage` com a chave `theme`

---

## Configurações Necessárias

Para que todas as funcionalidades do site funcionem corretamente em produção, é necessário substituir as chaves de API pelos seus próprios valores:

**1. EmailJS** — em `script/email.js`:
```js
emailjs.init('SUA_PUBLIC_KEY');
emailjs.sendForm('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', e.target);
```
Crie uma conta em [emailjs.com](https://www.emailjs.com/), configure um serviço de e-mail e um template, e substitua os valores acima.

**2. OpenWeatherMap** — em `script/temperaturaAPI.js`:
```js
const api = `...&appid=SUA_API_KEY&...`;
```
Crie uma conta em [openweathermap.org](https://openweathermap.org/api) e substitua a chave `appid`. Para alterar a cidade, mude o valor da variável `cidade`.

> ⚠️ Nunca exponha chaves de API sensíveis em repositórios públicos. Considere usar variáveis de ambiente ou um back-end para protegê-las em produção.

---

## 👨‍💻 Autores

Desenvolvido como projeto de aprendizado de desenvolvimento web front-end.

---

*© 2026 Sorriso Perfeito. Todos os direitos reservados.*
