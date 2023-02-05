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

const logicHamburguer = ()=>{
    const imgHamburguer =  document.querySelector('.hamburguer')
    const container = document.querySelector('.containerHamburguer')
    imgHamburguer.addEventListener('click',()=>{
      if(!imgHamburguer.id){
          imgHamburguer.src = '../../assets/close.svg' 
          imgHamburguer.id = 'close'
          container.id='goOpen'
      }else{
          imgHamburguer.src = '../../assets/open.svg'
          imgHamburguer.id=''
          container.id=''
      }  
  
  
  
    })
  }
  logicHamburguer()