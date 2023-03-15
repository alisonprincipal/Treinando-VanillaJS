import { sucessoAndErro } from "./toastify.js"
const baseUrl ='http://localhost:6278/'

const token = localStorage.getItem('@token')
export const test=()=>{}


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
        sucessoAndErro('Cadastro realizado com sucesso!', 'Você será direcionado para página de login')
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

export const requestEditUser = async(data)=>{

    const verify  = Object.values(data)
    if(verify.length!=0){
        try{
            const estrutura = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data),
            }
        
            const request = await fetch(`${baseUrl}users`,estrutura)
             await request.json()
        
            if(request.ok){
                sucessoAndErro('Alteração realizada com Sucesso','Dado(s) atualizado(s) :)')
                setTimeout(()=>{window.location.reload()},3000)
               
               
            }else{               
                    sucessoAndErro(`Falha ao atualizar os dados, tente novamente`,`Nenhum dado(s)  foi atualizado :( `)
            }
           }
           catch(error){
            console.log(error.message)
           }

    }

   
}
export const requestDepartaments=async()=>{

    const estrutura = {
        method:'GET',
        headers:{
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
    }

    const request = await fetch(`${baseUrl}departments`,estrutura)
    const requestJson = await request.json()

    return requestJson
}
export const requestDepartamentById=async(data)=>{

    const estrutura = {
        method:'GET',
        headers:{
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
    }

    const request = await fetch(`${baseUrl}departments/${data}`,estrutura)
    const requestJson = await request.json()

    return requestJson
}
export const requestCreateDepartament=async(data)=>{
try{

    const estrutura = {
        method:'POST',
        headers:{
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }
    const request = await fetch(`${baseUrl}departments`,estrutura)
    const requestJson = await request.json()

    

    if(request.ok){
        sucessoAndErro('Departamento criado com Sucesso',`Agora o Departamento ${data.name} faz parte da nossa empresa :)`)
        setTimeout(()=>{window.location.reload()},3000)
    }else{
        sucessoAndErro('Error ao criar Departamento','Verifique se todos os campos foram preenchidos e tente novamente')
    }
    return request.ok
}
catch(error){
    console.log(error)
}
}
export const requestEditDepartament=async(data,id)=>{
    try{
    
        const estrutura = {
            method:'PATCH',
            headers:{
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        }
        const request = await fetch(`${baseUrl}departments/${id}`,estrutura)
        await request.json()
    
        
    
        if(request.ok){
            sucessoAndErro('Descrição alterada com Sucesso',`Dados atualizados :)`)
            setTimeout(()=>{window.location.reload()},3000)
        }else{
            sucessoAndErro('Error ao editar Departamento','Tente novamente ;)')
        }
        return request.ok
    }
    catch(error){
        console.log(error)
    }
    }

