# EmailFlow | Analisador de Emails com IA

<div align="center">
  <p>Uma aplicação web full-stack que utiliza a API do Google Gemini para classificar emails e sugerir respostas, construída com React e Flask, e implantada na AWS.</p>
</div>

<div align="center">
  <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white">
  <img alt="Flask" src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="AWS" src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white">
  <img alt="Nginx" src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white">
</div>

---

## Aplicação Online

Acesse a versão de produção da aplicação que está rodando em nosso servidor na AWS:

**[http://54.207.153.148/](http://54.207.153.148/)**

---

## Índice

* [Visão Geral](#-visão-geral)
* [Como Funciona](#-como-funciona)
* [Demonstração Visual](#-demonstração-visual)
* [Arquitetura e Tecnologias](#-arquitetura-e-tecnologias)
* [Como Executar Localmente](#-como-executar-localmente)
* [Processo de Deploy na AWS](#-processo-de-deploy-na-aws)
* [Autor](#-autor)

---

## Visão Geral

Este projeto foi desenvolvido como uma solução para o desafio da AutoU. O objetivo é automatizar a triagem de um alto volume de emails, liberando tempo da equipe de tarefas manuais e repetitivas. O EmailFlow analisa o conteúdo de um email, o classifica como "Produtivo" ou "Improdutivo" e gera uma sugestão de resposta profissional e contextualizada, utilizando o poder dos modelos de linguagem modernos.

## Como Funciona

O processo foi pensado para ser simples e intuitivo para o usuário final, dividido em duas etapas claras:

| **1. Você Envia o Conteúdo** | **2. A IA Analisa e Sugere** |
| :--- | :--- |
| Copie o texto de qualquer email e cole em nossa plataforma. Ao clicar em "Analisar", a interface envia a mensagem de forma segura para nosso centro de análise na nuvem. | No mesmo instante, nossa Inteligência Artificial lê, compreende o contexto da mensagem e a classifica. Em seguida, ela escreve uma sugestão de resposta clara e profissional, pronta para você usar. |

---

## 🛠️ Arquitetura e Tecnologias

A aplicação foi construída sobre uma arquitetura desacoplada, o padrão para projetos web modernos, garantindo escalabilidade e manutenção simplificada.

**Fluxo da Aplicação:**
`Usuário (Navegador)` → `React (Frontend)` → `Nginx` → `Flask (Backend)` → `Google Gemini API`

* **Frontend:** Desenvolvido com **React** e **TypeScript** para uma interface robusta e tipada. A ferramenta **Vite** foi utilizada para um ambiente de desenvolvimento rápido. A estilização foi feita com **CSS Modules** para garantir estilos componentizados e sem conflitos, e as animações com **Framer Motion** para uma experiência de usuário fluida e moderna.

* **Backend:** Uma API RESTful construída com **Flask**, um micro-framework Python leve e performático. A biblioteca **Flask-CORS** foi utilizada para permitir a comunicação segura com o frontend.

* **Inteligência Artificial:** A lógica de classificação e geração é gerenciada pela **API do Google Gemini**. A interação é feita através de **Engenharia de Prompt**, onde um conjunto de instruções detalhadas foi criado para guiar o comportamento do modelo e garantir respostas precisas e no formato JSON esperado. A biblioteca **spaCy** também foi incluída para demonstrar conhecimento em processamento de linguagem natural (NLP).

* **Hospedagem (Cloud):** A aplicação está implantada em uma instância **EC2 t3.micro** da **AWS**. Um **Elastic IP** garante um endereço fixo, e o **Route 53** gerencia o apontamento de domínio.

* **Servidores de Produção:** Para servir a aplicação 24/7 de forma segura, foi utilizada uma stack padrão da indústria: **Gunicorn** como servidor de aplicação WSGI para o Flask e **Nginx** como proxy reverso, responsável por receber todo o tráfego da internet e servir os arquivos estáticos do React. O serviço é gerenciado pelo **Systemd** do Linux para garantir que ele reinicie automaticamente em caso de falhas.

---

## 💻 Como Executar Localmente

**Pré-requisitos:**
* Node.js (v18+) e npm
* Python (v3.10+) e pip
* Git

**Instruções:**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git)
    cd SEU-REPOSITORIO
    ```

2.  **Configure o Backend:**
    * Navegue até a pasta do backend: `cd backend`
    * Crie um ambiente virtual:
        ```bash
        python -m venv venv
        # Windows: .\\venv\\Scripts\\activate
        # Mac/Linux: source venv/bin/activate
        ```
    * Instale as dependências: `pip install -r requirements.txt`
    * Baixe o modelo do spaCy: `python -m spacy download pt_core_news_lg`
    * Crie um arquivo `.env` na pasta `backend` e adicione sua chave da API:
        ```
        GEMINI_API_KEY="SUA_CHAVE_AQUI"
        ```

3.  **Configure o Frontend:**
    * Em um **novo terminal**, navegue até a pasta do frontend: `cd frontend`
    * Instale as dependências: `npm install`

4.  **Rode a Aplicação:**
    * **No terminal do backend:** `flask run` (Iniciará em `http://127.0.0.1:5000`)
    * **No terminal do frontend:** `npm run dev` (Iniciará em `http://localhost:5173`)
    * Abra `http://localhost:5173` no seu navegador.

---

## 🚀 Processo de Deploy na AWS

A aplicação foi implantada em uma instância EC2 Ubuntu seguindo estes passos:
1.  Configuração da instância EC2 e do Elastic IP.
2.  Configuração do Security Group para liberar as portas 22 (SSH) e 80 (HTTP).
3.  Instalação do Nginx, Python, Node.js e Git no servidor.
4.  Clonagem do repositório do GitHub.
5.  Configuração do ambiente Python (`venv`) e instalação das dependências.
6.  Build do projeto React (`npm run build`).
7.  Configuração do **Gunicorn** com **Systemd** para rodar a aplicação Flask como um serviço persistente.
8.  Configuração do **Nginx** como proxy reverso, servindo os arquivos estáticos do React (`frontend/dist`) e redirecionando as requisições `/api/*` para o Gunicorn.

**Para atualizar a aplicação no servidor:**
```bash
# Conectar via SSH
ssh -i "sua-chave.pem" ubuntu@SEU_IP

# Navegar para a pasta e puxar as atualizações
cd ~/EmailFlow
git pull origin main

# Reconstruir o frontend
cd frontend
npm install && npm run build
cd ..

# Reiniciar o serviço do backend
sudo systemctl restart autou-app
```

---
<div align="center">
  <p>Desenvolvido com dedicação por <strong>Thiago Monteiro</strong></p>
  <a href="https://www.linkedin.com/in/thiago-monteiro-4531b4234/?trk=opento_sprofile_details">LinkedIn</a> • 
  <a href="https://github.com/Thiagooms">GitHub</a>
</div>
