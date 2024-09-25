const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';
async function buscarInformacoes(){
async function vizualizarInformacoes()
    const res = await fetch(url);
    const dados = re.json();
    console.log(dados);
}

buscarInformacoes();
