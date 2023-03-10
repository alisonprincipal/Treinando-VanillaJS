import { sucessoAndErro } from "./toastify.js"
const baseUrl ='http://localhost:6278/'

const token = localStorage.getItem('@token')


export const allSetores = async()=>{
    const request = await fetch(`${baseUrl}sectors`)
    const requestJson = await request.json()
    return requestJson  
}
export const allEmpresas = async()=>{
   const request = await fetch(`${baseUrl}companies`)
   const requestJson = await request.json()
   return requestJson
}
export const allEmpresasPorSetor = async(setor)=>{
    const request = await fetch(`${baseUrl}companies/${setor}`)
    const requestJson = await request.json()
    return requestJson  
}
export const requestLogin= async(data)=>{
   try{
    const estrutura = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }

    const request = await fetch(`${baseUrl}auth/login`,estrutura)
    const requestJson = await request.json()

    
    
    if(request.ok){
        localStorage.setItem('@token',requestJson.token)

        sucessoAndErro('Login efetuado com Sucesso!', 'Seja Bem Vindo :)')    
        setTimeout( async ()=>{await  requestPermission(requestJson.token)},3000)
    }else{
        sucessoAndErro('Falha ao efetuar loguin',`Verifique os dados e tente novamente`)
    }
}
catch(error){
    console.log(error)
   }
}
export const requestPermission= async(token)=>{
   try{
        const estrutura = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        }
        const request = await fetch(`${baseUrl}auth/validate_user`,estrutura)
        const requestJson = await request.json()
        const admin = requestJson.is_admin
     
        if(admin){
            window.location.replace('../dashboard/index.html')
        }else{
            window.location.replace('../userpage/index.html')
        } 
    
     }

   catch(error){
    console.log(error)
   }
}
export const requestRegistro= async(data)=>{
    const estrutura = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }

    const request = await fetch(`${baseUrl}auth/register`,estrutura)
    const requestJson = await request.json()
   

    if(request.ok){
        sucessoAndErro('Cadastro realizado com sucesso!', 'Voc?? ser?? direcionado para p??gina de login')
        setTimeout(()=>{window.location.replace('../login/index.html')},3000)
    }else{
        sucessoAndErro('Falha ao realizar cadastro!','Verifique os dados e tente novamente')
    }
   
}

export const requestInfoUser = async ()=>{
    
try{
    const estrutura ={
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
      }
      const request = await fetch(`${baseUrl}users/profile`,estrutura)
      const requestJson = await request.json()
    
      return requestJson

}catch(error){
    console.log(error)
}
}
export const requestDepartamentInfo = async ()=>{
    
    try{
        const estrutura ={
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
          }
          const request = await fetch(`${baseUrl}users/departments`,estrutura)
          const requestJson = await request.json()
        
          return requestJson
          
    }catch(error){
        console.log(error)
    }
 }
export const requestCompanyInfo = async ()=>{
    
    try{
        const estrutura ={
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
          }
          const request = await fetch(`${baseUrl}users/departments/coworkers`,estrutura)
          const requestJson = await request.json()
        
          return requestJson
          
    }catch(error){
        console.log(error)
    }
 }