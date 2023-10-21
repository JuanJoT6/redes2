<?php
    $email_usuario = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $email = 'crackmayo1@gmail.com';

    $email_asunto = "Security Force contacto"; 

    $email_descripcion = "Email usuario: $email_usuario.\n" .
                            "Mensaje del usuario: $mensaje.\n";

    $para = "juanjot06@gmail.com":

    $headers = "From: $email \r\n";
    $headers .= "Reply-to: $email_usuario \r\n";

    mail($para, $email_asunto, $email_descripcion, $headers);
?>