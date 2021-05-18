function validateForm() {
	var cui, clave;
	cui = document.getElementById("CUI").value;
	clave = document.getElementById("Clave").value;

	if (cui == "" || clave == "") {
		alert("Hay campos obligatorios que faltan llenar");
		return false;
	}
	else if (isNaN(cui) || cui < 10000000 || cui > 99999999) {
		alert("Ingrese un CUI valido");
		return false;
	}
}