$(document).ready(function(){
	var estado = false;

	$('#btn-toggle').on('click',function(){
		$('.seccionToggle').slideToggle();

		if (estado == true) {
			$(this).text("REGIONES NATURALES DE COLOMBIA Y SUS DEPARTAMENTOS");
			$('body').css({
				"overflow": "auto"
			});
			estado = false;
		} else {
			$(this).text("REGIONES");
			$('body').css({
				"overflow": "hidden"
			});
			estado = true;
		}
	});
});