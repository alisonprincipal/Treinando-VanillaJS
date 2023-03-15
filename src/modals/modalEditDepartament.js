import { requestEditDepartament } from "../scripts/request.js"

export const modalEditDepartament =(description,id)=>{
    const body = document.querySelector('body')
    body.insertAdjacentHTML('beforeend',`
    <div class='containerEditDepartament'>
        <div>
                <button class='closeModal'>X</button>
                <form class ='formEdit'action="" class='formCreat'>
                    <h2>Editar Departamento</h2>
                    <textarea name="description" id="" cols="20" rows="10">${description}</textarea>
                    <button class='editBnt'>Salvar alterações</button>
                </form>
        </div>
    </div>`)


    const btnClose = document.querySelector('.closeModal')
    btnClose.addEventListener('click',(event)=>{
        event.target.offsetParent.offsetParent.remove()
    })
    const form = document.querySelector('.formEdit')
    const formValue = [...form]
    const btnEdit = document.querySelector('.editBnt')
    const object ={}

    btnEdit.addEventListener('click',async(event)=>{
        event.preventDefault()

        formValue.forEach((element=>{
            if(element.tagName=='TEXTAREA'){
                object[element.name]=element.value
            }
        }))

       const result= await requestEditDepartament(object,id)

       if(result){
        event.target.offsetParent.offsetParent.remove()
       }
    })
  
}