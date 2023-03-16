export const modalInfoDepartament =()=>{

    const body = document.querySelector('body')
    
    body.insertAdjacentHTML('beforeend',`
    <div class='containerInfoDepartament'>
        <div>
            <button class='closeModal'>X</button>       
            <h3>Nome do Departamento</h3>
            <div>
                <div>
                    <h5>Descrição do departamento</h5>
                    <p>Empresa pertencente</p>
                </div>
                <form>
                    <select name="">
                        <option value="Selecionar Usuário">Selecionar Usuário</option>
                    </select>
                    <button>Contratar</button>
                </form>
            </div>

            <ul>
                <li>
                    <div>
                        <h5>UserName</h5>
                        <p>Pleno</p>
                        <p>Company Name</p>
                    </div>
                    <button>Desligar</button>
                </li>
            </ul>
        </div>
    </div>`)

    const btn = document.querySelector('.closeModal')
    btn.addEventListener('click',(event)=>event.target.offsetParent.offsetParent.remove())
}