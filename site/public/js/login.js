window.addEventListener('load',function(){
    let formulario = document.querySelector('.boxlogin');
    //console.log(formulario);
    formulario.addEventListener('submit',function(evento){
        
        if(!validaciones(evento)){
            evento.preventDefault();
            
        }else{
            formulario.submit();
        }    

        function validaciones(evento){
       
          //Destructuring  
          let {email, password } = formulario.elements;
          let errores = [];
          console.log(formulario.elements.email);
        //Validar el email - Expresiones Regulares https://www.w3schools.com/jsref/jsref_obj_regexp.asp       https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

        let reEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
        if(!reEmail.test(email.value)){
            errores.push('El email es inválido...');
            email.classList.add('input-invalid'); 
              
            
      }else{
          email.classList.add('input-valid');
           email.classList.remove('input-invalid');
       }
       //Aquí valido el password haciendo uso de Expresiones Regulares
       //Esta expresión regular valida como Mínimo seis caracteres, al menos una letra y un número:
        let rePassword = /{8,}$/
        if(!rePassword.test(password.value)){errores.push('La contraseña como mínimo debe tener seis caracteres, al menos una letra y un número');
           password.classList.add('input-invalid');   
         //password.value.length <8 
       }else{
           password.classList.add('input-valid');
          password.classList.remove('input-invalid');
      }

         //Aquí enviamos los errores al usuario
         let ulErrores = document.getElementById('errores');
         ulErrores.classList.add('alert-danger')
         if(errores.length > 0){
             
             evento.preventDefault();
             ulErrores.innerHTML = "";
             for (let i = 0 ; i < errores.length; i++){
               ulErrores.innerHTML += `<li> ${errores[i]} </li> `
             }
             errores = [];
         }else{
             return true;
         } 
       }
        
    })
















})