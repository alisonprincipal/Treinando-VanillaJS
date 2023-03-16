import { requestDeleteUser } from "../scripts/request.js"

export const modalDeleteUser=(name,id)=>{

    const body = document.querySelector('body')

    body.insertAdjacentHTML('beforeend',`
    <div class='containerDeleteDepartament'>
        <div>
            <button class='closeModal'>X</button>
            <div>
                <h3>Deseja realmente deletar o usuario <strong>${name}</strong>?</h3>
                <button class='btnDelet'>Confirmar</button> 
            </div>        
        </div>
    </div>`)

    const btn= document.querySelector('.closeModal')
    btn.addEventListener('click',(event)=>event.target.offsetParent.offsetParent.remove())

    const btnDelete = document.querySelector('.btnDelet')
    btnDelete.addEventListener('click',async(event)=>{

        await requestDeleteUser(id)
        event.target.offsetParent.offsetParent.remove()
        
    })
}