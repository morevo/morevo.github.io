<?php

    // Get datas from form

    $email = $_POST["email"];
    $message = $_POST["message"];
    // Processing got datas
    $email = htmlspecialchars($email);  // Transformation to html code
    $message = htmlspecialchars($message);

    $email = urldecode($email);  // decode url
    $message = urldecode($message);

    $email = trim($email);  // Delete space chars from both sides
    $message = trim($message);

    // Send to mail

    if(mail("svilohuzov.ivan@gmail.com",
            "New message from: $email",
            "Email: ".$email."\n".
            "Message: ".$message."\n")
            ) {
                echo("Message successfuly sent!");
                header("Location: ../index.html"); // Redirection user to index.html after click on button
            } else {
                echo("Have some errors! Please, check datas...");
                header("Location: ../index.html");
            }

?>

