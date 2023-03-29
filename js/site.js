function validador() { 
    var email = document.faleconosco.email.value;
    var expRegEmail = new RegExp ("^\\S+@\\S+\\.\\S+$");
    if (!expRegEmail.test(email)) { 
        alert ("Preencha o campo de email corretamente!");
        document.faleconosco.email.focus();
        return false;
    }
     
    

    return true;
}