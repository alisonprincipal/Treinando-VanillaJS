export function sucessoAndErro(titulo, mensagem) {
    const body = document.querySelector('body')
    const div = document.createElement('div')
    div.id ='containerMensagem'
    const divimg = document.createElement('div')
    if (titulo == 'Login efetuado com Sucesso!'||titulo == 'Cadastro realizado com sucesso!'||
    titulo=='Dado(s) atualizado com sucesso'||titulo=='Departamento criado com Sucesso'||
    titulo=='Usuário Contratado!'||titulo=='Funcionário Demitido!'||titulo=='Departamento Excluído com sucesso'||
    titulo=='Descrição alterada com Sucesso'||titulo=='Alteração realizada com Sucesso'|| titulo=='Usuário excluído com sucesso!') {
        div.classList.add('sucesso')
    }else {
        div.classList.add('errorrr')
    }

    const h3 = document.createElement('h3')
    h3.innerText = titulo
    divimg.append(h3)
    const saudacao = document.createElement('p')
    saudacao.innerText=mensagem 
    div.append(divimg,saudacao)
    body.appendChild(div)
}

