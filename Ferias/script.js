function mostrarCamposEspeciais() {
    const tipoSelecionado = document.getElementById("tipo").value;
    const exercicios = document.getElementById("exercicios");
    const data = document.getElementById("data");
    const duracao = document.getElementById("duracao");
    const concessao = document.getElementById("biConcessao"); // Corrigido para "biConcessao"
    const sustacao = document.getElementById("biSustacao");

    // Resetando todos os estilos para "none" inicialmente
    exercicios.style.display = "none";
    data.style.display = "none";
    duracao.style.display = "none";
    concessao.style.display = "none";

    // Exibindo os campos específicos com base no tipo selecionado
    if (tipoSelecionado === "Concessão") {
        exercicios.style.display = "block";
        data.style.display = "block";
        duracao.style.display = "block";
    }

    if (tipoSelecionado === "Apresentacão") {
        exercicios.style.display = "block";
        data.style.display = "block";
        duracao.style.display = "block";
        concessao.style.display = "block";
    }

    if (tipoSelecionado === "Sustacão") {
        exercicios.style.display = "block";
        concessao.style.display = "block";
        duracao.style.display = "block";
    }
    
    if (tipoSelecionado === "Sustadas") {
        exercicios.style.display = "block";
        data.style.display = "block";
        duracao.style.display = "block";
        sustacao.style.display = "block";
    }
    
}

function formatarData(data) {
    const dataObjeto = new Date(data); // Converte a string da data para um objeto Date
    const dia = String(dataObjeto.getDate()).padStart(2, '0'); // Obtém o dia
    const mes = String(dataObjeto.getMonth() + 1).padStart(2, '0'); // Obtém o mês (lembrando que os meses no objeto Date são baseados em zero, então é necessário adicionar 1)
    const ano = dataObjeto.getFullYear(); // Obtém o ano

    return `${dia}/${mes}/${ano}`;
    }

function calculateDates() {
    const startDateInput = document.getElementById("start-date");
    const durationInput = document.getElementById("duration");
    const resultDiv = document.getElementById("result");

    const startDateString = startDateInput.value;
    const duration = parseInt(durationInput.value);

    const startDate = new Date(startDateString);
    startDate.setDate(startDate.getDate() + 1);
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + duration - 1);

    const presentationDate = new Date(endDate);
    presentationDate.setDate(endDate.getDate() + 1);

    const daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    const startDateFormatada = formatarData(startDate);
    const endDateFormatada = formatarData(endDate);
    const presentationDateFormatada = formatarData(presentationDate);

    const initialDayOfWeek = daysOfWeek[startDate.getDay()];
    const finalDayOfWeek = daysOfWeek[endDate.getDay()];
    const presentationDayOfWeek = daysOfWeek[presentationDate.getDay()]; 

    return {
        startDateFormatada,
        endDateFormatada,
        presentationDateFormatada,
        initialDayOfWeek,
        finalDayOfWeek,
        presentationDayOfWeek
    };

}

function numeroParaExtensoSimples(numero) {
    const unidades = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
    const dezenas = ['', 'dez', 'vinte', 'trinta'];

    if (numero < 10) {
        return unidades[numero];
    } else if (numero < 20) {
        // Adiciona uma condição especial para números entre 10 e 19
        const especialDezA19 = ['dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
        return especialDezA19[numero - 10];
    } else if (numero < 31) {
        const unidade = numero % 10;
        const dezena = Math.floor(numero / 10);
        return dezenas[dezena] + (unidade > 0 ? ` e ${unidades[unidade]}` : '');
    } else if (numero > 31) {
         return 'Número muito grande.';
    }
}



function gerarTexto() {

    const {
        startDateFormatada,
        endDateFormatada,
        presentationDateFormatada,
        initialDayOfWeek,
        finalDayOfWeek,
        presentationDayOfWeek
    } = calculateDates();

    const durationElement = document.getElementById("duration");
    const duration = parseInt(durationElement.value);

    const numeroExtenso = numeroParaExtensoSimples(duration);

    const tipoSelecionado = document.getElementById("tipo").value;
    const exercicio = document.getElementById("exercicio").value;
    const bolConcessao = document.getElementById("bolConcessao").value;
    const bolSustacao = document.getElementById("bolSustacao").value;

    const startDate = document.getElementById("start-date").value;
    

    //Data de emissão
    const dataEmissao = new Date();
    const diaEmissao = String(dataEmissao.getDate()).padStart(2, '0');
    const mesEmissao = String(dataEmissao.getMonth() + 1).padStart(2, '0');
    const anoEmissao = dataEmissao.getFullYear();
    const dataEmissaoFormatada = `${diaEmissao}/${mesEmissao}/${anoEmissao}`;

    let textoGerado = "";

    // Verifica o tipo selecionado e gera o texto correspondente
    switch (tipoSelecionado) {
        case "Concessão":
            textoGerado = `O COMANDANTE DO 11º BATALHÃO DE POLÍCIA MILITAR DO ESTADO DA PARAÍBA, no uso das atribuições que lhe confere o Art 40 da Lei Complementar nº 87, de 02 de Dezembro de 2008, com fulcro na letra i, Inciso II do art. 49, c/c o § 1º do art. 61, da Lei nº 3.909, de 14 de julho de 1977 e Art. 443, § 1º do Regulamento Interno de Serviço Gerais (RISG) do Exército Brasileiro, RESOLVE:

CONCEDER aos militares abaixo relacionados, classificados no 11º BPM, ${duration} (${numeroExtenso}) dias de férias regulamentares, referente ao EXERCÍCIO ${exercicio}.

Inicio: ${startDateFormatada} (${initialDayOfWeek})
Término: ${endDateFormatada} (${finalDayOfWeek})
Apresentação: ${presentationDateFormatada} (${presentationDayOfWeek})

Após o término da concessão das férias, as apresentações dos Militares Estaduais deverão ser comunicadas a Seção de Gestão de Pessoa-P1/11º BPM, para regularização no SIGPMPB.

PUBLIQUE-SE.

Monteiro-PB, ${dataEmissaoFormatada}.

Saulo TAVARES da Silva - TC QOEM
Comandante do 11º BPM`;
            break;
        case "Apresentacão":
            textoGerado = `O CHEFE DA SEÇÃO DE GESTÃO DE PESSOAS (P/1) DO 11º BATALHÃO DE POLÍCIA MILITAR DA PARAÍBA no exercício das competências que lhe foram delegadas pelo Comandante desta Unidade Operacional através da alínea “o”, inciso III do art. 8º da NORMA GERAL DE AÇÃO - NGA Nº 001/2023-GC/11º BPM publicada no Boletim do CPR I nº 0041 de 01/03/2023, em conformidade com o art. 134 da Lei Estadual (PB) nº 3.909 de 14 de julho de 1977, que dispõe sobre o “Estatuto dos Policiais Militares do Estado da Paraíba”, c/c o art. 442, art. 443, § 3º, art. 445 e art. 449, caput, do Regulamento Interno de Serviço Gerais (RISG) do Exército Brasileiro, RESOLVE:

REGISTRAR que os militares abaixo relacionados se apresentaram nesta UOp pronto para o serviço, em ${startDateFormatada}, após o gozo de ${duration} (${numeroExtenso}) dias de Férias, referente ao EXERCÍCIO ${exercicio}, conforme a publicação contida no Bol. nº ${bolConcessao} CPR I.

PUBLIQUE-SE.

Monteiro-PB, ${dataEmissaoFormatada}.

João EDSON da Silva Feitosa – 1º TEN QOE
Chefe da Seção de Gestão de Pessoas - 11º BPM`;
            break;
        case "Sustacão":
            textoGerado = `O CHEFE DA SEÇÃO DE GESTÃO DE PESSOAS (P/1) DO 11º BATALHÃO DE POLÍCIA MILITAR DA PARAÍBA no exercício das competências que lhe foram delegadas pelo Comandante desta Unidade Operacional através do inciso III do art. 8º da NORMA GERAL DE AÇÃO - NGA Nº 001/2023-GC/11º BPM publicada no Boletim do CPR I nº 0041 de 01/03/2023, em conformidade com o art. 134 da Lei Estadual (PB) nº 3.909 de 14 de julho de 1977, que dispõe sobre o “Estatuto dos Policiais Militares do Estado da Paraíba”, c/c o art. 442, art. 443, § 3º, art. 445 e art. 449, caput, do Regulamento Interno de Serviço Gerais (RISG) do Exército Brasileiro, RESOLVE:

SUSTAR, para gozo oportuno, ${duration} (${numeroExtenso}) dias das férias regulamentares, referentes ao EXERCÍCIO ${exercicio}, do(s) Militar(es) Estadual(is) abaixo relacionado, conforme publicado no Bol. ${bolConcessao} CPR I.

PUBLIQUE-SE. 

Monteiro-PB, ${dataEmissaoFormatada}. 

João EDSON da Silva Feitosa – 1º TEN QOE
Chefe da Seção de Gestão de Pessoas - 11º BPM`;
            break;
        case "Sustadas":
            textoGerado = `O CHEFE DA SEÇÃO DE GESTÃO DE PESSOAS (P/1) DO 11º BATALHÃO DE POLÍCIA MILITAR DA PARAÍBA no exercício das competências que lhe foram delegadas pelo Comandante desta Unidade Operacional através da alínea “g”, inciso III do art. 8º da NORMA GERAL DE AÇÃO - NGA Nº 001/2023-GC/11º BPM publicada no Boletim do CPR I nº 0041 de 01/03/2023, em conformidade com o art. 134 da Lei Estadual (PB) nº 3.909 de 14 de julho de 1977, que dispõe sobre o “Estatuto dos Policiais Militares do Estado da Paraíba”, RESOLVE:

REGISTRAR a concessão de ${duration} (${numeroExtenso}) dias de férias SUSTADAS aos militares abaixo referenciados, referente ao EXERCÍCIO ${exercicio}, as quais foram sustadas para gozo oportuno no Bol. n° ${bolSustacao} CPR I.

Inicio: ${startDateFormatada} (${initialDayOfWeek})
Término: ${endDateFormatada} (${finalDayOfWeek})
Apresentação: ${presentationDateFormatada} (${presentationDayOfWeek})

Ao final do gozo das férias, os militares estaduais referenciados devem se apresentar aos seus respectivos, Comandantes; ato contínuo deve produzir documento informando seu retorno para regularização no SIGPMPB.

PUBLIQUE-SE.

Monteiro-PB, ${dataEmissaoFormatada}.

João EDSON da Silva Feitosa – 1º TEN QOE
Chefe da Seção de Gestão de Pessoas - 11º BPM`;
            break;
        default:
            textoGerado = "Por favor, selecione um tipo válido.";
    }

    const paragrafos = textoGerado.split('\n');
    const textoFormatado = paragrafos.map(paragrafo => `<p style="text-align:justify";>${paragrafo}</p>`).join('');
   
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

    // Exibe o texto gerado
    document.getElementById("textoGerado").innerText = textoGerado;
    document.getElementById("result").style.display = "block";
}



