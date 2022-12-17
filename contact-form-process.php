<?php

if (isset($_POST['submit'])) {
    $to = "roshandelmahshid@gmail.com";
    $from = $_POST ['email'];
    $sender = $_POST['name'];
    $message = $_POST['message'];
    $header = "From: ". $from;
        
    mail($to, $message, $header);

   echo "Thank you! Your message has been sent.";
}

?>
