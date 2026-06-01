/* ==========================================
   BANCO DE DADOS DE QUESTÕES (30 itens)
   ========================================== */
const dbQuestoes = [

    {
        pergunta: "Por que é importante utilizar senhas fortes?",
        opcoes: [
            "Para deixar o computador mais rápido",
            "Para evitar acessos indevidos às contas",
            "Para melhorar a conexão da internet",
            "Para impedir anúncios em sites",
            "Para atualizar o navegador automaticamente"
        ],
        correta: 1
    },

    {
        pergunta: "Qual das alternativas representa uma senha mais segura?",
        opcoes: [
            "123456",
            "senha2024",
            "gabriel123",
            "P@ssSegura#2026",
            "abcdef"
        ],
        correta: 3
    },

    {
        pergunta: "O que é phishing?",
        opcoes: [
            "Um aplicativo de mensagens",
            "Um golpe usado para roubar informações pessoais",
            "Um antivírus gratuito",
            "Um sistema operacional",
            "Um tipo de rede Wi-Fi"
        ],
        correta: 1
    },

    {
        pergunta: "Qual atitude ajuda a evitar golpes de phishing?",
        opcoes: [
            "Clicar rapidamente em qualquer link",
            "Compartilhar senhas com amigos",
            "Verificar se o site é oficial",
            "Desativar o antivírus",
            "Usar redes públicas sempre"
        ],
        correta: 2
    },

    {
        pergunta: "O que é autenticação em dois fatores?",
        opcoes: [
            "Usar duas contas no mesmo celular",
            "Criar duas senhas iguais",
            "Adicionar uma camada extra de segurança",
            "Trocar a senha todos os dias",
            "Conectar dois roteadores"
        ],
        correta: 2
    },

    {
        pergunta: "Qual é a principal vantagem da autenticação em dois fatores?",
        opcoes: [
            "Aumentar a velocidade do celular",
            "Reduzir o consumo de internet",
            "Proteger a conta mesmo se a senha for descoberta",
            "Melhorar o sinal Wi-Fi",
            "Atualizar aplicativos automaticamente"
        ],
        correta: 2
    },

    {
        pergunta: "Qual cuidado é importante ao usar Wi-Fi público?",
        opcoes: [
            "Acessar aplicativos bancários livremente",
            "Compartilhar arquivos pessoais",
            "Evitar informar dados sensíveis",
            "Desativar a senha do celular",
            "Ignorar atualizações"
        ],
        correta: 2
    },

    {
        pergunta: "Por que redes Wi-Fi públicas podem ser perigosas?",
        opcoes: [
            "Porque desligam o celular",
            "Porque podem existir redes falsas",
            "Porque diminuem a bateria",
            "Porque impedem chamadas",
            "Porque apagam arquivos"
        ],
        correta: 1
    },

    {
        pergunta: "O que pode indicar um golpe em redes sociais?",
        opcoes: [
            "Mensagens suspeitas pedindo dinheiro",
            "Fotos em alta qualidade",
            "Perfis com seguidores",
            "Vídeos curtos",
            "Uso de emojis"
        ],
        correta: 0
    },

    {
        pergunta: "Qual atitude ajuda a evitar golpes nas redes sociais?",
        opcoes: [
            "Aceitar qualquer solicitação",
            "Compartilhar dados pessoais publicamente",
            "Desconfiar de ofertas exageradas",
            "Usar a mesma senha em tudo",
            "Clicar em qualquer anúncio"
        ],
        correta: 2
    },

    {
        pergunta: "Por que atualizar aplicativos e sistemas é importante?",
        opcoes: [
            "Para aumentar o brilho da tela",
            "Para corrigir falhas de segurança",
            "Para remover o teclado",
            "Para diminuir a memória",
            "Para bloquear o Wi-Fi"
        ],
        correta: 1
    },

    {
        pergunta: "Onde é mais seguro baixar aplicativos?",
        opcoes: [
            "Sites desconhecidos",
            "Links enviados por estranhos",
            "Lojas oficiais",
            "Mensagens aleatórias",
            "Qualquer página da internet"
        ],
        correta: 2
    },

    {
        pergunta: "Qual característica normalmente está presente em sites confiáveis?",
        opcoes: [
            "Muitos anúncios piscando",
            "Erros de português",
            "Endereço iniciado com HTTPS",
            "Pedidos de senha imediatamente",
            "Pop-ups excessivos"
        ],
        correta: 2
    },

    {
        pergunta: "O cadeado ao lado do endereço de um site indica:",
        opcoes: [
            "Que o site é lento",
            "Que a conexão possui proteção",
            "Que o site é gratuito",
            "Que não existem vírus",
            "Que o navegador está desatualizado"
        ],
        correta: 1
    },

    {
        pergunta: "Qual informação deve ser evitada nas redes sociais?",
        opcoes: [
            "Fotos de paisagens",
            "Músicas favoritas",
            "Endereço residencial",
            "Filmes preferidos",
            "Esportes favoritos"
        ],
        correta: 2
    },

    {
        pergunta: "Por que a exposição excessiva na internet pode ser perigosa?",
        opcoes: [
            "Porque reduz a bateria",
            "Porque facilita golpes e invasões de privacidade",
            "Porque melhora o sinal",
            "Porque aumenta anúncios",
            "Porque muda o navegador"
        ],
        correta: 1
    },

    {
        pergunta: "Qual risco existe ao baixar arquivos desconhecidos?",
        opcoes: [
            "Melhorar o desempenho do computador",
            "Instalar vírus ou programas maliciosos",
            "Atualizar o sistema automaticamente",
            "Reduzir o armazenamento",
            "Desligar o teclado"
        ],
        correta: 1
    },

    {
        pergunta: "Qual prática ajuda na segurança de downloads?",
        opcoes: [
            "Baixar qualquer arquivo recebido",
            "Utilizar fontes confiáveis",
            "Ignorar o antivírus",
            "Desativar atualizações",
            "Abrir todos os anexos"
        ],
        correta: 1
    },

    {
        pergunta: "Qual cuidado é importante em compras online?",
        opcoes: [
            "Comprar sem pesquisar",
            "Confiar em qualquer anúncio",
            "Verificar a reputação da loja",
            "Informar dados em qualquer site",
            "Ignorar avaliações"
        ],
        correta: 2
    },

    {
        pergunta: "O que pode indicar uma loja virtual falsa?",
        opcoes: [
            "Preço extremamente abaixo do normal",
            "Site organizado",
            "HTTPS ativo",
            "Avaliações positivas",
            "Atendimento oficial"
        ],
        correta: 0
    },

    {
        pergunta: "O que são fake news?",
        opcoes: [
            "Notícias internacionais",
            "Informações falsas divulgadas na internet",
            "Atualizações do sistema",
            "Mensagens automáticas",
            "Aplicativos de conversa"
        ],
        correta: 1
    },

    {
        pergunta: "Antes de compartilhar uma notícia é importante:",
        opcoes: [
            "Compartilhar rapidamente",
            "Ignorar a fonte",
            "Verificar se a informação é confiável",
            "Enviar para todos os contatos",
            "Publicar sem ler"
        ],
        correta: 2
    },

    {
        pergunta: "Por que os dados pessoais devem ser protegidos?",
        opcoes: [
            "Porque ocupam espaço",
            "Porque podem ser usados em golpes",
            "Porque diminuem a internet",
            "Porque apagam aplicativos",
            "Porque bloqueiam o celular"
        ],
        correta: 1
    },

    {
        pergunta: "Qual dado deve ser compartilhado com cuidado?",
        opcoes: [
            "Cor favorita",
            "Nome de filmes",
            "CPF e documentos pessoais",
            "Time favorito",
            "Música preferida"
        ],
        correta: 2
    },

    {
        pergunta: "Qual golpe é comum no WhatsApp?",
        opcoes: [
            "Pedido falso de dinheiro",
            "Atualização de câmera",
            "Troca automática de contatos",
            "Mudança de idioma",
            "Bloqueio da bateria"
        ],
        correta: 0
    },

    {
        pergunta: "O que NÃO deve ser compartilhado no WhatsApp?",
        opcoes: [
            "Figurinhas",
            "Fotos de paisagens",
            "Código de verificação recebido por SMS",
            "Mensagens de bom dia",
            "Vídeos curtos"
        ],
        correta: 2
    },

    {
        pergunta: "Como criminosos costumam aplicar golpes bancários?",
        opcoes: [
            "Se passando por funcionários de bancos",
            "Atualizando aplicativos",
            "Vendendo celulares",
            "Criando jogos online",
            "Aumentando o sinal Wi-Fi"
        ],
        correta: 0
    },

    {
        pergunta: "O que fazer ao receber uma ligação bancária suspeita?",
        opcoes: [
            "Informar a senha imediatamente",
            "Instalar aplicativos enviados",
            "Encerrar o contato e procurar o banco oficial",
            "Transferir dinheiro",
            "Compartilhar dados pessoais"
        ],
        correta: 2
    },

    {
        pergunta: "Por que crianças e idosos precisam de atenção especial na internet?",
        opcoes: [
            "Porque usam menos internet",
            "Porque podem ser mais vulneráveis a golpes",
            "Porque não possuem celulares",
            "Porque não usam aplicativos",
            "Porque não recebem mensagens"
        ],
        correta: 1
    },

    {
        pergunta: "Qual atitude ajuda a proteger crianças e idosos online?",
        opcoes: [
            "Ignorar o uso da internet",
            "Permitir qualquer acesso",
            "Orientar sobre riscos digitais",
            "Compartilhar senhas",
            "Desativar a segurança do aparelho"
        ],
        correta: 2
    }

];

/* ==========================================
   VARIÁVEIS DE CONTROLE DO ESTADO DO QUIZ
   ========================================== */
let questoesSelecionadas = []; 
let indiceAtual = 0;           
let pontuacao = 0;             
let opcaoSelecionadaIdx = null;
let respostasUsuario = [];

/* ==========================================
   MAPEAMENTO DOS ELEMENTOS DOM
   ========================================== */
const mainPage = document.getElementById('main-page');
const quizPage = document.getElementById('quiz-page');
const startQuizBtn = document.getElementById('start-quiz-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextQuestionBtn = document.getElementById('next-question-btn');
const progressText = document.getElementById('progress-text');
const progressBarFill = document.getElementById('progress-bar-fill');

/* ==========================================
   LOGICA DO QUIZ (APENAS NA INDEX.HTML)
   ========================================== */
if(startQuizBtn) {
    startQuizBtn.addEventListener('click', () => {
        mainPage.classList.add('hidden'); 
        quizPage.classList.remove('hidden'); 
        window.scrollTo(0, 0); 
        inicializarQuiz();
    });
}

function inicializarQuiz() {

    pontuacao = 0;
    indiceAtual = 0;
    respostasUsuario = [];

    let bancoEmbaralhado = [...dbQuestoes];

    for (let i = bancoEmbaralhado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [bancoEmbaralhado[i], bancoEmbaralhado[j]] = [bancoEmbaralhado[j], bancoEmbaralhado[i]];
    }

    questoesSelecionadas = bancoEmbaralhado.slice(0, 10);

    carregarQuestao();
}

function carregarQuestao() {
    nextQuestionBtn.style.display = "block";
    opcaoSelecionadaIdx = null;
    nextQuestionBtn.disabled = true; 
    nextQuestionBtn.innerText = indiceAtual === 9 ? "FINALIZAR QUIZ" : "PRÓXIMA PERGUNTA";

    const q = questoesSelecionadas[indiceAtual];

    progressText.innerText = `Pergunta ${indiceAtual + 1} de 10`;
    const porcentagemProgresso = ((indiceAtual + 1) / 10) * 100;
    progressBarFill.style.width = `${porcentagemProgresso}%`;

    questionText.innerText = q.pergunta;
    optionsContainer.innerHTML = '';

    q.opcoes.forEach((opcaoText, idx) => {
        const btnOpcao = document.createElement('button');
        btnOpcao.classList.add('option-item');
        btnOpcao.innerText = opcaoText;
        btnOpcao.addEventListener('click', () => selecionarOpcao(idx));
        optionsContainer.appendChild(btnOpcao);
    });
}

function selecionarOpcao(idxSelecionado) {
    opcaoSelecionadaIdx = idxSelecionado;
    const itens = optionsContainer.querySelectorAll('.option-item');
    itens.forEach(item => item.classList.remove('selected'));
    itens[idxSelecionado].classList.add('selected');
    nextQuestionBtn.disabled = false;
}

if(nextQuestionBtn) {

    nextQuestionBtn.addEventListener('click', () => {

        respostasUsuario.push({
            pergunta: questoesSelecionadas[indiceAtual].pergunta,
            correta: questoesSelecionadas[indiceAtual].correta,
            respostaUsuario: opcaoSelecionadaIdx,
            opcoes: questoesSelecionadas[indiceAtual].opcoes
        });

        if (opcaoSelecionadaIdx === questoesSelecionadas[indiceAtual].correta) {
            pontuacao++;
        }

        if (indiceAtual < 9) {

            indiceAtual++;
            carregarQuestao();

        } else {

            exibirResultados();

        }

    });

}

function exibirResultados() {

    progressText.innerText = "Quiz Finalizado!";
    progressBarFill.style.width = "100%";

    let emoji = "😐";
    let mensagem = "Bom trabalho!";

    if (pontuacao >= 8) {
        emoji = "😄";
        mensagem = "Excelente desempenho!";
    }

    else if (pontuacao >= 5) {
        emoji = "🙂";
        mensagem = "Você foi muito bem!";
    }

    else {
        emoji = "😕";
        mensagem = "Continue estudando e tente novamente!";
    }

    let resultadoHTML = `
        <div class="results-container fade-in-result">

            <div class="result-emoji">
                ${emoji}
            </div>

            <h2>${mensagem}</h2>

            <p class="final-score">
                Você acertou <strong>${pontuacao}</strong> de 10 perguntas.
            </p>

            <div class="answers-review">
    `;

    respostasUsuario.forEach((resposta, index) => {

        const acertou = resposta.respostaUsuario === resposta.correta;

        resultadoHTML += `

            <div class="answer-card ${acertou ? 'correct-card' : 'wrong-card'}">

                <h3>${index + 1}. ${resposta.pergunta}</h3>

                <p>
                    <strong>Sua resposta:</strong>
                    ${resposta.opcoes[resposta.respostaUsuario]}
                </p>

                <p>
                    <strong>Resposta correta:</strong>
                    ${resposta.opcoes[resposta.correta]}
                </p>

                <span class="result-status">
                    ${acertou ? '✅ Acertou' : '❌ Errou'}
                </span>

            </div>

        `;
    });

    resultadoHTML += `

            <div class="quiz-final-buttons">

                <button id="refazerQuizBtn">
                    Refazer Quiz
                </button>

                <a href="index.html" class="btn-home">
                     Voltar para Home
                </a>

            </div>

        </div>
    </div>
`;

questionText.innerText = "Resultado Final";

optionsContainer.innerHTML = resultadoHTML;

/* ESCONDE O BOTÃO ANTIGO */
nextQuestionBtn.style.display = "none";

/* BOTÃO NOVO DE REFAZER */
document.getElementById("refazerQuizBtn").addEventListener("click", () => {

    nextQuestionBtn.style.display = "block";

    inicializarQuiz();

    window.scrollTo(0, 0);

});
}
/* ==========================================
   NOVA FUNCIONALIDADE: SISTEMA DE BUSCA INTEGRADO
   ========================================== */

// Elementos das Barras de Pesquisa
const searchInputHome = document.getElementById('search-input-home');
const searchInputServices = document.getElementById('search-input-services');

// Ação 1: Quando o usuário busca a partir da página HOME (index.html)
if (searchInputHome) {
    searchInputHome.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && searchInputHome.value.trim() !== "") {
            // Codifica o texto para enviar via URL de forma segura
            const termoBusca = encodeURIComponent(searchInputHome.value.trim());
            // Redireciona para servicos.html carregando o parâmetro da busca
            window.location.href = `servicos.html?busca=${termoBusca}`;
        }
    });
}

// Ação 2: Executada ao carregar a página de SERVIÇOS (servicos.html) ou ao pesquisar nela
function realizarBuscaNaPagina(termo) {
    if (!termo) return;
    
    const termoNormalizado = termo.toLowerCase().trim();
    const cards = document.querySelectorAll('.topic-card');
    let encontrado = false;

    cards.forEach(card => {
        // Remove destaques anteriores para limpar buscas antigas
        card.classList.remove('highlight-search');
        
        const tituloCard = card.querySelector('.topic-content h3').innerText.toLowerCase();
        
        // Se o título do card contiver o termo digitado, rola a tela até ele
        if (tituloCard.includes(termoNormalizado) && !encontrado) {
            card.classList.add('highlight-search');
            
            // Faz o scroll suave até o elemento centralizando-o na tela
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            encontrado = true; // Garante que foca na primeira ocorrência encontrada
        }
    });
}

// Ouvinte para a barra de pesquisa interna na própria página de Serviços
if (searchInputServices) {
    searchInputServices.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            realizarBuscaNaPagina(searchInputServices.value);
        }
    });

    // Código executado ao inicializar a página para verificar se veio busca externa da Home
    window.addEventListener('DOMContentLoaded', () => {
        const parametrosURL = new URLSearchParams(window.location.search);
        const termoVindoDaHome = parametrosURL.get('busca');
        
        if (termoVindoDaHome) {
            // Coloca o termo pesquisado na caixa de texto para o usuário ver
            searchInputServices.value = decodeURIComponent(termoVindoDaHome);
            // Executa a rolagem até o card após um pequeno delay para garantir o carregamento do layout
            setTimeout(() => {
                realizarBuscaNaPagina(decodeURIComponent(termoVindoDaHome));
            }, 300);
        }
    });
}