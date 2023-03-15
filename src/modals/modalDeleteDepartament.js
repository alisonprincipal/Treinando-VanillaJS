import { requestDeleteDepartament } from "../scripts/request.js"

export const modalDeletDepartament=(name,id)=>{

    const body = document.querySelector('body')
    body.insertAdjacentHTML('beforeend',`
    <div class='containerDeleteDepartament'>
        <div>
            <button class='closeModal'>X</button>
            <div>
                <h3>Deseja realmente deletar o departamento <strong>${name}</strong> 
                e demitir seus funcionários?</h3>

                <button class='btnDelet'>Confirmar</button> 
            </div>        
        </div>
    </div>`)


    const btnClose = document.querySelector('.closeModal')
    btnClose.addEventListener('click',(event)=>event.target.offsetParent.offsetParent.remove())

    const bntDelete = document.querySelector('.btnDelet')
    bntDelete.addEventListener('click',async(event)=>{
        await requestDeleteDepartament(id)
        event.target.offsetParent.offsetParent.remove()
    })

}