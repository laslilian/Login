var count= 3;
function validate() {
    var un = document.myform.username.value;
    var pw = document.myform.pword.value;
    var valid = false;
    var unArray = ["admin"]; //usuário
    var pwArray = ["admin"]; //senha

    for (var i=0; i <unArray.length; i++) {
        if((un == unArray[i]) && (pw == pwArray[i])) {
        valid = true;
    break;
        }
    }

    if(valid) {
        window.location = "https://www.youtube.com/"; //direciona usuário para uma página ao acertar a senha e usuário
    return false;
    }

// Tentativas
    if (count >= 1) {
    alert ("Dados incorretos, tente novamente");
    count --;
}

    else {
    alert ("Usuário bloqueado")
}
}