<?php
// Codice per mantenere la skin scelta dell'utente nel prossimo login
    session_start();
    $pdo = new PDO("pgsql:host=localhost;port=5432;dbname=levelup", 'postgres', '123');

    $query = $pdo->prepare("UPDATE credentials SET item = :selected WHERE username = :username");
    $query->bindParam(':selected', $_POST['data']);
    $query->bindParam(':username', $_SESSION['username']);

    $query->execute();
    
?>