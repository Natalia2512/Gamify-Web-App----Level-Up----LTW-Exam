<?php
// codice per inserire nuovo account su DB
  $nome = (string)$_POST['inputNome'];
  $username = (string)$_POST['inputUsername'];
  $pwd = (string)$_POST['inputPassword'];
  $email = (string)$_POST['inputEmail'];

  $pdo = new PDO("pgsql:host=localhost;port=5432; dbname=levelup", 'postgres', '123');

  $result = $pdo->prepare("INSERT INTO credentials VALUES (:username, :nome, :email, :pwd, 0,'char0')");

  $result->bindParam(':username', $username);
  $result->bindParam(':nome', $nome);
  $result->bindParam(':email', $email);
  $result->bindParam(':pwd', $pwd);
  
  try {
    $result->execute();
    echo 'true';
  } catch (PDOException $e) {
    if ($e->getCode() == '23505'){
      echo '23505';
    } else {
      echo 'problem creating account';
    }
  }


?>