<?php
// Codice per fare il fetching di tutti gli amici di quel utenti su DB
    $pdo = new PDO("pgsql:host=localhost;port=5432;dbname=levelup", 'postgres', '123');

    $username = $_SESSION['username'];
    
    // $result = $pdo->prepare("SELECT * FROM friends WHERE friend1 = :username");
    $result = $pdo->prepare("SELECT credentials.item, friend2, friends.points FROM credentials join friends on credentials.username = friends.friend2  where friends.friend1 = :username");
    $result->bindParam(':username', $username);
    $result->execute();

    $rows = array();
    echo "<div id='friend-list'>";
    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        $rows[] = $row;

        echo '<div class="nes-container is-rounded f">';
        echo '<p class="p">'.$row["friend2"].' lv:'.$row["points"].'</p>';
        echo '<div class="t1 t '.$row["item"].'"></div>';
        echo '</div>';
    


    }
    echo "</div>";
?>


