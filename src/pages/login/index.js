import { requestLogin } from "../../scripts/request.js"
const login=()=>{

    const input = document.querySelectorAll('.formLogin > input') 
    const btn = document.querySelector('.goLogin')

    const lg ={}

    btn.addEventListener('click', async(event)=>{
        event.preventDefault()
        input.forEach((element)=>{
            lg[element.name]= element.value
            element.value=''
        })
       const token= await requestLogin(lg)
    })
   
}
login()