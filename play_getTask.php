<?php
// Codice per fare il fetching di tutti le tasks di quel utenti su DB
    $pdo = new PDO("pgsql:host=localhost;port=5432;dbname=levelup", 'postgres', '123');

    $result = $pdo->prepare("SELECT * FROM tasks WHERE username = :username");
    $result->bindParam(':username', $_SESSION['username']);
    $result->execute();

    $rows = array();
    $i = 0;
    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        
        echo '<li>';
        if ($row["accomplished"] == "done"){
            $rows[] = $row;
            echo '<label for="input-test" class="single-task"> '.$row["task"].' </label><input id="input-test" type="checkbox" value="'.$row["task"].'" name="taskN'.$i.'" checked disabled><br/>';
        } else {
        $rows[] = $row;
        echo '<label for="input-test" class="single-task"> '.$row["task"].'</label><input id="input-test" type="checkbox" value="'.$row["task"].'" name="taskN'.$i.'"><br/>';
        $i++;
        }
        
        echo '</li>';
    }
?>

