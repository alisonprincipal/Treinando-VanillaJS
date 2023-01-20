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