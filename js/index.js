$(document).ready(function(){
	//Al hacer clic en cualquier img ejecutamos la acción
	$('.zoom-img-content img').click(function() {
		//Capturamos el src de la img
		var postimg= $(this).attr('src');
		//Agregamos el src a una href simbólico
		$('#verimagenes').attr('href',postimg);
		//Hacemos clic en el enlace para activar el visor
		$('#verimagenes').click();
	});

  //FORMs
  $("._formcontacto").submit(function() {
    //var formdata = $(this).serialize();
    var asunto = "Nueva consulta por formulario web ";
    asunto += document.getElementById('asunto').value
    var formdata = {nombre: document.getElementById('nombre').value ,
                    email: document.getElementById('email').value ,
                    telefono: document.getElementById('telefono').value ,
                    horario: document.getElementById('horario').value ,
                    mensaje: document.getElementById('mensaje').value ,
                    subject: asunto };
          
    formdata.ajax = 1;
      $.post("https://vicsoluciones.com/formContactoProCasas.php", formdata)
      .done(function(data) {
          console.log(data);
          console.log(formdata);
          if (data.trim() == '1') {
            alert('Ya tenemos tus datos! Nos estaremos comunicando proximamente');
            $("._formcontacto").trigger("reset");
          } else {
            alert(data);
          }
      });

      return false;
  });
  $("._formproveedor").submit(function() {
    
    var formdata = {nombre: document.getElementById('nombre').value ,
                    email: document.getElementById('email').value ,
                    telefono: document.getElementById('telefono').value ,
                    horario: document.getElementById('horario').value ,
                    mensaje: document.getElementById('mensaje').value ,
                    provincia: document.getElementById('provincia').value ,
                    subject: "Nueva consulta por proveedor del formulario web" };
          
    formdata.ajax = 1;
      $.post("formContacto.php", formdata)
      .done(function(data) {
          console.log(data);
          console.log(formdata);
          if (data.trim() == '1') {
            alert('Ya tenemos tus datos! Nos estaremos comunicando proximamente');
            $("._formproveedor").trigger("reset");
          } else {
            alert(data);
          }
      });

      return false;
  });
});

