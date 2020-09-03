window.addEventListener('load', ()=>{
    //Captura de elementos
    let brandCheckForm = document.getElementById('marcas-collapse');
    let ccCheckForm = document.getElementById('cilindrada-collapse');
    let brakesCheckForm = document.getElementById('frenos-collapse');
    let priceForm = document.getElementById('precio-collapse');
    let products = document.getElementById('productos');
    console.log(products.children[0].textContent.includes('100'));
    console.log(products.children[0])
    console.log((Math.random().toString(36)+'00000000000000000').slice(2, 10))
    console.log((Math.random().toString(36)+'00000000000000000').slice(2, 10))
    console.log((Math.random().toString(36)+'00000000000000000').slice(2, 10))
    console.log((Math.random().toString(36)+'00000000000000000').slice(2, 10))
    let {yamaha, honda, bmw, mercedezBenz, kawasaki, ducati, ktm} = brandCheckForm.elements;
    let {sixToNine, nineToTwelve, twelveToFifteen, fifteenToEigthteen, eigthteenToTwentyone, twentyoneToUp} = ccCheckForm.elements;
    let {discoDelantero, discoDelanteroYTrasero, dobleDisco} = brakesCheckForm.elements;
    let {min, max} = priceForm.elements;

    //Eventos
    brandCheckForm.addEventListener('change', brandCheckHandler);

    //Funciones
    function brandCheckHandler(e){
        //console.log(e.target.checked);
    }
})