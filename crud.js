document.querySelector("#salvar").addEventListener("click", cadastrar)
function cadastrar(){

    const nome = document.querySelector("#nome").value
    const descricao = document.querySelector("#descricao").value
    const categoria = document.querySelector("#categoria").value
    const modal =  bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))

    const tarefa ={
        nome: nome,
        descricao: descricao,
        categoria: categoria
    }
    
    if(!validar(tarefa.nome, document.querySelector("#nome"))) return
    if(!validar(tarefa.descricao, document.querySelector("#descricao"))) return

    /* if  nome= ao nome do remedio e categoria=remedios
       ou cria um select com os remedios disponiveis*/
    document.querySelector("#tarefas").innerHTML += createCard(tarefa)
    
    modal.hide()
}

function validar(valor, campo){
    if(valor==""){
        campo.classList.add("is-invalid")
        campo.classList.remove("is-valid")
        return false
    }
    campo.classList.remove("is-invalid")
    campo.classList.add("is-valid")
    return true
}

function apagar(botao){
    botao.parentNode.parentNode.parentNode.remove()
}

function createCard(tarefa){
    return `
    <div class="col-lg-3 col-md-6 col-12 mt-3">
        <div class="card">
            <div class="card-header">
                ${tarefa.nome}
            </div>
            <div class="card-body">
                <p class="card-text">${tarefa.descricao}</p>
                <!--Badge é tipo um Label, colocamos o badge dentro de um paragrafo pois o span é inline-->
                <p>
                    <span class="badge text-bg-danger">${tarefa.categoria}</span>
                    </p>
                <a href="#" class="btn btn-success" title="Marcar como concluída">
                    <!--é o icone-->
                    <i class="bi bi-cart-plus"></i>
                </a>
            
                <a onClick="apagar(this)" href="#" class="btn btn-danger" title="Apagar tarefa">
                    <!--é o icone-->
                    <i class="bi bi-cart-dash"></i>
                </a>
            </div>
        </div><!-- Fechamento do card-->
    </div><!-- Fechamento da coluna-->    
    `
}