import { allEmpresas } from "../scripts/request.js"
import { requestCreateDepartament } from "../scripts/request.js"
const empresas = await allEmpresas() 
export const modalCreateDepartament =()=>{
    const body = document.querySelector('body')
    body.insertAdjacentHTML('beforeend',`
    <div class='containerCreateDepartament'>
        <div>
                <button class='closeModal'>X</button>
                <form action="" class='formCreat'>
                    <h2>Criar Departamento</h2>
                    <input type="text" name="name" placeholder="Nome do departamento">
                    <input type="text" name="description"  placeholder="Descrição">
                    <select name="company_uuid" id="">
                        <option value="Selecionar empresa">Selecionar empresa</option>
                        ${empresas.map((element=>{
                            return(
                                ` <option value="${element.uuid}">${element.name}</option>`
                            )
                        }))}
                    </select>
                    <button class='createBtn'>Criar departamento</button>
                </form>
        </div>
    </div>`)

    const btnClose = document.querySelector('.closeModal')
    btnClose.addEventListener('click',(event)=>{
        event.target.offsetParent.offsetParent.remove()
    })

    const btnCreate = document.querySelector('.createBtn')
    const form = document.querySelector('.formCreat')
    const formInputAndSelect = [...form]
    const objectValues={}
    btnCreate.addEventListener('click',async(event)=>{
        event.preventDefault()
        formInputAndSelect.forEach((element)=>{
            if(element.tagName=='INPUT'  ||element.tagName=='SELECT'){
                objectValues[element.name]=element.value
            }
        })
 
      const result = await requestCreateDepartament(objectValues)
     if(result){
        event.target.offsetParent.offsetParent.remove()
     }


    })

}