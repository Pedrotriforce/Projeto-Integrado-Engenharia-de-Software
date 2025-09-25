// Dados dos serviços
const servicos = [
    { 
        nome: "Corte de Cabelo", 
        preco: 50,
        descricao: "Corte personalizado",
        iconeCustom: true,
        iconeUrl: '../assets/images/icone-corte.png'
    },
    { 
        nome: "Coloração", 
        preco: 120,
        descricao: "Técnicas modernas de coloração",
        iconeCustom : true,
        iconeUrl: '../assets/images/icone-coloracao.png'
    },
    { 
        nome: "Manicure", 
        preco: 30,
        descricao: "Cuidados completos para suas mãos",
        iconeCustom : true,
        iconeUrl: '../assets/images/icone-manicure.png'
    },
    { 
        nome: "Pedicure", 
        preco: 40,
        descricao: "Tratamento completo para seus pés",
        iconeCustom: true,
        iconeUrl: '../assets/images/icone-pedicure.png'
    },
    { 
         nome: "Maquiagem", 
        preco: 80,
        descricao: "Maquiagem profissional para qualquer ocasião",
        iconeCustom: true, // Adicione esta flag
        iconeUrl: '../assets/images/icone-maquiagem2.png'
    }
];

// Preencher lista de serviços
if (window.location.pathname.includes('servicos.html')) {
    const listaServicos = document.getElementById('lista-servicos');
    
    servicos.forEach(servico => {
        listaServicos.innerHTML += `
            <div class="col-md-4">
                <div class="card card-servico h-100">
                    <div class="card-body text-center">
                       ${servico.iconeCustom 
                        ? `<img src="${servico.iconeUrl}" alt="${servico.nome}" class="custom-icon">` 
                        : `<i class="bi bi-${servico.icone} display-4 text-pink"></i>`}
                        <h5 class="card-title mt-3">${servico.nome}</h5>
                        <p class="card-text">${servico.descricao}</p>
                        <p class="fw-bold">R$ ${servico.preco.toFixed(2)}</p>
                        <a href="cadastro.html" class="btn btn-sm btn-primary">Agendar</a>
                    </div>
                </div>
            </div>
        `;
    });
}

// Gerenciar cadastro de clientes
if (window.location.pathname.includes('cadastro.html')) {
    const formCadastro = document.getElementById('form-cadastro');
    
    formCadastro.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Recuperar clientes do localStorage ou criar array vazio
        const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
        
        // Obter valores do formulário
        const novoCliente = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            dataCadastro: new Date().toLocaleDateString()
        };
        
        // Adicionar novo cliente e salvar
        clientes.push(novoCliente);
        localStorage.setItem('clientes', JSON.stringify(clientes));
        
        // Feedback e reset
        alert('Cadastro realizado com sucesso!');
        formCadastro.reset();
    });
}
