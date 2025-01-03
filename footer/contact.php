<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $number = $_POST['number'];
    $email = $_POST['email'];
    $message = $_POST['message'];
  
    $recipientEmail = 'pedro.r.gca@gmail.com';
    $subject = 'New Contact Form Submission';

      // Compose the email message
  $emailMessage = "Name: $name\n";
  $emailMessage .= "Phone Number: $number\n";
  $emailMessage .= "Email: $email\n";
  $emailMessage .= "Message:\n$message";

  // Set additional headers
  $headers = "From: $email" . "\r\n" .
             "Reply-To: $email" . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  // Send the email
  if (mail($recipientEmail, $subject, $emailMessage, $headers)) {
    echo "<script> alert('Email sent successfully!')</script>";
  } else {
    echo "<script> alert('Email NOT sent successfully!')</script>";
  }
}

?>