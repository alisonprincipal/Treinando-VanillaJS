import { requestAllusersNotDepartament , requestAllusers, requestContractUser, requestDemissionUser } from "../scripts/request.js"

const allUserNotDepartament = await requestAllusersNotDepartament()

const allUsers = await requestAllusers()

export const modalInfoDepartament =(descriptionAndCompany,id)=>{

    const body = document.querySelector('body')

    const desempregados = allUsers.filter((element)=>element.department_uuid==id)
    
    body.insertAdjacentHTML('beforeend',`
    <div class='containerInfoDepartament'>
        <div>
            <button class='closeModal'>X</button>       
            <h3>${descriptionAndCompany[0]}</h3>
            <div>
                <div>
                    <h5>${descriptionAndCompany[1]}</h5>
                    <p>${descriptionAndCompany[2]}</p>
                </div>
                <form class='formInfo'>
                    <select name="" required >
                        <option value="">Selecionar Usuário</option>
                        ${allUserNotDepartament.map((element=>{
                            return(
                                ` <option value="${element.uuid}">${element.username}</option>`
                            )
                        }))}
                    </select>
                    <button type='submit' class='btnContratar'>Contratar</button>
                </form>
            </div>
            <ul>
            ${
                desempregados.length!=0?desempregados.map((element=>{
                    return(
                        `
                          <li>
                              <div>
                                  <h5>${element.username}</h5>
                                  <p>${element.professional_level}</p>
                                  <p>${descriptionAndCompany[2]}</p>
                              </div>
                              <button class='btnDemission' id='${element.uuid}'>Desligar</button>
                          </li>
                          `
                    )
            })).join(''): `<h3>O Departamento não contratou nenhum funcionário</h3>`
                
            }
            </ul>
        </div>
    </div>`)

    const btn = document.querySelector('.closeModal')
    btn.addEventListener('click',(event)=>event.target.offsetParent.offsetParent.remove())

    const btnContrato = document.querySelector('.btnContratar')
    const form = document.querySelector('.formInfo')
    const valueForm =[...form]
    let object={}
    btnContrato.addEventListener('click',async(event)=>{
        event.preventDefault()
        valueForm.forEach((element=>{
            if(element.tagName=='SELECT' && element.value!=''){
                object={
                    user_uuid:element.value,
                    department_uuid:id
                }  
            }
        }))
        
        const result = await requestContractUser(object)
        if(result)setTimeout(()=>event.target.offsetParent.offsetParent.remove())
        
    })

    const btnDemission = document.querySelectorAll('.btnDemission')
    btnDemission.forEach((btnElement=>{
       btnElement.addEventListener('click',async(event)=>{
        
        const id = event.target.id

         await requestDemissionUser(id)

        event.target.offsetParent.offsetParent.remove()

       })
    }))

}

