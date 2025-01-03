<?php
// Codice per fare il fetching di tutti skin di quel utenti su DB
    $pdo = new PDO("pgsql:host=localhost;port=5432;dbname=levelup", 'postgres', '123');

    $result = $pdo->prepare("SELECT * FROM inventory");
    $result->execute();

    $i = 0;
    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        if ($i%3 == 0){
        }
        if ($row["req"] <= $_SESSION['points']){
            echo '<div class="i nes-container is-rounded col-4 t1 t" data-value="'.$row["req"].'"><a class="ti col-4 char'.$i.'" href="" style="background-image: url(\'char/char'.$i.'.png\')"></a></div>';
        } else {
            echo '<div class="i nes-container is-rounded disabled col-4  t" data-value="'.$row["req"].'"><a disabled class="ti col-4 char'.$i.'" href="" style="background-image: url(\'char/char'.$i.'.png\')"></a></div>';
        }

        $i++;
    }
?>

