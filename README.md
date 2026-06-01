# 🛡️ Capacitação em Cibersegurança para Todos

[![GitHub license](https://img.shields.io/github/license/viniciusgm25/capacitacao-ciberseguranca?style=flat-square&color=blue)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/viniciusgm25/capacitacao-ciberseguranca?style=flat-square)](https://github.com/viniciusgm25/capacitacao-ciberseguranca/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/viniciusgm25/capacitacao-ciberseguranca?style=flat-square)](https://github.com/viniciusgm25/capacitacao-ciberseguranca/issues)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

Uma iniciativa de **Extensão Universitária** desenvolvida por estudantes da **Universidade Cruzeiro do Sul (UCS)**. O projeto visa mitigar a vulnerabilidade digital, promover o letramento tecnológico e democratizar o acesso a práticas essenciais de segurança da informação para a comunidade local, com atenção especial a adultos e idosos.

O projeto está alinhado com os **Objetivos de Desenvolvimento Sustentável (ODS)** da Organização das Nações Unidas (ONU):
- 📘 **ODS 4: Educação de Qualidade** — Promovendo a inclusão digital e a autonomia educativa.
- 🤝 **ODS 10: Redução das Desigualdades** — Diminuindo o abismo tecnológico gerado pela exclusão digital.

---

## 📌 Índice
- [🎯 Cenário & Diagnóstico](#-cenário--diagnóstico)
- [🌐 A Plataforma Web Interativa](#-a-plataforma-web-interativa)
- [📂 Arquitetura do Repositório](#-arquitetura-do-repositório)
- [🛠️ Tecnologias & Ferramentas](#%EF%B8%8F-tecnologias--ferramentas)
- [👥 Equipe do Projeto](#-equipe-do-projeto)
- [📅 Cronograma de Execução](#-cronograma-de-execução)
- [🚀 Como Executar Localmente](#-como-executar-localmente)
- [⚙️ Implantação e Deploy](#%EF%B8%8F-implantação-e-deploy)
- [⚖️ Licença](#%EF%B8%8F-licença)

---

## 🎯 Cenário & Diagnóstico

A partir de pesquisas de campo e entrevistas de empatia com moradores locais, mapeou-se um problema crítico: **o aumento do tempo de tela diário não se traduz em maturidade ou segurança digital**. 

### Principais Vulnerabilidades Identificadas:
1. **Falsa Sensação de Segurança:** Usuários navegam ativamente na internet diariamente, mas desconhecem os vetores de ataque mais comuns.
2. **Engenharia Social:** Baixa capacidade de identificação de técnicas de *Phishing*, mensagens falsas em aplicativos de mensagens e e-commerces fraudulentos.
3. **Gestão de Acessos Precária:** Uso massivo de senhas fracas, curtas e repetidas entre múltiplas contas por conveniência e receio de esquecimento.
4. **Dependência e Medo:** Falta de autonomia digital, gerando vulnerabilidade acentuada a golpes financeiros e clonagem de contas de comunicação (WhatsApp).

---

## 🌐 A Plataforma Web Interativa

Para resolver as dores diagnosticadas, foi desenvolvido um ecossistema digital composto por **22 páginas HTML**, estruturado de forma inteiramente modular. Cada página atua como uma trilha de aprendizagem focada em mitigar um risco específico:

| Módulo/Arquivo | Foco Temático e Objetivo Prático |
| :--- | :--- |
| `index.html` | Portal principal de entrada, unificando o acesso a todas as trilhas. |
| `sobre.html` | Apresentação institucional da iniciativa e dos objetivos acadêmicos. |
| `blog.html` | Espaço dinâmico para notícias, artigos e atualizações de segurança. |
| `phishing.html` | Técnicas para identificar e-mails e mensagens suspeitas baseadas em urgência artificial. |
| `sites.html` | Como verificar a autenticidade de um domínio (certificados HTTPS, cadeado de segurança). |
| `senha.html` | Guia prático de boas práticas para a formulação de credenciais robustas e memoráveis. |
| `autenticacao.html`| Como ativar e utilizar a Autenticação em Duas Etapas (2FA) em múltiplos serviços. |
| `bancos.html` | Prevenção a golpes financeiros, fraudes no Pix e boletos adulterados. |
| `compras.html` | Cuidados essenciais ao realizar transações comerciais em lojas virtuais. |
| `whatsapp.html` | Passos para evitar a clonagem da conta de mensagens e golpes de engenharia social. |
| `redes.html` | Como controlar a exposição de dados pessoais e configurar filtros de visibilidade. |
| `privacidade.html` | Configurações avançadas de privacidade em plataformas digitais de uso cotidiano. |
| `wifi.html` | Riscos associados à conexão em redes públicas de Wi-Fi e como se proteger. |
| `atualizacoes.html`| A importância crítica da aplicação regular de patches e atualizações de SO e apps. |
| `downloads.html` | Como baixar arquivos e programas evitando malwares embutidos em instaladores. |
| `servicos.html` | Navegação segura e uso consciente de portais governamentais e utilidades públicas[cite: 2]. |
| `fake-news.html` | Critérios de checagem para evitar a disseminação de desinformação na rede[cite: 2]. |
| `familia.html` | Estratégias de proteção e boas práticas digitais voltadas para crianças e idosos no lar[cite: 2]. |

> 🧠 **O Quiz Interativo (`script.js`):** Toda a inteligência da plataforma, processamento de acertos/erros, geração de feedback didático imediato e controle do fluxo do quiz são centralizados dinamicamente via JavaScript nativo, garantindo uma aplicação rápida e sem necessidade de infraestrutura de banco de dados complexa[cite: 2].

---

## 📂 Arquitetura do Repositório

O repositório foi organizado seguindo padrões limpos de mercado, isolando documentação acadêmica do código de produção[cite: 2]:

```text
capacitacao-ciberseguranca/
│
├── .github/                  # Arquivos de configuração de plataforma e automações
│   └── ISSUE_TEMPLATE/       # Templates para relatar bugs ou sugerir melhorias
│
├── docs/                     # Documentação de apoio do projeto
│   └── Capacitacao em Ciberseguranca .pdf  # Documento base original de extensão da UCS
│
├── imgs/                     # Ativos estáticos visuais e ilustrações da interface web
├── video/                    # Mídias e demonstrações em vídeo integradas ao portal
│
│   # --- Núcleo e Estilização Estrutural ---
├── index.html                # Página inicial (Landing Page)
├── sobre.html                # Página de contexto acadêmico
├── blog.html                 # Página de artigos de apoio
├── style.css                 # Folha de estilo unificada e responsiva
├── script.js                 # Motor lógico do quiz e interações dinâmicas
│
│   # --- Módulos Educacionais Temáticos ---
├── atualizacoes.html
├── autenticacao.html
├── bancos.html
├── compras.html
├── dados.html
├── downloads.html
├── fake-news.html
├── familia.html
├── phishing.html
├── privacidade.html
├── redes.html
├── senha.html
├── servicos.html
├── sites.html
├── whatsapp.html
└── wifi.html
