<?php

if (isset($_POST['submit'])) {
    $to = "roshandelmahshid@gmail.com";
    $from = $_POST ['email'];
    $name = $_POST['name'];
    $message = $_POST['message'];

    mail($to, $subject, "From: $name <$from>");

   echo "Thank you! Your message has been sent.";
}

?>
