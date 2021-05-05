/*

ÍNDICE:
	§1. Variables iniciales.

	§2. Cálculo de las unidades.

	§3. Cálculo de las decenas.

	§4. Cálculo de las centenas.

	§5. Cálculo de las unidades de mil.

	§6. Cálculo de las decenas de mil.

	§7. Cálculo de unidades especiales en las unidades y 				decenas.

	§8. Cálculo de unidades especiales en las unidades, 				decenas y centenas.

	§9. Cálculo de unidades especiales en las unidades, 				decenas, centenas y unidades de mil.

	§10. Llamada a todas las funciones.

	§11.	Impresión en pantalla del resultado final.

*/

//	§1. Variables iniciales.
var numero = prompt("Dime tu número");
var numeroArray = numero.split('');
numeroArray = numeroArray.reverse();
textoUnidades = textoDecenas = textoCentenas = textoUMil = textoDMil = textoCMil = "";

//	§2. Cálculo de las unidades.
function calcularUnidades(){
	switch(parseInt(numeroArray[0])){
		case 1: 
			textoUnidades = "UNO";
			break;
		
		case 2:
			textoUnidades = "DOS";
			break;

		case 3:
			textoUnidades = "TRES";
			break;

		case 4:
			textoUnidades = "CUATRO";
			break;

		case 5:
			textoUnidades = "CINCO";
			break;

		case 6:
			textoUnidades = "SEIS";
			break;

		case 7:
			textoUnidades = "SIETE";
			break;

		case 8:
			textoUnidades = "OCHO";
			break;

		case 9:
			textoUnidades = "NUEVE";
			break;
	}
}

//	§3. Cálculo de las decenas.
function calcularDecenas(){
	switch(parseInt(numeroArray[1])){
		case 1:
			textoDecenas = "DIECI";
			break;
		
		case 2:
			textoDecenas = "VIENTI";
			break;

		case 3:
			textoDecenas = "TREINTA Y ";
			break;
		
		case 4:
			textoDecenas = "CUARENTA Y ";
			break;
		
		case 5:
			textoDecenas = "CINCUENTA Y ";
			break;
		
		case 6:
			textoDecenas = "SESENTA Y ";
			break;
		
		case 7:
			textoDecenas = "SETENTA Y ";
			break;
		
		case 8:
			textoDecenas = "OCHENTA Y ";
			break;
		
		case 9:
			textoDecenas = "NOVENTA Y ";
			break;
	}
}

//	§4. Cálculo de las centenas.
function calcularCentenas(){
	switch(parseInt(numeroArray[2])){
		case 1:
			textoCentenas = "CIENTO ";
			break;
		
		case 2:
			textoCentenas = "DOSCIENTOS ";
			break;
		
		case 3:
			textoCentenas = "TRESCIENTOS ";
			break;

		case 4:
			textoCentenas = "CUATROCIENTOS ";
			break;
		
		case 5:
			textoCentenas = "QUINIENTOS ";
			break;
		
		case 6:
			textoCentenas = "SEISCIENTOS ";
			break;
		
		case 7:
			textoCentenas = "SETECIENTOS ";
			break;
		
		case 8:
			textoCentenas = "OCHOCIENTOS ";
			break;
		
		case 9:
			textoCentenas = "NOVECIENTOS ";
			break;
	}
}

//	§5. Cálculo de las unidades de mil.
function calcularUMil(){
	switch(parseInt(numeroArray[3])){
		case 1:
			textoUMil = "MIL ";
			break;
		
		case 2:
			textoUMil = "DOS MIL ";
			break;
		
		case 3:
			textoUMil = "TRES MIL ";
			break;

		case 4:
			textoUMil = "CUATRO MIL ";
			break;
		
		case 5:
			textoUMil = "CINCO MIL ";
			break;
		
		case 6:
			textoUMil = "SEIS MIL ";
			break;
		
		case 7:
			textoUMil = "SIETE MIL ";
			break;
		
		case 8:
			textoUMil = "OCHO MIL ";
			break;
		
		case 9:
			textoUMil = "NUEVE MIL ";
			break;
	}
}

//	§6. Cálculo de las decenas de mil.
function calcularDMil(){
	switch(parseInt(numeroArray[4])){
		case 1:
			textoDMil = "DIECI";
			break;
		
		case 2:
			textoDMil = "VIENTI";
			break;

		case 3:
			textoDMil = "TREINTA Y ";
			break;
		
		case 4:
			textoDMil = "CUARENTA Y ";
			break;
		
		case 5:
			textoDMil = "CINCUENTA Y ";
			break;
		
		case 6:
			textoDMil = "SESENTA Y ";
			break;
		
		case 7:
			textoDMil = "SETENTA Y ";
			break;
		
		case 8:
			textoDMil = "OCHENTA Y ";
			break;
		
		case 9:
			textoDMil = "NOVENTA Y ";
			break;
	}
}

//	§7. Cálculo de unidades especiales en las unidades y 	decenas.
function calcularNumeroEspecialUD(){
	var numeroEspecialUD = [numeroArray[1], numeroArray[0]]
	numeroEspecialUD = numeroEspecialUD.join('')
	switch(parseInt(numeroEspecialUD)){
		case 0:
			textoDecenas = "CERO";
			break;

		case 10:
			textoDecenas = "DIEZ";
			break;
		
		case 20:
			textoDecenas = "VEINTE";
			break;

		case 30:
			textoDecenas = "TREINTA";
			break;
		
		case 40:
			textoDecenas = "CUARENTA";
			break;

		case 50:
			textoDecenas = "CINCUENTA";
			break;
		
		case 60:
			textoDecenas = "SESENTA";
			break;
		
		case 70:
			textoDecenas = "SETENTA";
			break;
		
		case 80:
			textoDecenas = "OCHENTA";
			break;
		
		case 90:
			textoDecenas = "NOVENTA";
			break;
		
		case 11:
			textoDecenas = "ONCE";
			textoUnidades = "";
			break;
		
		case 12:
			textoDecenas = "DOCE";
			textoUnidades = "";
			break;

		case 13:
			textoDecenas = "TRECE";
			textoUnidades = "";
			break;
		
		case 14:
			textoDecenas = "CATORCE";
			textoUnidades = "";
			break;

		case 15:
			textoDecenas = "QUINCE";
			textoUnidades = "";
			break;
	}
}

//	§8. Cálculo de unidades especiales en las unidades, 	decenas y centenas.
function calcularNumeroEspecialUDC(){
	var numeroEspecialUDC = [numeroArray[3], numeroArray[2], numeroArray[1] , numeroArray[0]]
	numeroEspecialUDC = numeroEspecialUDC.join('')
	switch(parseInt(numeroEspecialUDC)){
		case 100:
			textoCentenas = "CIEN";
			break;
	}
}

//	§9. Cálculo de unidades especiales en las unidades, 	decenas y centenas de mil.
function calcularNumeroEspecialUDCM(){
	var numeroEspecialUDCM = [numeroArray[3], numeroArray[2], numeroArray[1] , numeroArray[0]]
	numeroEspecialUDCM = numeroEspecialUDCM.join('')
	switch(parseInt(numeroEspecialUDCM)){
		case 1000:
			textoUMil = "MIL";
			textoDecenas = "";
			break;
		
		case 2000:
			textoUMil = "DOS MIL";
			textoDecenas = "";
			break;

		case 3000:
			textoUMil = "TRES MIL";
			textoDecenas = "";
			break;
		
		case 4000:
			textoUMil = "CUATRO MIL";
			textoDecenas = "";
			break;

		case 5000:
			textoUMil = "CINCO MIL";
			textoDecenas = "";
			break;
		
		case 6000:
			textoUMil = "SEIS MIL";
			textoDecenas = "";
			break;
		
		case 7000:
			textoUMil = "SIETE MIL";
			textoDecenas = "";
			break;
		
		case 8000:
			textoUMil = "OCHO MIL";
			textoDecenas = "";
			break;
		
		case 9000:
			textoUMil = "NUEVE MIL";
			textoDecenas = "";
			break;

		case 10000:
			textoDMil = "DIEZ MIL";
			textoDecenas = "";
			break;

		case 10:
			textoDecenas = "DIEZ";
			break;
		
		case 20:
			textoDecenas = "VEINTE";
			break;

		case 30:
			textoDecenas = "TREINTA";
			break;
		
		case 40:
			textoDecenas = "CUARENTA";
			break;

		case 50:
			textoDecenas = "CINCUENTA";
			break;
		
		case 60:
			textoDecenas = "SESENTA";
			break;
		
		case 70:
			textoDecenas = "SETENTA";
			break;
		
		case 80:
			textoDecenas = "OCHENTA";
			break;
		
		case 90:
			textoDecenas = "NOVENTA";
			break;
		
		case 11:
			textoDecenas = "ONCE";
			textoUnidades = "";
			break;
		
		case 12:
			textoDecenas = "DOCE";
			textoUnidades = "";
			break;

		case 13:
			textoDecenas = "TRECE";
			textoUnidades = "";
			break;
		
		case 14:
			textoDecenas = "CATORCE";
			textoUnidades = "";
			break;

		case 15:
			textoDecenas = "QUINCE";
			textoUnidades = "";
			break;
	}
}

//	§10. Llamada a todas las funciones.
calcularUnidades();
calcularDecenas();
calcularCentenas();
calcularUMil();
calcularDMil();
calcularNumeroEspecialUD();
calcularNumeroEspecialUDC();
calcularNumeroEspecialUDCM();

//	§11.	Impresión en pantalla del resultado final.
var numeroFinal = textoCMil + textoDMil + textoUMil + textoCentenas + textoDecenas + textoUnidades;

console.log(numeroFinal);
