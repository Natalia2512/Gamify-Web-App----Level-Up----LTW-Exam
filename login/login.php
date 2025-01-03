<?php
// Codice per fare il login, controlla se su DB ci sono le credenziali inserite, caso ci siano ritorna una flag per il login
  $inputUsername = (string)$_POST['inputUsername'];
  $inputPassword = (string)$_POST['inputPassword'];
  
  $pdo = new PDO("pgsql:host=localhost;port=5432;dbname=levelup", 'postgres', '123');

  $result = $pdo->prepare("SELECT EXISTS (SELECT 1 FROM credentials WHERE username = :username AND pwd = :pwd)");

  $result->bindParam(':username', $inputUsername);
  $result->bindParam(':pwd', $inputPassword);
  $result->execute();
  
  if ($result->fetch(PDO::FETCH_ASSOC)['exists'] == 1) {
    $login = true;
  } else {
    $login = false;
  }

  $session = $pdo->prepare("SELECT username, points, item FROM credentials WHERE username = :username");
  $session->bindParam(':username', $inputUsername);
  $session->execute();
  $query = $session->fetchAll(PDO::FETCH_ASSOC);
  $response = array('login'=>$login, 'session'=>$query);
  echo json_encode($response);
  
  session_start();
  $_SESSION['username'] = $response['session'][0]['username'];
  $_SESSION['points'] = $response['session'][0]['points'];
  $_SESSION['item'] = $response['session'][0]['item'];
?>