<?php
// codice per cambiare una task da 'not done' a 'done', aggiungendo i punti della task
$pdo = new PDO("pgsql:host=localhost;port=5432;dbname=levelup", 'postgres', '123');

$data = $_POST['data'];
echo $data;
$result = $pdo->prepare("UPDATE tasks SET accomplished='done' WHERE task='$data'");
$result->execute();

$pdo = null;

$pdo = new PDO("pgsql:host=localhost;port=5432;dbname=levelup", 'postgres', '123');

$point = $pdo->prepare("UPDATE credentials SET points = points + 10 WHERE username = 'ppk'");
$point->execute();


?>