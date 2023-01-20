import { requestRegistro } from "../../scripts/request.js"
export const requestCadastro =()=>{
    const btn = document.querySelector('.btnRegistro')
    const form = document.querySelector('.formRegister')
    const values = [...form.elements]
    const bg ={}

    btn.addEventListener('click',async(event)=>{
        event.preventDefault()
        values.forEach((element)=>{
            if(element.tagName=='INPUT'||element.tagName=='SELECT' && element.value!=''){
                bg[element.name]=element.value   
                element.value='' 
            }
        })
        await requestRegistro(bg)
    })
}
requestCadastro()