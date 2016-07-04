					$("#buttonKM").click(function(){
						//$("span").load();
						var km=$("#km").val();
						var porcen=retornar()/100;
						console.log(porcen);
						$("#resultKM").html((km*porcen )+" Kilometros cuadrados distintos");
					});