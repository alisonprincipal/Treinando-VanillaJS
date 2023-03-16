import { requestAllusersNotDepartament , requestAllusers } from "../scripts/request.js"

const allUserNotDepartament = await requestAllusersNotDepartament()

const allUsers = await requestAllusers()

export const modalInfoDepartament =(descriptionAndCompany,id)=>{
   

    const body = document.querySelector('body')
    
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
                <form>
                    <select name="">
                        <option value="Selecionar Usuário">Selecionar Usuário</option>
                        ${allUserNotDepartament.map((element=>{
                            return(
                                ` <option value="${element.uuid}">${element.username}</option>`
                            )
                        }))}
                    </select>
                    <button>Contratar</button>
                </form>
            </div>
            <ul>
            ${
                allUsers.map((element=>{
                    if(element.department_uuid==id){
                        return(
                            `
                              <li>
                                  <div>
                                      <h5>${element.username}</h5>
                                      <p>${element.professional_level}</p>
                                      <p>${descriptionAndCompany[2]}</p>
                                  </div>
                                  <button>Desligar</button>
                              </li>
                              `
                        )}
                })).join('')
            }
            </ul>
        </div>
    </div>`)

    const btn = document.querySelector('.closeModal')
    btn.addEventListener('click',(event)=>event.target.offsetParent.offsetParent.remove())

}

