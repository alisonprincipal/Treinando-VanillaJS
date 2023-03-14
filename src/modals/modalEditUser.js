export const modalEditUser =()=>{
    const div = document.querySelector('.containerEdit')

    div.insertAdjacentHTML('beforeend',`
    <div class='containerEditUser'>
        <div>
                <button class='closeModal'>X</button>
                <form action="">
                    <h2>Editar Perfil</h2>
                    <input type="text" name="" id="" placeholder="Seu nome">
                    <input type="text" name="" id="" placeholder="Seu e-mail">
                    <input type="text" name="" id="" placeholder="Sua senha">
                    <button>Editar perfil</button>
                </form>
        </div>
    </div>
    `)

    const btn =document.querySelector('.closeModal')
    btn.addEventListener('click' , (event)=>{
         event.target.offsetParent.offsetParent.remove()
    })

}