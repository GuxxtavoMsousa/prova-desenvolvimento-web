const email = document.querySelector("#email")
const username = document.querySelector("#username")
const senha = document.querySelector("#senha")
const senhaC = document.querySelector("#senhaC")
const btn = document.querySelector('.button2')







btn.addEventListener('click',function(){
   let nomeValor = username.value
   let tamanhoN = nomeValor.slice(0,1)

   let emailValor = email.value
   let emailM = emailValor.slice(0,1)

   
   
    if(tamanhoN.includes("0") ||tamanhoN.includes("1") || tamanhoN.includes("2") || tamanhoN.includes("3") || tamanhoN.includes("4") || tamanhoN.includes("5") || tamanhoN.includes("6") || tamanhoN.includes("7") || tamanhoN.includes("8") || tamanhoN.includes("9") || 
       username.value === "" || 
       tamanhoN.includes("!") || 
       tamanhoN.includes("@") || 
       tamanhoN.includes("#") || 
       username.value.length < 10 ||
       emailM.includes("1") ||
       email.value.length < 20 ||
       email.value === "" ||
       senha.value.includes("11")|| senha.value.includes("22") || senha.value.includes("33") ||senha.value.includes("44")|| senha.value.includes("55")||senha.value.includes("66")||senha.value.includes("77")||senha.value.includes("88")||senha.value.includes("99")||
       senha.value.includes("aa") || senha.value.includes("bb") || senha.value.includes("cc") ||
       senha.value.length < 8  
       

       ){
        alert("Nome Inválido1")

    }else if (username.value.includes("*") && email.value.includes('@gmail') &&
        email.value.includes('.com') && senha.value.includes('1') && senha.value.includes('!') &&
        senha.value.includes('A') && senha.value === senhaC.value ){
        alert('Nome Valido') 
    }
    else{
        alert("Nome Inválido2")
    }


}) 



