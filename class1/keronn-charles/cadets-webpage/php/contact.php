<?php
if ($_POST) {

    $username = $_POST['username'];
    $usersubject = $_POST['usersubject'];
    $useremail = $_POST['useremail'];
    $usermessage = $_POST['usermessage'];

    $subject = $useremail . $usersubject;

    $to = "keronncharles16@gmail.com";
    // $subject = "My subject";
    // $txt = "Hello world!";
    // $headers = "From: webmaster@example.com" . "\r\n" .
    // "CC: somebodyelse@example.com";

    mail($to,$subject,$usermessage);
}
?>
