window.addEventListener('load', () => {

    //Capturas de elementos
    let form = document.getElementById('form-productAdd');
    let ulErrorsPrice = document.getElementById('errorsPrice');
    let descriptionError = document.getElementById('description-errors');
    let specificationError = document.getElementById('specification-errors')
    let errorImagePortada = document.getElementById('error-imagePortada');
    let errorImageDivs = document.querySelectorAll('.error-image-div')
    //console.log(form.elements);

    form.addEventListener('submit', (event) =>{

        if(!validations(event)){
            return event.preventDefault();
        }
        return form.submit();
        
    })

    function validations(event){

        let { brand, model, color, cc, brakes, stock, coin, iva, gross, imagenPortada, imagen1, imagen2, imagen3, imagen4, description, specification } = form.elements;
        let imagesNoCoverArray = [imagen1, imagen2, imagen3, imagen4];
        let errors = [];
        let errorsPrice = [];
        
        //Regex que evalua si el campo es alfanumerito y no está vacío.
        let reAlpha = /^([A-Za-z0-9\s]+){1,}$/g;

        //Regex que evalua si el campo es un número, no está vacío, no contiene espacios y tiene de 3 a 4 cifras.
        let reNumberCc = /^(\d){3,4}$/g;

        //Regex que evalua si el campo es un número, no está vacío y no contiene espacios.
        let reNumber = /^(\d){1,}$/g;

        //Reges que evalua la extensión del value del input file para que acepte solo archivos .jpg .jpeg .png
        let reImage = /.+\.(jpg|png|jpeg)$/i;

        
        //Validación del campo Brand
        if(brand.value == 'Seleccionar'){
            errors.push(1);
            //console.log(model.parentElement);
            brand.parentElement.classList.add('border-danger');
            brand.parentElement.classList.add('rounded');
            brand.parentElement.classList.add('border');
        } else {
            brand.parentElement.classList.remove('border-danger');
            brand.parentElement.classList.add('border-success'); 
        }

        //Validación del campo Model
        if(!reAlpha.test(model.value)){
            errors.push(1);
            //console.log(model.parentElement);
            model.parentElement.classList.add('border-danger');
            model.parentElement.classList.add('rounded');
            model.parentElement.classList.add('border');
            model.value = ''
            model.placeholder = 'No puede estar vacío y debes ingresar caracteres alfanuméricos';
        } else {
            model.parentElement.classList.remove('border-danger');
            model.parentElement.classList.add('border-success'); 
        }

        //Validación del campo Color
        if(color.value == 'Seleccionar'){
            errors.push(1);
            //console.log(model.parentElement);
            color.parentElement.classList.add('border-danger');
            color.parentElement.classList.add('rounded');
            color.parentElement.classList.add('border');
        } else {
            color.parentElement.classList.remove('border-danger');
            color.parentElement.classList.add('border-success'); 
        }

        //Validación del campo Cc
        if(!reNumberCc.test(cc.value)){
            errors.push(1);
            //console.log(cc.parentElement);
            cc.parentElement.classList.add('border-danger');
            cc.parentElement.classList.add('rounded');
            cc.parentElement.classList.add('border');
            cc.value = ''
            cc.placeholder = 'Debes ingresar sólo números de 3 a 4 cifras.';
        } else {
            cc.parentElement.classList.remove('border-danger');
            cc.parentElement.classList.add('border-success'); 
        }

        //Validación del campo Brakes
        if(brakes.value == 'Seleccionar'){
            errors.push(1);
            //console.log(model.parentElement);
            brakes.parentElement.classList.add('border-danger');
            brakes.parentElement.classList.add('rounded');
            brakes.parentElement.classList.add('border');
        } else {
            brakes.parentElement.classList.remove('border-danger');
            brakes.parentElement.classList.add('border-success'); 
        }

        //Validación del campo Stock
        if(!reNumber.test(stock.value)){
            errors.push(1);
            //console.log(stock.parentElement);
            stock.parentElement.classList.add('border-danger');
            stock.parentElement.classList.add('rounded');
            stock.parentElement.classList.add('border');
            stock.value = ''
            stock.placeholder = 'Este campo no puede estar vacío y debes ingresar sólo números.';
        } else {
            stock.parentElement.classList.remove('border-danger');
            stock.parentElement.classList.add('border-success'); 
        }

        //Validación del campo Coin
        if(coin.value == 'Elije una moneda...'){
            errors.push(1);
            errorsPrice.push('Debes seleccionar un tipo de moneda.')
            //console.log(model.parentElement);
            coin.parentElement.classList.add('border-danger');
            coin.parentElement.classList.add('rounded');
            coin.parentElement.classList.add('border');
        } else {
            coin.parentElement.classList.remove('border-danger');
            coin.parentElement.classList.add('border-success'); 
        }

        //Validación del campo Iva
        if(iva.value != 21){
            errors.push(1);
            errorsPrice.push('El iva debe ser 21.')
            //console.log(stock.parentElement);
            iva.parentElement.classList.add('border-danger');
            iva.parentElement.classList.add('rounded');
            iva.parentElement.classList.add('border');
            iva.value = '';
        } else {
            iva.parentElement.classList.remove('border-danger');
            iva.parentElement.classList.add('border-success');
        }

        //Validación del campo Gross
        //console.log(typeof gross.value);
        if(!gross.value){
            errors.push(1);
            errorsPrice.push('El bruto no puede estar vacío y debes ingresar sólo números.')
            //console.log(gross.parentElement);
            gross.parentElement.classList.add('border-danger');
            gross.parentElement.classList.add('rounded');
            gross.parentElement.classList.add('border');
            gross.value = ''
        } else {
            gross.parentElement.classList.remove('border-danger');
            gross.parentElement.classList.add('border-success'); 
        }

        //Aquí es cuando yo controlo si hay o no errores en el apartado de precio para enviar o no al usuario
        if(errorsPrice.length > 0){
            ulErrorsPrice.innerHTML = '';
            for(error of errorsPrice){                
                ulErrorsPrice.innerHTML += `<li> ${error} </li>`                
            }
        } else {
            ulErrorsPrice.innerHTML = '';
        }

        //Validando la extensión de las imagenes.
        
        if(!reImage.test(imagenPortada.value)){
            errors.push(1);
            errorImagePortada.innerHTML = 'La archivo debe ser .jpg, .jpeg o .png'
            imagenPortada.parentElement.classList.add('border-danger');
            imagenPortada.parentElement.classList.add('rounded');
            imagenPortada.parentElement.classList.add('border');
        } else {
            errorImagePortada.innerHTML = '';
            imagenPortada.parentElement.classList.remove('border-danger');
            imagenPortada.parentElement.classList.add('border-success');
        }

        
        for ( let i = 0 ; i < imagesNoCoverArray.length ; i++ ){
            if(!reImage.test(imagesNoCoverArray[i].value)){
                errors.push(1);
                errorImageDivs[i].innerHTML = 'La archivo debe ser .jpg, .jpeg o .png'
                imagesNoCoverArray[i].parentElement.classList.add('border-danger');
                imagesNoCoverArray[i].parentElement.classList.add('rounded');
                imagesNoCoverArray[i].parentElement.classList.add('border');
            } else {
                errorImageDivs[i].innerHTML = '';
                imagesNoCoverArray[i].parentElement.classList.remove('border-danger');
                imagesNoCoverArray[i].parentElement.classList.add('border-success');
            }
        }

        //Validación del campo Description
        if(description.value.length < 20 ){
            errors.push(1);            
            description.classList.add('border-danger');
            description.classList.add('border');
            descriptionError.innerHTML = 'Este campo debe tener al menos 20 caracteres';
        } else {
            descriptionError.innerHTML = '';
            description.classList.remove('border-danger');
            description.classList.add('border-success'); 
        }

        //Validación del campo Description
        if(specification.value.length < 20 ){
            errors.push(1);            
            specification.classList.add('border-danger');
            specification.classList.add('border');
            specificationError.innerHTML = 'Este campo debe tener al menos 20 caracteres';
        } else {
            specificationError.innerHTML = '';
            specification.classList.remove('border-danger');
            specification.classList.add('border-success'); 
        }

        if(errors.length > 0 || errorsPrice.length > 0){
            return false
        } else {
            return true
        }
    }
})