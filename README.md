# Nome do Projeto

Descrição do Projeto
Este projeto é uma aplicação web simples para consulta de CNPJ, desenvolvida utilizando HTML, CSS e JavaScript. Ele permite que os usuários insiram um CNPJ e obtenham informações detalhadas sobre a empresa, como nome fantasia, razão social, endereço e dados do sócio, através de uma consulta à API BrasilAPI.

Funcionalidades principais incluem:

<ul>
    <li>
Formulário de Consulta: Permite ao usuário inserir um CNPJ para consulta.
   </li>
</ul>
<ul>
    <li>
     Preenchimento Automático: Os campos do formulário são automaticamente preenchidos com os dados retornados pela API.   
    </li>
</ul>
<ul>
    <li>
        Validação e Feedback: Exibe alertas em caso de CNPJ inválido ou não encontrado.
    </li>
</ul>
<ul>
    <li>
        Loader Visual: Indicador de carregamento durante a consulta e envio dos dados.
    </li>
</ul>
<ul>
    <li>
        Redirecionamento: Encaminhamento dos dados para outra página após a consulta bem-sucedida.
    </li>
</ul>

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
