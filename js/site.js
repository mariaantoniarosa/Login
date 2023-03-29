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
    }
    
    


    return true;
}