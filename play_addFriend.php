<?php
// Codice per inserire nuovi amici su DB
    $newFriend = $_POST['newFriend'];
    $username = $_POST['username'];
    
    $pdo = new PDO("pgsql:host=localhost;port=5432;dbname=levelup", 'postgres', '123');

    $result = $pdo->prepare("INSERT INTO friends (SELECT :friend1, :friend2, points FROM credentials WHERE username = :friend2)");

    
    $result->bindParam(':friend1', $username);
    $result->bindParam(':friend2', $newFriend);

    $result->execute();

    $query = $pdo->prepare("SELECT credentials.item, friend2, friends.points FROM credentials join friends on credentials.username = friends.friend2  where friends.friend1 = :username and friends.friend2 = :friend");
    $query->bindParam(':username', $username);
    $query->bindParam(':friend', $newFriend);
    $query->execute();

    $row = $query->fetch(PDO::FETCH_ASSOC);


    $friend = '<div class="nes-container is-rounded f"><p class="p">'.$row["friend2"].' lv:'.$row["points"].'</p><div class="t1 t '.$row["item"].'"></div></div>';

    $response = array('newFriend' => $friend);

    echo json_encode($response);
?>


    
