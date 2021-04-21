<?php
$to = "svilohuzov.ivan@gmail.com";

$subject = "Message from my Portfolio";

$message = "User" . $_POST["email"] . " Send to you a message: " . $_POST["message"];

$headers .= "To: Ivan <svilohuzov.ivan@gmail.com>" . "\r\n";
$headers .= "From: name" . "<" . $_POST["email"] . ">" . "\r\n";

mail($to, $subject, $message, $headers);
?>

