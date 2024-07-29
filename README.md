# Nome do Projeto

Este projeto é uma aplicação web simples para cadastro de empresas, desenvolvida utilizando HTML, CSS e JavaScript. Ele permite que os usuários insiram informações detalhadas sobre uma empresa, como nome fantasia, razão social, endereço e dados do sócio. A aplicação valida o CNPJ fornecido através de uma consulta à API BrasilAPI e exibe os dados obtidos.

Funcionalidades principais incluem:

Formulário Dinâmico: Preenchimento automático dos campos de dados ao consultar o CNPJ.
Validação e Feedback: Alertas em caso de erro ou sucesso durante o envio do formulário.
Loader Visual: Indicador de carregamento durante a consulta e envio dos dados.
Redirecionamento: Encaminhamento dos dados para outra página após o envio.
Este projeto serve como um exemplo prático de como manipular dados de formulário, realizar requisições assíncronas a APIs externas e melhorar a experiência do usuário com feedback visual e notificações.

## Pré-requisitos

- Navegador web atualizado (Google Chrome, Firefox, Safari, etc.)

## Como Rodar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/felipexavier26/teste-front
    cd teste-front
    ```

2. Abra o arquivo `index.html` no navegador:
    - **Windows**: `start index.html`
    - **MacOS**: `open index.html`
    - **Linux**: `xdg-open index.html`

## Estrutura do Projeto

```plaintext
/
├── styles.css
├── script.js
├── index.html
└── README.md




# Funcionalidades
Formulário de Cadastro: Vários campos e ações (submissão, alerta de sucesso, loader, redirecionamento).
Loader: Exibido durante o envio do formulário.
