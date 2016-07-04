	$("#buttonKM").click(function(){
		var km=$("#km").val();
		var porcen=retornar()/100;
		$("#resultKM").html((km*porcen )+" Kilometros cuadrados distintos");
	});