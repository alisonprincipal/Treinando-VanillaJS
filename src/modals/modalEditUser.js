export const modalEditUser =(functionEdit)=>{
    const body = document.querySelector('body')

    body.insertAdjacentHTML('beforeend',`
    <div class='containerEditUser'>
        <div>
                <button class='closeModal'>X</button>
                <form action="">
                    <h2>Editar Perfil</h2>
                    <input type="text" name="username" placeholder="Seu nome">
                    <input type="text" name="email"  placeholder="Seu e-mail">
                    <input type="text" name="password" placeholder="Digite uma nova senha">
                    <button class='editBtn'>Editar perfil</button>
                </form>
        </div>
    </div>
    `)

    const btn =document.querySelector('.closeModal')
    btn.addEventListener('click' , (event)=>{
         event.target.offsetParent.offsetParent.remove()
    })

    const btnEdit = document.querySelector('.editBtn')
    let object ={}

    btnEdit.addEventListener('click',async(event)=>{
        event.preventDefault()
        const inputValues = event.target.form
        const values = [...inputValues]
        

        values.forEach((element)=>{
            if(element.name && element.value!=''){
                 object[element.name]=element.value
            }
        }) 
        await functionEdit(object)

      event.target.offsetParent.offsetParent.remove()
        
    })

}