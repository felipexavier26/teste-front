function validateCNPJ(input) {
    input.value = input.value.replace(/\D/g, '');
}

function limparCnpj() {
    const cnpj = document.getElementById('cnpj');
    const alert = document.getElementById('alert');
    const erro = document.getElementById('erro')
    const cardContainer = document.getElementById('card-container');
    cnpj.value = '';
    alert.innerHTML = '';
    erro.innerHTML = '';
    cardContainer.style.display = 'none';
}

async function consultarCnpj() {
    const cnpj = document.getElementById('cnpj').value;
    const alert = document.getElementById('alert');
    const erro = document.getElementById('erro');
    const cardcontainer = document.getElementById('card-container');
    alert.innerHTML = '';
    erro.innerHTML = '';

    if (!cnpj.trim()) {
        cardcontainer.style.display = 'none';
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-danger d-flex align-items-center';
        alertDiv.setAttribute('role', 'alert');
        alertDiv.style.fontSize = '0.8em';
        alertDiv.style.padding = '0.5em';

        alertDiv.innerHTML = `
            <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:" style="width: 1em; height: 1em;">
                <use xlink:href="#exclamation-triangle-fill"/>
            </svg>
            <div>
                Por favor, digite um CNPJ.
            </div>
        `;

        alert.appendChild(alertDiv);
        return null;
    }

    const url = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            console.log('Requisição falhou.');
            cardcontainer.style.display = 'none';
            const alertDiv2 = document.createElement('div');
            alertDiv2.className = 'alert alert-danger d-flex align-items-center';
            alertDiv2.setAttribute('role', 'alert');
            alertDiv2.style.fontSize = '0.8em';
            alertDiv2.style.padding = '0.5em';
            alertDiv2.innerHTML = `
                <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:" style="width: 1em; height: 1em;">
                    <use xlink:href="#exclamation-triangle-fill"/>
                </svg>
                <div>
                    CNPJ inválido ou não encontrado.
                </div>
            `;

            erro.appendChild(alertDiv2);
            return null;
        }
        const data = await response.json();
        console.log('Dados do CNPJ:', data);

        document.getElementById('nome_fantasia').value = data.nome_fantasia || '';
        document.getElementById('razao_social').value = data.razao_social || '';
        document.getElementById('data_inicio_atividade').value = data.data_inicio_atividade || '';
        document.getElementById('logradouro').value = data.logradouro || '';
        document.getElementById('bairro').value = data.bairro || '';
        document.getElementById('uf').value = data.uf || '';
        document.getElementById('municipio').value = data.municipio || '';
        document.getElementById('ddd_telefone_1').value = data.ddd_telefone_1 || '';

        if (data.qsa && data.qsa.length > 0) {
            const socio = data.qsa[0];
            document.getElementById('nome_socio').value = socio.nome_socio || '';
            document.getElementById('pais').value = socio.pais || '';
            document.getElementById('codigo_pais').value = socio.codigo_pais || '';
            document.getElementById('faixa_etaria').value = socio.faixa_etaria || '';
            document.getElementById('cnpj_cpf_do_socio').value = socio.cnpj_cpf_do_socio || '';
            document.getElementById('qualificacao_socio').value = socio.qualificacao_socio || '';
            document.getElementById('data_entrada_sociedade').value = socio.data_entrada_sociedade || '';
            document.getElementById('cpf_representante_legal').value = socio.cpf_representante_legal || '';
        }
        cardcontainer.style.display = 'flex';
        return data;
    } catch (error) {
        console.error('Erro ao consultar o CNPJ:', error);
        cardcontainer.style.display = 'none';
        return null;
    }
}

async function editar() {
    const data = await consultarCnpj();
    if (data) {
        console.log('Dados retornados pela função editar:', data);
        document.getElementById('nome_fantasia_edit').value = data.nome_fantasia || '';
        document.getElementById('razao_social_edit').value = data.razao_social || '';
        document.getElementById('data_inicio_atividade_edit').value = data.data_inicio_atividade || '';
        document.getElementById('logradouro_edit').value = data.logradouro || '';
        document.getElementById('bairro_edit').value = data.bairro || '';
        document.getElementById('uf_edit').value = data.uf || '';
        document.getElementById('municipio_edit').value = data.municipio || '';
        document.getElementById('ddd_telefone_1_edit').value = data.ddd_telefone_1 || '';

        if (data.qsa && data.qsa.length > 0) {
            const socio = data.qsa[0];
            document.getElementById('nome_socio_edit').value = socio.nome_socio || '';
            document.getElementById('pais_edit').value = socio.pais || '';
            document.getElementById('codigo_pais_edit').value = socio.codigo_pais || '';
            document.getElementById('faixa_etaria_edit').value = socio.faixa_etaria || '';
            document.getElementById('cnpj_cpf_do_socio_edit').value = socio.cnpj_cpf_do_socio || '';
            document.getElementById('qualificacao_socio_edit').value = socio.qualificacao_socio || '';
            document.getElementById('data_entrada_sociedade_edit').value = socio.data_entrada_sociedade || '';
            document.getElementById('cpf_representante_legal_edit').value = socio.cpf_representante_legal || '';
        }
    } else {
        console.log('Nenhum dado foi retornado.');
    }
}

function saveForm(event) {
    event.preventDefault();

    document.getElementById('loader-container').style.display = 'flex';

    let formValues = {
        nome_fantasia: document.getElementById('nome_fantasia').value,
        razao_social: document.getElementById('razao_social').value,
        data_inicio_atividade: document.getElementById('data_inicio_atividade').value,
        logradouro: document.getElementById('logradouro').value,
        bairro: document.getElementById('bairro').value,
        uf: document.getElementById('uf').value,
        municipio: document.getElementById('municipio').value,
        ddd_telefone_1: document.getElementById('ddd_telefone_1').value,
        nome_socio: document.getElementById('nome_socio').value,
        pais: document.getElementById('pais').value,
        codigo_pais: document.getElementById('codigo_pais').value,
        faixa_etaria: document.getElementById('faixa_etaria').value,
        cnpj_cpf_do_socio: document.getElementById('cnpj_cpf_do_socio').value,
        qualificacao_socio: document.getElementById('qualificacao_socio').value,
        data_entrada_sociedade: document.getElementById('data_entrada_sociedade').value,
        cpf_representante_legal: document.getElementById('cpf_representante_legal').value
    };

    let queryParams = new URLSearchParams(formValues).toString();
    let targetUrl = `index.html?${queryParams}`;

    alert('Alteração feita com sucesso!');

    setTimeout(() => {
        window.location.href = targetUrl;
    }, 1000); 
}