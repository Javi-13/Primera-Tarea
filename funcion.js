function calcularEdad(){
    var edadfecha = new Date (document.getElementById("idFecha").value);
    if(isNaN(edadfecha.getTime()))
        alert("Ingrese una fecha de nacimiento")
    
    var fechaactual = new Date();
    var dif_anios = fechaactual.getFullYear() - edadfecha.getFullYear()
    var dif_meses = fechaactual.getMonth()- edadfecha.getMonth()
    var dif_dias = Math.floor((fechaactual.getTime() - edadfecha.getTime()) / (1000 * 60 * 60 * 24));

    document.getElementById("idSpanEdad").textContent = dif_anios;
    document.getElementById("idSpanMeses").textContent = dif_meses;
    document.getElementById("idSpanDias").textContent = dif_dias;

    var cedula = String(document.getElementById("idNacionalidad").value);
    if  (!/^\d+$/.test(cedula)) {
        alert("Ingrese solo números");
        return;

    } 
    if (cedula.length === 10) {
        document.getElementById("idCedula").textContent = "Eres Ecuatoriano";
    } else {
        document.getElementById("idCedula").textContent = "No eres Ecuatoriano";
    }
}

