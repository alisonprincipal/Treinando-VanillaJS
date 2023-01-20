const baseUrl ='http://localhost:6278/'

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
      await  requestPermission(requestJson.token)
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