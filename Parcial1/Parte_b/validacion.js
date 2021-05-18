function valudarFormulario() {
	var cui, clave;
	cui = document.getElementById("CUI").value;
	desbloqueable = document.getElementById("Password").value;

	if (cui == "" || desbloqueable == "") {
		alert("Hay campos obligatorios que faltan llenar");
		return false;
	}
	else if (isNaN(cui) || cui < 10000000 || cui > 99999999) {
		alert("Ingrese un CUI valido");
		return false;
	}
}

