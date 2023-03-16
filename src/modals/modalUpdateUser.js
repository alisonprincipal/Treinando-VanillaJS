import { requestUpdateUser } from "../scripts/request.js"

export const modalUpdateUser =(id)=>{
    const body = document.querySelector('body')
    body.insertAdjacentHTML('beforeend',`
    <div class='containerUpdateUser'>
        <div>
                <button class='closeModal'>X</button>
                <form class ='formEdit'action="" class='formCreat'>
                    <h2>Editar Usuário</h2>
                    <select name="kind_of_work" id="">
                        <option value="">Selecionar modalidade de trabalho</option>
                        <option value="home office">home office</option>
                        <option value="presencial">presencial</option>
                        <option value="hibrido">hibrido</option>
                    </select>
           
                    <select name="professional_level" id="">
                        <option value="">Selecionar nível profissional</option>
                        <option value="estágio">estágio</option>
                        <option value="júnior">júnior</option>
                        <option value="pleno">pleno</option>
                        <option value="sênior">sênior</option>
                    </select>

                    <button class='editBtn'>Editar</button>
                </form>
        </div>
    </div>`)

    const btn = document.querySelector('.closeModal')
    btn.addEventListener('click',(event)=>event.target.offsetParent.offsetParent.remove())

    const btnEdit = document.querySelector('.editBtn')
    const form = document.querySelector('.formEdit')
    const values = [...form]
    let object ={}
    btnEdit.addEventListener('click',async(event)=>{
        event.preventDefault()
        values.forEach((element=>{
            if(element.tagName=='SELECT' && element.value!=''){
                   object[element.name]=element.value
            }
        }))
      
        const result = await requestUpdateUser(object,id)
        if(result){
            event.target.offsetParent.offsetParent.remove()
        }
        
    })

}