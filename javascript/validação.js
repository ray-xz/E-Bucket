// validação para verificar se os campos estão vazios

const button = document.getElementById('btn-1')

button.addEventListener('click', (event) => {
    event.preventDefault()

    const name = document.getElementById('name')
    const idade = document.getElementById('idade')
    const endereço = document.getElementById('endereço')
    const cpf = document.getElementById('cpf')
    const rg = document.getElementById('rg')

    if (name.value == '') {
        name.classList.add("errorInput")
    }

    if (idade.value == '') {
        idade.classList.add("errorInput")
    }

    if (endereço.value == '') {
        endereço.classList.add("errorInput")
    }

    if (cpf.value == '') {
        cpf.classList.add("errorInput")
    }

    if (rg.value == '') {
        rg.classList.add("errorInput")
    }

})