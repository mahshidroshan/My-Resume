<?php

if (isset($_POST['submit'])) {
    $to = "roshandelmahshid@gmail.com";
    $from = $_POST ['email'];
    $sender = $_POST['name'];
    $message = $_POST['message'];

    mail($to, $subject, "From: $sender <$from>");

   echo "Thank you! Your message has been sent.";
}

?>
