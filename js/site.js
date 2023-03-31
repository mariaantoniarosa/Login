function validador() { 
    var email = document.faleconosco.email.value;
    var expRegEmail = new RegExp ("^\\S+@\\S+\\.\\S+$");
    if (!expRegEmail.test(email)) { 
        alert ("Preencha o campo de email corretamente!");
        document.faleconosco.email.focus();
        return false;
    }
    
    if (document.faleconosco.senha.value == document.faleconosco.senha2.value)  { 
        console.log ("Ok");
    }else { 
        alert("As senhas não conferem.");
        return false;
    }
    
    var senha = document.faleconosco.senha.value;
    var expRegSenha= new RegExp("^([A-Z])([a-z]+)([0-9]+)([@!%&#$]{1})$")

    if (!expRegSenha.test(senha)) { 
        alert ("Senha fraca, preencha com caracteres especiais e uma letra maiúscula!");
        document.faleconosco.senha.focus();
        return false;
    }

    


    return true;
}