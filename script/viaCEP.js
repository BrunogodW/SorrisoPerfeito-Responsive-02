const campoCep = document.getElementById("CEP");

async function buscarEnderecoPorCep(cep) {
  // Remove caracteres não numéricos do CEP
  const cepLimpo = cep.replace(/\D/g, '');
  const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;

  try {
    // Faz a requisição à API
    const resposta = await fetch(url);
    
    // Converte a resposta para JSON
    const dados = await resposta.json();

    // Verifica se a API retornou um erro (ex: CEP não encontrado)
    if (dados.erro) {
      throw new Error('CEP não encontrado.');
    }

    // Retorna os dados do endereço
    return dados;
  } catch (error) {
    // Trata erros de requisição ou CEP inválido
    console.error('Erro ao buscar CEP:', error.message);
    throw error; // Você pode querer tratar isso na sua interface de usuário
  }
}

campoCep.addEventListener("blur", async () => {
  const cep = campoCep.value;
  
  if (cep.length >= 8) { // Validação básica antes de chamar a API
    try {
      const endereco = await buscarEnderecoPorCep(cep);
      
      // Preenche os campos
      document.getElementById('endereco').value = 
        `${endereco.logradouro}, ${endereco.bairro}, ${endereco.localidade} - ${endereco.uf}`;
      
    } catch (error) {
      alert(error.message); // Exibe o erro definido no seu 'throw new Error'
      campoCep.value = ""; // Limpa o campo se houver erro
    } 
  } else{
        document.getElementById('endereco').value = ""; // Limpa o campo de endereço se o CEP for inválido
    }
});