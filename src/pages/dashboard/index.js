import { allEmpresas ,requestAllusers ,requestDepartamentById,requestDepartaments } from "../../scripts/request.js"
import { modalCreateDepartament } from "../../modals/modalCreateDepartament.js"
import { modalEditDepartament } from "../../modals/modalEditDepartament.js"
import { modalDeletDepartament } from "../../modals/modalDeleteDepartament.js"
import { modalInfoDepartament } from "../../modals/modalInfoDepartament.js"
import { modalUpdateUser } from "../../modals/modalUpdateUser.js"
import { modalDeleteUser } from "../../modals/modalDeleteUser.js"

const empresas = await allEmpresas()

const allDepartaments = await requestDepartaments()

const allUsers = await requestAllusers()

const selectDomDashboard = ()=>{
  const ul = document.querySelector('.listaDepartamentos')

  const select = document.querySelector('.selectDashBoard')
  empresas.forEach((element=>{
    select.insertAdjacentHTML('beforeend',`
    <option value=${element.uuid}>${element.name}</option>
    `)
  }))

  select.addEventListener('click',async(event)=>{

    const value  = event.target.value
    
    if(value!=''){
    const departaments= await requestDepartamentById(value)

      if(departaments.length!=0){
        ul.innerHTML=''
         templateSectionEmpresas(departaments)
      }else{
        ul.innerHTML=''
        ul.insertAdjacentHTML('beforeend',`
        <h5>Nenhum departamento cadastrado nessa empresa :(</h5>
        `)
      }
 
    }else{
      ul.innerHTML=''
      templateSectionEmpresas(allDepartaments)
    }
  })
}
selectDomDashboard()

const templateSectionEmpresas =(data)=>{
 
  const ul = document.querySelector('.listaDepartamentos')

  data.forEach((element=>{
    ul.insertAdjacentHTML('beforeend',`
    <li>
      <h5>${element.name}</h5>
      <p>${element.description}</p>
      <p>${element.companies.name}</p>
      <div>
          <button class='btnInfo'>
              <img class='${element.name},${element.description},${element.companies.name}' id='${element.uuid}'  src="../../assets/olho.svg" alt=" imagem de um olho">
          </button>

          <button class='btnCaneta'>
              <img class='${element.description}' id='${element.uuid}' src="../../assets/caneta.svg" alt="imagem de uma caneta">
          </button>

          <button class='btnLixeira'>
              <img class='${element.name}' id='${element.uuid}' src="../../assets/lixeira.svg" alt="imagem de uma lixeira">
          </button>
      </div>
    </li>
    `)
  }))

  const btnInfo = document.querySelectorAll('.btnInfo')
  btnInfo.forEach((btnElement=>{
    btnElement.addEventListener('click',(event)=>{
      const nameAndDescriptionAndCompany  = event.target.className.split(',')
    
      const id = event.target.id
     
      modalInfoDepartament(nameAndDescriptionAndCompany,id) 
    })

  }))

  const btnEdit = document.querySelectorAll('.btnCaneta')
  btnEdit.forEach((btnElement=>{
    btnElement.addEventListener('click',(event)=>{  
      const description = event.target.className
      const id = event.target.id
      modalEditDepartament(description,id)
    })
  }))

  const btnDelet = document.querySelectorAll('.btnLixeira')
  btnDelet.forEach((btnElemet=>{
   btnElemet.addEventListener('click',(event)=>{
    const nameDepartament = event.target.className
    const id = event.target.id
    modalDeletDepartament(nameDepartament,id)
   })
  }))
 

}
templateSectionEmpresas(allDepartaments)

const templateSectionUsers =()=>{
  const ul = document.querySelector('.listaUsuarios')
  ul.insertAdjacentHTML('beforeend',`
  ${
    allUsers.map((element=>{

      let modality = element.kind_of_work
      if(modality==null)modality=''

      if(element.username!='ADMIN'){
        return(
          `
              <li>
                  <h5>${element.username}</h5>
                  <p>${element.professional_level}</p>
                  <p>${modality}</p>
                  <div>
                      <button class='btnEdit'>
                          <img  id ='${element.uuid}' src="../../assets/caneta.svg" alt="imagem de uma caneta">
                      </button>
                      <button class='btnDelete'>
                          <img id =${element.uuid} class='${element.username}' src="../../assets/lixeira.svg" alt="imagem de uma lixeira">
                      </button>
                  </div>
              </li> 
          `
        )
      }
    })).join('')
  }
  `)  

  const btnEdit = document.querySelectorAll('.btnEdit')
  btnEdit.forEach((btnElement=>{
    btnElement.addEventListener('click',(event)=>{
      const id = event.target.id
      modalUpdateUser(id)
    })
  }))  

  const btnDelete = document.querySelectorAll('.btnDelete')
  btnDelete.forEach((btnElement=>{
    btnElement.addEventListener('click',(event)=>{
      const name = event.target.className
      const id = event.target.id
      modalDeleteUser(name,id)
    })
  }))
}

templateSectionUsers()

const createDepartament =  ()=>{
  const btn = document.querySelector('.btnCreate')

  btn.addEventListener('click',(event)=>{
    modalCreateDepartament()
  })
}
createDepartament()

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