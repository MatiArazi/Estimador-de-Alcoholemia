let masa;

function ingresarDatos(event){
    // Hay que evitar el comportamiento default, si no borra y redirecciona
    event.preventDefault();
    // event.target va a ser el form que realizó el submit
    let form = event.target;
    masa = form.elements["masa"].value
    console.log(masa);
}

function ingresarMasa(event){
    // Hay que evitar el comportamiento default, si no borra y redirecciona
    event.preventDefault();
    // event.target va a ser el form que realizó el submit
    masa = form.elements["masa"].value
    form.elemts["datoMasa"].innerText = masa
    console.log(masa);
}