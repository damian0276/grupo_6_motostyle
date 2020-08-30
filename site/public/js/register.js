window.addEventListener('load',function(){
    //Capturar el formulario 
    let formulario = document.querySelector('rounded');
    //console.log(formulario.elements.email.value);
    formulario.addEventListener('submit',function(evento){
        if(!validaciones(evento)){
            evento.preventDefault();
        }else{
            formulario.submit();
        }    

        function validaciones(evento){
          //Destructuring  
          let {avatar,firstName, lastName, email, password, confirmPassword  } = formulario.elements;
          let errores = [];
          console.log(formulario.elements.confirm_password.value);
          //Validar Nombre
          if(firstName.value == ''){
              errores.push('El campo nombre no puede estar vacio...');
              firstName.classList.add('input-invalid');   
              //errores['firstName'] = 'El campo nombre no puede estar vacio...';
          }else{
              firstName.classList.add('input-valid');
              firstName.classList.remove('input-invalid');
          }

          //Validar Apellido
          if(lastName.value == ''){
            errores.push('El campo apellido no puede estar vacio...');
            lastName.classList.add('input-invalid');   
            //errores['lastName'] = 'El campo nombre no puede estar vacio...';
        }else{
            lastName.classList.add('input-valid');
            lastName.classList.remove('input-invalid');
        }
        //Validar el email - Expresiones Regulares https://www.w3schools.com/jsref/jsref_obj_regexp.asp       https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
        let reEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   
        if(!reEmail.test(email.value)){
            errores.push('El email es inválido...');
            email.classList.add('input-invalid');   
            //errores['last_name'] = 'El campo nombre no puede estar vacio...';
        }else{
            email.classList.add('input-valid');
            email.classList.remove('input-invalid');
        }
        //Aquí valido el password haciendo uso de Expresiones Regulares
        //Esta expresión regular valida como Mínimo seis caracteres, al menos una letra y un número:
        let rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        if(!rePassword.test(password.value)){
            errores.push('La contraseña como mínimo debe tener seis caracteres, al menos una letra y un número');
            password.classList.add('input-invalid');   
            //errores['last_name'] = 'El campo nombre no puede estar vacio...';
        }else{
            password.classList.add('input-valid');
            password.classList.remove('input-invalid');
        }
        //Aquí valido a que la confirmación del password no llegue vacia
        if(confirmPassword.value == ""){
            errores.push('La confirmación de la contraseña no puede estar vacia');
            confirmPassword.classList.add('input-invalid');   

        }else{
            //Ahora valido si las dos contraseñas son iguales
            if(password.value != confirmPassword.value && confirmPassword != ""){
                errores.push('Las contraseñas deben ser iguales');
                confirmPassword.classList.add('input-invalid');   
                //errores['last_name'] = 'El campo nombre no puede estar vacio...';
            }else{
                confirmPassword.classList.add('input-valid');
                confirmPassword.classList.remove('input-invalid');
            }
        }
        

        //Aquí valido que el usuario coloque su avatar (Yo en mi caso lo considero como un dato obligatorio, ustedes si quieren lo validan como deseen)
        if(avatar.value == ''){
            errores.push('Debe seleccionar su avatar en formato JPG - PNG ó JPEG');
            avatar.classList.add('input-invalid');   
            //errores['last_name'] = 'El campo nombre no puede estar vacio...';
        }else{
            avatar.classList.add('input-valid');
            avatar.classList.remove('input-invalid');
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