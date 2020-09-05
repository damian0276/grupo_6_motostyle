window.addEventListener('load',function(){
    let formulario = document.querySelector('.rounded');   
    formulario.addEventListener('submit',function(evento){
        
        if(!validaciones(evento)){
            evento.preventDefault();
            
        }else{
            formulario.submit();
        }    

        function validaciones(evento){
       
            //Destructuring  
            let {avatar,firstName,lastName,email, password,confirmPassword } = formulario.elements;
            let errores = [];
            console.log(formulario.elements.email);

            //Aquí validamos que el usuario coloque bien el avatar
            if(avatar.value == '' || !(/\.(jpg|png|gif)$/i).test(avatar.value)){
                errores.push('Debe seleccionar su avatar en formato JPG - PNG ó JPEG ');
                avatar.classList.add('input-invalid');   

            // }if (avatar.value != '' && !(/\.(jpg|png|gif)$/i).test(avatar.value)){
            //     errores.push('Debe seleccionar su avatar en formato JPG - PNG ó JPEG');
            //     avatar.classList.add('input-invalid'); 
            }
            else{
                avatar.classList.add('input-valid');
                avatar.classList.remove('input-invalid');
            }



            // Acá validamos que el campo nombre no este vacio
              if(firstName.value == ''){
                errores.push('El campo nombre no puede estar vacio...');
                firstName.classList.add('input-invalid');              
            }
            if(firstName.value.length<2){
                errores.push('El campo nombre no puede tener menos de dos caracteres...');
                firstName.classList.add('input-invalid'); 
            }else{
                firstName.classList.add('input-valid');
                firstName.classList.remove('input-invalid');
            }
            // Acá validamos que el campo apellido no este vacio
            if(lastName.value == ''){
                errores.push('El campo apellido no puede estar vacio...');
                lastName.classList.add('input-invalid');              
            }
            if(lastName.value.length<2){
                errores.push('El campo apellido no puede tener menos de dos caracteres...');
                lastName.classList.add('input-invalid'); 
            }else{
                lastName.classList.add('input-valid');
                lastName.classList.remove('input-invalid');
            }

             //Esta expresión regular valida como Mínimo ocho caracteres, al menos una letra y un número:
            let rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
            if(!rePassword.test(password.value)){errores.push('La contraseña como mínimo debe tener ocho caracteres, al menos una letra y un número');
               password.classList.add('input-invalid');   

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
            
            }else{
                confirmPassword.classList.add('input-valid');
                confirmPassword.classList.remove('input-invalid');
            }
            }



            fetch("/apiUsersMsList")
                .then(function(respuesta){
                return respuesta.json();
                })
                .then(function(dataUsuario){

                    // Acá validamos el email a través  de expreciones regulares
                    let usersEmail = dataUsuario.data
                    let reEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                
                    if(!reEmail.test(email.value)){
                       errores.push('El email es inválido...');          
                       email.classList.add('input-invalid');  
                       email.classList.remove('input-valid');                 
                    }// validacion para que no este repetido el email         
                    else if( usersEmail.find(userEmail =>userEmail == email.value)){
                        errores.push('El email ya esta en uso...');          
                        email.classList.add('input-invalid'); 
                    }else{
                        email.classList.add('input-valid');
                        email.classList.remove('input-invalid');
                    }
                    //Aquí enviamos los errores al usuario
                    let ulErrores = document.getElementById('errores');
                    ulErrores.classList.add('alert-danger')
                    if(errores.length > 0){
                        ulErrores.innerHTML = "";
                        for (let i = 0 ; i < errores.length; i++){
                            ulErrores.innerHTML += `<li> ${errores[i]} </li> `
                        }
                        return false;
                    }else{
                        return formulario.submit();
                    } 
                })  
                .catch(err => console.error(err))
            }
        
    })
})