import { requestInfoUser,requestCompanyInfo,requestDepartamentInfo } from "../../scripts/request.js";
import { modalEditUser } from "../../modals/modalEditUser.js";

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
    
    btnOpen.addEventListener('click',()=>{

        modalEditUser()
    })
}
templateSectionInfo()

const templateInfoCompany = async()=>{
    const infoDepartment = await requestDepartamentInfo()
    const infComapny = await requestCompanyInfo()
    const inforComp = document.querySelector('.inforCompany')
    const divCond =  document.querySelector('.difCondit')
    console.log(infoUser)

    if(infoUser.department_uuid==null){
        divCond.classList.add('opendivCondit')
    }else{
        inforComp.classList.add('openInforCompany')
    }

    divCond.insertAdjacentHTML('beforeend',`

         <h3>Você ainda não foi contratado :(</h3>

         `)
        
    inforComp.insertAdjacentHTML('beforeend',`
    
    <h2>Company ${infoDepartment.name} - Department ${infComapny[0].name}</h2>

        <ul>
            ${infComapny[0].users.map((element)=>{
                return(
                   ` <li>
                        <p>${element.username}</p>
                        <span>${element.email}</span>
                    </li>`
                )
            })}
        </ul>
    `)
}
templateInfoCompany()