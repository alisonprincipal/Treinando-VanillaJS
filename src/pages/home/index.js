import { allEmpresas, allSetores,allEmpresasPorSetor } from "../../scripts/request.js";
const empresas = await allEmpresas()

const ul = document.querySelector('.listaEmpresas')

const  listSetores= async()=>{

    const setores = await allSetores()

    const select = document.querySelector('.selecSetor')

   setores.map((element)=>{
     select.insertAdjacentHTML('beforeend',`
        <option value="${element.description}">${element.description}</option>
        `)
    })
   
    select.addEventListener('click', async()=>{
        ul.innerHTML=''
        
        const value = select.value

        if(value!=''){
           const listFiltro= await allEmpresasPorSetor(value)
           listEmpresas(listFiltro)
       }else{
            listEmpresas(empresas)
       }
    })


}
listSetores()

const listEmpresas =(lista)=>{
    lista.forEach(element => {
        ul.insertAdjacentHTML('beforeend',`     
            <li>
            <h3>${element.name}</h3>
            <p>${element.opening_hours}</p>
            <span>${element.sectors.description}</span>
            </li>
        `)        
    });

}
listEmpresas(empresas)

const logicHamburguer = ()=>{
  const imgHamburguer =  document.querySelector('.hamburguer')
  const container = document.querySelector('.containerHamburguer')
  imgHamburguer.addEventListener('click',()=>{
    if(!imgHamburguer.id){
        imgHamburguer.src = 'src/assets/close.svg' 
        imgHamburguer.id = 'close'
        container.id='goOpen'
    }else{
        imgHamburguer.src = 'src/assets/open.svg'
        imgHamburguer.id=''
        container.id=''
    }  



  })
}
logicHamburguer()