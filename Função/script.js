function gerarTexto() {
    const funcao = document.getElementById("funcao").value;
    const militar = document.getElementById("militar").value;
   
        
    
    // Obter a data de emissão automática no formato "DD/MM/AAAA"
    const dataEmissao = new Date();
    const diaEmissao = String(dataEmissao.getDate()).padStart(2, '0');
    const mesEmissao = String(dataEmissao.getMonth() + 1).padStart(2, '0');
    const anoEmissao = dataEmissao.getFullYear();
    const dataEmissaoFormatada = `${diaEmissao}/${mesEmissao}/${anoEmissao}`;


function formatarData(data) {
    const dataObjeto = new Date(data); // Converte a string da data para um objeto Date
    const dia = String(dataObjeto.getDate() + 1).padStart(2, '0'); // Obtém o dia
    const mes = String(dataObjeto.getMonth() + 1).padStart(2, '0'); // Obtém o mês (lembrando que os meses no objeto Date são baseados em zero, então é necessário adicionar 1)
    const ano = dataObjeto.getFullYear(); // Obtém o ano

    return `${dia}/${mes}/${ano}`;
    }
    

    const textoGerado = `O COMANDANTE DO 11º BATALHÃO DE POLÍCIA MILITAR DO ESTADO DA PARAÍBA no exercício de suas competências e com fulcro no art. 134 da Lei Estadual (PB) nº 3.909 de 14 de julho de 1977, que dispõe sobre o “Estatuto dos Policiais Militares do Estado da Paraíba” c/c art. 23, inciso XVII e XLIX, do Regulamento Interno de Serviço Gerais (RISG) do Exército Brasileiro; e em respeito ao que estabelece o art. 5º, § 1º, item 4., do Regulamento de Movimentação para Oficiais e Praças da PMPB, aprovado pelo Decreto Estadual (PB) nº 9.143 de 08 de setembro de 1981 e inciso III do art. 5º da NORMA GERAL DE AÇÃO - NGA Nº 001/2023-GC/11º BPM publicada no Boletim do CPR I nº 0041 de 01/03/2023, RESOLVE: 

DESIGNAR o(s) militar(es) ${militar}, para exercer(em) a função de ${funcao} do 11º BPM.

PUBLIQUE-SE. REGISTRE-SE. CUMPRA-SE. 

Monteiro-PB, ${dataEmissaoFormatada}. 

Saulo TAVARES da Silva – TC QOEM
Comandante do 11º BPM`;  

    const paragrafos = textoGerado.split('\n');
    const textoFormatado = paragrafos.map(paragrafo => `<p style="text-align:justify">${paragrafo}</p>`).join('');
   
    const botaoCopiar = document.getElementById('botaoCopiar');
    
    botaoCopiar.addEventListener('click', () => {
         const elementoTemporario = document.createElement('div');
        elementoTemporario.innerHTML = textoFormatado;
        document.body.appendChild(elementoTemporario);

        const selecao = window.getSelection();
        const intervalo = document.createRange();
        intervalo.selectNodeContents(elementoTemporario);
        selecao.removeAllRanges();
        selecao.addRange(intervalo);

        document.execCommand('copy');
        selecao.removeAllRanges();
        document.body.removeChild(elementoTemporario);

    // Exibe a mensagem de texto copiado
    const mostrarMensagem = (mensagem, tempo) => {
        const mensagemDiv = document.createElement('div');
        mensagemDiv.textContent = mensagem;
        mensagemDiv.style.position = 'fixed';
        mensagemDiv.style.top = '10px';
        mensagemDiv.style.left = '50%';
        mensagemDiv.style.transform = 'translateX(-50%)';
        mensagemDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        mensagemDiv.style.color = '#fff';
        mensagemDiv.style.padding = '10px';
        mensagemDiv.style.borderRadius = '5px';
        mensagemDiv.style.zIndex = '9999';
        mensagemDiv.style.transition = 'opacity 0.3s ease-in-out';

        document.body.appendChild(mensagemDiv);

        setTimeout(() => {
            mensagemDiv.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(mensagemDiv);
            }, 300);
        }, tempo);
    };

    mostrarMensagem('Texto copiado para a área de transferência!', 2000); // Exibe por 2 segundos (2000 milissegundos)

    });

    document.getElementById("textoGerado").innerHTML = textoFormatado;


    const textoGerado2 = `O COMANDANTE DO 11º BATALHÃO DE POLÍCIA MILITAR DO ESTADO DA PARAÍBA no exercício de suas competências e com fulcro no art. 134 da Lei Estadual (PB) nº 3.909 de 14 de julho de 1977, que dispõe sobre o “Estatuto dos Policiais Militares do Estado da Paraíba” c/c art. 23, inciso XVII e XLIX, do Regulamento Interno de Serviço Gerais (RISG) do Exército Brasileiro; e em respeito ao que estabelece o art. 5º, § 1º, item 4., do Regulamento de Movimentação para Oficiais e Praças da PMPB, aprovado pelo Decreto Estadual (PB) nº 9.143 de 08 de setembro de 1981 e inciso III do art. 5º da NORMA GERAL DE AÇÃO - NGA Nº 001/2023-GC/11º BPM publicada no Boletim do CPR I nº 0041 de 01/03/2023, RESOLVE: 

DISPENSAR o(s) militar(es) ${militar} da função de ${funcao} do 11º BPM.

PUBLIQUE-SE. REGISTRE-SE. CUMPRA-SE. 

Monteiro-PB, ${dataEmissaoFormatada}. 

Saulo TAVARES da Silva – TC QOEM
Comandante do 11º BPM`;  

    const paragrafos2 = textoGerado2.split('\n');
    const textoFormatado2 = paragrafos2.map(paragrafo => `<p style="text-align:justify">${paragrafo}</p>`).join('');
   
    const botaoCopiar2 = document.getElementById('botaoCopiar2');
    
    botaoCopiar2.addEventListener('click', () => {
         const elementoTemporario2 = document.createElement('div');
        elementoTemporario2.innerHTML = textoFormatado2;
        document.body.appendChild(elementoTemporario2);

        const selecao2 = window.getSelection();
        const intervalo2 = document.createRange();
        intervalo2.selectNodeContents(elementoTemporario2);
        selecao2.removeAllRanges();
        selecao2.addRange(intervalo2);

        document.execCommand('copy');
        selecao2.removeAllRanges();
        document.body.removeChild(elementoTemporario2);

    // Exibe a mensagem de texto copiado
    const mostrarMensagem2 = (mensagem, tempo) => {
        const mensagemDiv = document.createElement('div');
        mensagemDiv.textContent = mensagem;
        mensagemDiv.style.position = 'fixed';
        mensagemDiv.style.top = '10px';
        mensagemDiv.style.left = '50%';
        mensagemDiv.style.transform = 'translateX(-50%)';
        mensagemDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        mensagemDiv.style.color = '#fff';
        mensagemDiv.style.padding = '10px';
        mensagemDiv.style.borderRadius = '5px';
        mensagemDiv.style.zIndex = '9999';
        mensagemDiv.style.transition = 'opacity 0.3s ease-in-out';

        document.body.appendChild(mensagemDiv);

        setTimeout(() => {
            mensagemDiv.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(mensagemDiv);
            }, 300);
        }, tempo);
    };

    mostrarMensagem2('Texto copiado para a área de transferência!', 2000); // Exibe por 2 segundos (2000 milissegundos)

    });

    document.getElementById("textoGerado2").innerHTML = textoFormatado2;

}


