let sites = [
    {"id":1,"nome":"dfilitto","endereco":"www.dfilitto.com.br"},
    {"id":2,"nome":"make indie games","endereco":"http://www.makeindiegames.com.br"}
];
 
let editandoId = null;
const form = document.getElementById('site-form');
const nomeInput = document.getElementById('nome');
const enderecoInput = document.getElementById('endereco');
const siteIdInput = document.getElementById('site-id');
const submitBtn = document.getElementById('submit-btn');
const cancelarBtn = document.getElementById('cancelar-btn');
const formTitle = document.getElementById('form-title');
const tabelaBody = document.getElementById('sites-body');
 
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = nomeInput.value.trim();
    const endereco = enderecoInput.value.trim();

    if (editandoId !== null)
    {
        // Editando um registro
        const index = sites.findIndex(site => site.id == editandoId);
        if (index !== -1){
            sites[index] = {id:editandoId, nome, endereco}
        }
    sairDoModoEdicao();

    }
    
    else 
    {
        // Cadastrando um novo registro
        const novoId = sites.length > 0? Math.max(...sites.map(site => site.id))+1 : 1;
    sites.push({id:novoId, nome, endereco});
    }


    //voltar aqui
    renderizarTabela();
    limparFormulario();
});
 
function limparFormulario(){
    form.reset();
    siteIdInput.value = '';
}
function renderizarTabela(){
    tabelaBody.innerHTML = "";
   
    sites.forEach(site => {
        //linha
        const tr = document.createElement('tr');
        //coluna
        const tdNome = document.createElement('td');
        tdNome.textContent = site.nome;
        //coluna
        const tdEndereco = document.createElement('td');
        //link
        const link = document.createElement('a');
        link.href = site.endereco.startsWith('http')? site.endereco: `http://${site.endereco}`;
        link.textContent = site.endereco;
        link.target = '_blank';
        tdEndereco.appendChild(link);
        //coluna
        const tdAcoes = document.createElement('td');
        tdAcoes.className = 'acoes';
        //botao editar
        const editarBtn = document.createElement('button');
        editarBtn.textContent = 'Editar';
        editarBtn.addEventListener('click', () => editarSite(site.id))
        //botao excluir
        const excluirBtn = document.createElement('button');
        excluirBtn.textContent = 'Excluir';
        excluirBtn.className = 'cancelar';
       excluirBtn.addEventListener('click', () => excluirSite(site.id));
        //adicionar os botões na coluna
        tdAcoes.appendChild(editarBtn);
        tdAcoes.appendChild(excluirBtn);
        //montar a linha
        tr.appendChild(tdNome);
        tr.appendChild(tdEndereco);
        tr.appendChild(tdAcoes);
        //colocar a linha no corpo da tabela
        tabelaBody.appendChild(tr);
    });
 
}
 
function excluirSite(id){
    if(confirm('Tem certeza? Certeza mesmo!!!!')){
        sites = sites.filter(site => site.id != id);
        renderizarTabela();
        //voltar aqui....
    }
}
cancelarBtn.addEventListener('click',sairDoModoEdicao);
renderizarTabela();

function editarSite(id) {
    const site= sites.find(site => site.id === id)
    if (site)
    {
        editandoId = id;
        nomeInput.value = site.nome;
        enderecoInput.value = site.endereco;
        siteIdInput.value = id;
        formTitle.textContent = "Editar Site";
        submitBtn.textContent = "Altualizar";
        cancelarBtn.style.display = "inline-block"
        nomeInput.focus();
    }
}

function sairDoModoEdicao(){
    editandoId = null;
    limparFormulario();
    formTitle.textContent = 'Adicionar Novo site';
    submitBtn.textContent = 'Salvar';
    cancelarBtn.style.display = 'none';
}


/*
let sites = [
    {"id":1,"nome":"dfilitto","endereco":"www.dfilitto.com.br"},
    {"id":2,"nome":"make indie games","endereco":"http://www.makeindiegames.com.br"}
];

let editandoId = null;
const form = document.getElementById('site-form');
const nomeInput = document.getElementById('nome');
const enderecoInput = document.getElementById('endereco');
const siteIdInput = document.getElementById('site-id');
const submitBtn = document.getElementById('submit-btn');
const cancelarBtn = document.getElementById('cancelar-btn');
const formTitle = document.getElementById('form-title');
const tabelaBody = document.getElementById('sites-body');

form.addEventListener('submit', function(e) {
    e.preventDefaut();
    console.log("dasdasd");
    const nome = nomeInput.value.trim();
    const endereco = enderecoInput.value.trim();

    // Voltar aqui
    const novold = sites.length > 0? Math.max(...sites.map(site => site.id)) +1 : 1;
    sites.push({ id:novold, nome, endereco});
    renderizarTabela();
});


function renderizarTabela(){
    tabelaBody.innerHTML = "";
    
    sites.forEach(site => {
        //linha
        const tr = document.createElement('tr');
        //coluna
        const tdNome = document.createElement('td');
        tdNome.textContent = site.nome;
        //coluna
        const tdEndereco = document.createElement('td');
        //link
        const link = document.createElement('a');
        link.href = site.endereco.startsWith('http')? site.endereco: `http://${site.endereco}`;
        link.textContent = site.endereco;
        link.target = '_blank';
        tdEndereco.appendChild(link);
        //coluna
        const tdAcoes = document.createElement('td');
        tdAcoes.className = 'acoes';
        //botao editar
        const editarBtn = document.createElement('button');
        editarBtn.textContent = 'Editar';
        //botao excluir
        const excluirBtn = document.createElement('button');
        excluirBtn.textContent = 'Excluir';
        excluirBtn.className = "cancelar"
        excluirBtn.addEventListener("click", () =>  excluirSite(site.id));

        //adicionar os botões na coluna
        tdAcoes.appendChild(editarBtn);
        tdAcoes.appendChild(excluirBtn);
        //montar a linha
        tr.appendChild(tdNome);
        tr.appendChild(tdEndereco);
        tr.appendChild(tdAcoes);
        //colocar a linha no corpo da tabela
        tabelaBody.appendChild(tr);
    });

}

function excluirSite(id){
    if(confirm('Tem certeza? Certeza mesmo!!!!')){
        sites = sites.filter(site => site.id != id);
        renderizarTabela();
        //voltar aqui....
    }
}

renderizarTabela();
*/