import { requestInfoUser,requestCompanyInfo,requestDepartamentInfo,requestEditUser, requestProtection } from "../../scripts/request.js";
import { modalEditUser } from "../../modals/modalEditUser.js";

const protectionUserPage =async()=>{
    const permission = await requestProtection()
    console.log(permission)

     if(permission || permission==undefined ){
      window.location.replace('../login/index.html')
    } 
  }
  await protectionUserPage()
  
  


const infoUser= await requestInfoUser()

const templateSectionInfo = ()=>{
    const sectionInfo = document.querySelector('.secInfoUser')
    let modalit = infoUser.kind_of_work
    if(modalit==null){
        modalit=''
    }

    sectionInfo.insertAdjacentHTML('beforeend',`
    <div>
        <h3>${infoUser.username}</h3>
        <div>
            <p>Email:${infoUser.email}</p>
            <p>${infoUser.professional_level}</p>
            <p>${modalit}</p>
        </div>
    </div>
    <button class ='openModal'>
        <img src="../../assets/canetaEdit.svg" alt="">
    </button>
    
    `)
    const btnOpen = document.querySelector('.openModal')
    
    btnOpen.addEventListener('click',async()=>{
        modalEditUser(requestEditUser)
       
    })
}
templateSectionInfo()

const templateInfoCompany = async()=>{
    const infoDepartment = await requestDepartamentInfo()
    const infComapny = await requestCompanyInfo()
    const container =  document.querySelector('.containerUser')
   

    if(infoUser.department_uuid==null){
        container.insertAdjacentHTML('beforeend',`

        <div class="difCondit">
            <h3>Você ainda não foi contratado :(</h3>       
        </div>

        `) 
    }else{
        container.insertAdjacentHTML('beforeend',`
        <section class="inforCompany">
        <h2>Company ${infoDepartment.name} - Department ${infComapny[0].name}</h2>
    
        <ul>
            ${infComapny[0].users.map((element)=>{
                return(
                   ` <li>
                        <p>${element.username}</p>
                        <span>${element.email}</span>
                    </li>`
                )
            }).join('')}
        </ul>
        </section>
        `)
    }
}
templateInfoCompany()

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