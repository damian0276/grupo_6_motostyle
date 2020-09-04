window.addEventListener("load",function(){
    
    let formulario = document.querySelector(".formulario");

    formulario.addEventListener("submit",function(evento){
        if(!validaciones()){
            return evento.preventDefault();
        }else{
            return formulario.submit();
        }})  

    function validaciones(){

        let {model, cc, stock, iva, gross, imagenPortada, imagen1, imagen2, imagen3, imagen4, description, specification} = formulario.elements;
        let descriptionError = document.getElementById("description-Errors");
        let specificationError= document.getElementById('specification-Errors')
        let errorImagePortada = document.getElementById('error-imagePortada');
        let errorImageDivs = document.querySelectorAll('.error-image-div')
        //Regex que evalua si el campo es alfanumerito y no está vacío.
        let reAlpha = /^([A-Za-z0-9\s]+){1,}$/g;
        
        //Regex que evalua si el campo es un número, no está vacío, no contiene espacios y tiene de 3 a 4 cifras.
        let reNumberCc = /^(\d){3,4}$/g;
        
        //Regex que evalua si el campo es un número, no está vacío y no contiene espacios.
        let reNumber = /^(\d){1,}$/g;

        //Reges que evalua la extensión del value del input file para que acepte solo archivos .jpg .jpeg .png
        let reImage = /.+\.(jpg|png|jpeg)$/i;
         
        let errores = [];
           
        //Validacion del modelo
        //let modelo = document.querySelector(".input-group-text")
        if(model.value == ''){
            errores.push('Por favor seleccioná el modelo');
            model.classList.add('is-invalid');   
            
        }else{
            model.classList.add('is-valid');
            model.classList.remove('is-invalid');
        }
        
        //Validacion cilindrada
        
        if(!reNumberCc.test(cc.value)){
            errores.push('Por favor seleccioná el tipo de cilindrada');
            cc.classList.add('is-invalid');   
            
        }else{
            cc.classList.add('is-valid');
            cc.classList.remove('is-invalid');
        } 
        
        //Validacion del stock

        if(stock.value <= 0){
            errores.push('Tenés que seleccionar la cantidad de productos');
            stock.classList.add('is-invalid');   
            
        }else{
            stock.classList.add('is-valid');
            stock.classList.remove('is-invalid');
        }

        //Validacion del iva
        
        if(iva.value != "21"){
            errores.push('El iva tiene que ser 21');
            iva.classList.add('is-invalid');   
            
        }else{
            iva.classList.add('is-valid');
            iva.classList.remove('is-invalid');
        } 

        //Validacion del importe bruto

        if(!reNumber.test(gross.value)){
            errores.push('Seleccioná el valor en bruto');
            gross.classList.add('is-invalid');   
            
        }else{
            gross.classList.add('is-valid');
            gross.classList.remove('is-invalid');
        } 

        //Validacion de las imagenes
        
        if(imagenPortada.value != ''){
            if(!reImage.test(imagenPortada.value)){
                errorImagePortada.innerHTML= "El archivo tiene que ser formato .jpg .jpeg .png "
                errores.push('El archivo tiene que ser formato .jpg .jpeg .png ');
                imagenPortada.classList.add('is-invalid');   

            }else{
                errorImagePortada.innerHTML= " ";
                imagenPortada.classList.add('is-valid');
                imagenPortada.classList.remove('is-invalid');
            }
        }

        if(imagen1.value != ''){
            if(!reImage.test(imagen1.value)){
                errorImageDivs.innerHTML="El archivo tiene que ser formato .jpg .jpeg .png"
                errores.push('El archivo tiene que ser formato .jpg .jpeg .png ');
                imagen1.classList.add('is-invalid');   
                
            }else{
                errorImageDivs.innerHTML="";
                imagen1.classList.add('is-valid');
                imagen1.classList.remove('is-invalid');
            }
        }
        
        if(imagen2.value != ''){
            if(!reImage.test(imagen2.value)){
                errorImageDivs.innerHTML="El archivo tiene que ser formato .jpg .jpeg .png"
                errores.push('El archivo tiene que ser formato .jpg .jpeg .png ');
                imagen2.classList.add('is-invalid');   
                
            }else{
                errorImageDivs.innerHTML="";
                imagen2.classList.add('is-valid');
                imagen2.classList.remove('is-invalid');
            }
        }
        
        if(imagen3.value != ''){
            if(!reImage.test(imagen3.value)){
                errorImageDivs.innerHTML="El archivo tiene que ser formato .jpg .jpeg .png"
                errores.push('El archivo tiene que ser formato .jpg .jpeg .png ');
                imagen3.classList.add('is-invalid');   
                
            }else{
                errorImageDivs.innerHTML="";
                imagen3.classList.add('is-valid');
                imagen3.classList.remove('is-invalid');
            }
        }
        
        if(imagen4.value != ''){
            if(!reImage.test(imagen4.value)){
                errorImageDivs.innerHTML="El archivo tiene que ser formato .jpg .jpeg .png"
                errores.push('El archivo tiene que ser formato .jpg .jpeg .png ');
                imagen4.classList.add('is-invalid');   
                
            }else{
                errorImageDivs.innerHTML="";
                imagen4.classList.add('is-valid');
                imagen4.classList.remove('is-invalid');
            }
        }
                
        //Validacion de la descripción

        if(!reAlpha.test(description.value)){
            descriptionError.innerHTML="Debes completar la descripción del producto";
            errores.push('Debes completar la descripción del producto');
            description.classList.add('is-invalid');   
            
        }else{
            descriptionError.innerHTML="";
            description.classList.add('is-valid');
            description.classList.remove('is-invalid');
        }

        if(specification.value == ''){
            specificationError.innerHTML="Por favor completa las especificaciones";
            errores.push('Por favor completa las especificaciones');
            specification.classList.add('is-invalid');   
            
        }else{
            specificationError.innerHTML="";
            specification.classList.add('is-valid');
            specification.classList.remove('is-invalid');
        }

        
        //validación de errores
        let ulErrores = document.getElementById('errores');
        ulErrores.classList.add('alert-danger')
        if(errores.length > 0){ 
            ulErrores.innerHTML = "";
            for (let i = 0 ; i < errores.length; i++){
              ulErrores.innerHTML += `<li> ${errores[i]} </li> `
            }
            return false;
        }else{
            return true;
        }
    }
})
 