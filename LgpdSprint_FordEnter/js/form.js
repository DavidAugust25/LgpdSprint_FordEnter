
// classe contato

class contato {
    constructor (nome,email,telefone,mensagem,contato) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.mensagem = mensagem;
        this.contato = contato;
    }
}

let userAgreedLgpd = false;
let userAgreedMail = false;
let isValid = true;

function UserAgreedLgpd() {
    let userCheckLgpd = document.getElementById('lgpd');
    if(userCheckLgpd.checked){
      userAgreedLgpd = true;
    } else {
      userAgreedLgpd = false;
    }
    console.log("User agreed to the terms and conditions: " + userAgreedLgpd);
}

function UserAgreedMail() {
    let userCheckMail = document.getElementById('mail');
    if(userCheckMail.checked){
      userAgreedMail = true;
    } else {
      userAgreedMail = false;
    }
   // enviarEmail();
    console.log("User agreed to receiving e-mails: " + userAgreedMail);
}


function Post(form) {
    isValid = true;
    const inputs = form.querySelectorAll('.fordform');
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            alert(`O campo ${input.placeholder} não pode conter apenas espaços!`);
            isValid = false;
            input.focus();
        }
    });
    if (!isValid) return;

  let data = new contato(
    form.elements.namedItem("nome").value,
    form.elements.namedItem("email").value,     
    form.elements.namedItem("telefone").value,
    form.elements.namedItem("mensagem").value,  
    form.elements.namedItem("contato").value,
);
    console.log(data);

Enviar();
}

// Mesmo problema mencionado no header

// function enviarEmail() {
// emailjs.init({
//   publicKey: 'oHFXkio-AV0yG-7Gp',
// });
// }

function Enviar() {
    let nome = document.getElementById("nome");

    if (isValid == true) {
        alert('Obrigado sr(a) ' + nome.value  + ' os seus dados foram encaminhados com sucesso');
     }
     // Tentarei fazer esse código funcionar depois

     // if (userAgreedMail === true) {
     //    emailjs.send("service_gnw58x6","template_xv3kjed", parameters);
     // }
}