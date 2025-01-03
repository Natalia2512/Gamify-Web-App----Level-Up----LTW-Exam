<?php
// Codice per inserire tasks su DB
    $task = $_POST['newTask'];
    $username = $_POST['username'];
    
    $pdo = new PDO("pgsql:host=localhost;port=5432;dbname=levelup", 'postgres', '123');

    $result = $pdo->prepare("INSERT INTO tasks VALUES (:task, 10, :username, 'not done')");
    $result->bindParam(':task', $task);
    $result->bindParam(':username', $username);

    $result->execute();

    $newTask = '<li><label class="single-task"> '.$task.' </label><input type="checkbox" value="'.$task.'" name="taskN0"></li>';

    $response = array('newTask' => $newTask);

    // Send the JSON response
    echo json_encode($response);

?>