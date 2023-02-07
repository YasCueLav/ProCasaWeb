<?php
   //Reseteamos variables a 0.
   $nombre = $email = $telefono = $Horario = $mensaje = $provincia =$para = $headers = $msjCorreo = NULL;

      //Obtenemos valores input formulario
      $nombre = $_POST['nombre'];
      $email = $_POST['email'];
      $telefono = $_POST['telefono'];
      $Horario=$_POST['horario'];   
      $mensaje = $_POST['mensaje'];
      $provincia = $_POST['provincia'];

      if($_POST['provincia']){
        $provincia = $_POST['provincia'];
      }

      $email_subject = $_POST['subject'];
      
       $ref = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';

       if($provincia){
        $email_body = "Nombre: {$nombre}\n".
                "Email: {$email}\n".
                "Telefono: {$telefono}\n".
                "Horario de contacto: {$Horario}\n".
                "Provincia de recidencia: {$provincia}\n".
                "Mensaje: {$mensaje}\n";
       }else{
        $email_body = "Nombre: {$nombre}\n".
                "Email: {$email}\n".
                "Telefono: {$telefono}\n".
                "Horario de contacto: {$Horario}\n".
                "Mensaje: {$mensaje}\n";
       }
       

      $recipients = array(
        "admin@procasas.com.ar"
      );
      
      $to = implode(',', $recipients);
    
      $headers = "From: Web ProCasas<admin@procasas.com.ar>\n";
      $headers .= "Reply-To: {$name}<{$visitor_email}>\n";
    
      mail($to,$email_subject,$email_body,$headers);
      
      echo "1";
      
      //echo "mail({$to}\n ,{$email_subject}\n,{$email_body}\n,{$headers}\n);";
?>