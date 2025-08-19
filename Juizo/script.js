function mostrarCamposEspeciais() {
            const varaSelecionada = document.getElementById("vara").value;
            const outrosVara = document.getElementById("outrosVara");
            const linkAudiencia = document.getElementById("linkAudiencia");
            const telefoneContato = document.getElementById("telefoneContato");
            const comarca = document.getElementById("comarca");
            const outrosComarca = document.getElementById("outrosComarca");

            
            outrosComarca.style.display = varaSelecionada === " " ? "block" : "none";
            outrosVara.style.display = varaSelecionada === " " ? "block" : "none";

            if (varaSelecionada === "1ª Vara de Monteiro") {
                linkAudiencia.textContent = "Link para acesso à audiência: bit.ly/1avaramistademonteiropb";
                telefoneContato.textContent = "Telefone para contato: (83) 3351-3062 e (83) 99145-5906";
                comarca.textContent = "MONTEIRO";
            } else if (varaSelecionada === "2ª Vara de Monteiro") {
                linkAudiencia.textContent = "Link para acesso à audiência: https://us02web.zoom.us/my/segundavarademonteiro";
                telefoneContato.textContent = "Telefone para contato: (83) 99143-9103";
                comarca.textContent = "MONTEIRO";
            } else if (varaSelecionada === "Vara de Sumé") {
                linkAudiencia.textContent = "Link para acesso à audiência: https://www.bit.ly/varaunicasume";
                telefoneContato.textContent = "Telefone para contato: (83) 3353-2296 e (83) 99143-4757";
                comarca.textContent = "SUMÉ";
            } else if (varaSelecionada === "Vara de Serra Branca") {
                linkAudiencia.textContent = "Link para acesso à audiência: Caso não desejem comparecerem de forma presencial, deverão requerer no processo o comparecimento de forma virtual por videoconferência, em até 05 (cinco) dias antes da data da audiência";
                telefoneContato.textContent = "Telefone para contato: (83) 9 9144-6919";
                comarca.textContent = "SERRA BRANCA";
            } else if (varaSelecionada === "outros") {
                linkAudiencia.textContent = "";
                telefoneContato.textContent = "";
                comarca.textContent = "";
            }
        }


function gerarTexto() {
    const dataAudienciaInput = document.getElementById("dataAudiencia").value;
    const horaAudiencia = document.getElementById("horaAudiencia").value;
    const numProcesso = document.getElementById("numProcesso").value;
    const nomeReu = document.getElementById("nomeReu").value;
    const numOficio = document.getElementById("numOficio").value;
    const dataOficioInput = document.getElementById("dataOficio").value;
        
    
    // Obter a data de emissão automática no formato "DD/MM/AAAA"
    const dataEmissao = new Date();
    const diaEmissao = String(dataEmissao.getDate()).padStart(2, '0');
    const mesEmissao = String(dataEmissao.getMonth() + 1).padStart(2, '0');
    const anoEmissao = dataEmissao.getFullYear();
    const dataEmissaoFormatada = `${diaEmissao}/${mesEmissao}/${anoEmissao}`;

    // Formatar a hora da Audiência para "HH:MM"
    const horaMinutos = horaAudiencia.split(':');
    const horaFormatada = horaMinutos[0] + 'h' + horaMinutos[1] + 'min';

    const varaSelecionada = document.getElementById("vara").value;
    const outraVaraInput = document.getElementById("outraVara");
    const textoUsuario = outraVaraInput.value;
    
    const outraComarcaInput = document.getElementById("outraComarca");
    const textoComarca = outraComarcaInput.value;

    let linkAudiencia = "";
    let telefoneContato = "";
    let comarca = "";

    if (varaSelecionada === "1ª Vara Mista da Comarca de Monteiro") {
        linkAudiencia = "bit.ly/1avaramistademonteiropb";
        telefoneContato = "(83) 3351-3062 e (83) 99145-5906";
        comarca = "MONTEIRO";
    } else if (varaSelecionada === "2ª Vara Mista da Comarca de Monteiro") {
        linkAudiencia = "https://us02web.zoom.us/my/segundavarademonteiro";
        telefoneContato = "(83) 99143-9103";
        comarca = "MONTEIRO";
    } else if (varaSelecionada === "Vara Única da Comarca de Sumé") {
        linkAudiencia = "https://www.bit.ly/varaunicasume";
        telefoneContato = "(83) 3353-2296 e (83) 99143-4757";
        comarca = "SUMÉ";
    } else if (varaSelecionada === "Vara Única da Comarca de Serra Branca") {
        linkAudiencia = "Caso não desejem comparecerem de forma presencial, deverão requerer no processo o comparecimento de forma virtual por videoconferência, em até 05 (cinco) dias antes da data da audiência.";
        telefoneContato = "(83) 9 9144-6919";
        comarca = "SERRA BRANCA";
    } else if (varaSelecionada === "outros") {
        linkAudiencia = "";
        telefoneContato = "";
        comarca = "";
    }

function formatarData(data) {
    const dataObjeto = new Date(data); // Converte a string da data para um objeto Date
    const dia = String(dataObjeto.getDate() + 1).padStart(2, '0'); // Obtém o dia
    const mes = String(dataObjeto.getMonth() + 1).padStart(2, '0'); // Obtém o mês (lembrando que os meses no objeto Date são baseados em zero, então é necessário adicionar 1)
    const ano = dataObjeto.getFullYear(); // Obtém o ano

    return `${dia}/${mes}/${ano}`;
    }
    const dataAudienciaFormatada = formatarData(dataAudienciaInput);
    const dataOficioFormatada = formatarData(dataOficioInput)


    const textoGerado = `O CHEFE DA SEÇÃO DE GESTÃO DE PESSOAS (P/1) DO 11º BATALHÃO DE POLÍCIA MILITAR DA PARAÍBA no exercício das competências que lhe foram delegadas pelo Comandante desta Unidade Operacional através da alínea “q”, inciso III do art. 8º da NORMA GERAL DE AÇÃO - NGA Nº 001/2023-GC/11º BPM publicada no Boletim do CPR I nº 0041 de 01/03/2023, em conformidade com o art. 134 da Lei Estadual (PB) nº 3.909 de 14 de julho de 1977, que dispõe sobre o “Estatuto dos Policiais Militares do Estado da Paraíba”, RESOLVE:

REGISTRAR, que o(a) Exmo.(a) Sr.(a) Juiz(a) de Direito da ${varaSelecionada}${outraVaraInput.value}, solicita a apresentação do(s) Militar(es) Estadual(is) abaixo relacionado(s) a fim de participar(em) da audiência de instrução, que acontecerá no dia ${dataAudienciaFormatada}, às ${horaFormatada}, na sala de audiências, por meio de videoconferência através da plataforma ZOOM, referente aos autos do Processo nº. ${numProcesso}. Réu: ${nomeReu}.

Link para acesso à audiência: ${linkAudiencia}
Telefone para contato: ${telefoneContato}

(REQUISIÇÃO: OFÍCIO Nº ${numOficio}/2024 – COMARCA DE ${comarca}${outraComarcaInput.value}, ${dataOficioFormatada}).

PUBLIQUE-SE.

Monteiro-PB, ${dataEmissaoFormatada}.

Marcos Antônio ANASTÁCIO de Sousa – 1º TEN PM
Chefe da Seção de Gestão de Pessoas do 11º BPM`;  

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

    document.getElementById("textoGerado").innerHTML = textoFormatado;


}
