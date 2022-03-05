const checkEmail = (value) => {

    if(!validateEmail(value)){
        return { message: 'Informe um email válido.', error: true }
    }

    return { message: '', error: false }
}

const checkPassword = (value) => {

    if(value === ""){
        return { message: 'Este campo é obrigatório.', error: true }
    }

    if(value.length < 6){
        return { message: 'Este campo precisa ter no mínimo 6 caracteres.', error: true }
    }

    return { message: '', error: false }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function authenticate(email, password) {
    return { message: "Senha incorreto, tente novamente.", error: true, reference: 'password' }
}
export { checkEmail, checkPassword, authenticate }