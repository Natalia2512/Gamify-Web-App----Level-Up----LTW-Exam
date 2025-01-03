<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Play LevelUp</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.css"/>
    <link href="https://fonts.cdnfonts.com/css/8bit-wonder" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="play_Style.css" rel="stylesheet">
	<link href="https://fonts.cdnfonts.com/css/cyrbit" rel="stylesheet">
	<link href="https://fonts.cdnfonts.com/css/pixel-7" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="./node_modules/nes.css/css/nes.min.css">
    <link href="https://unpkg.com/nes.css/css/nes-core.min.css" rel="stylesheet" />
</head>
<body>
    <?php session_start();?>
    <!-- PHP file per la pagina play -->

    <!-- musica per la pagina play -->
    <audio id="audioPlayer" autoplay loop>
        <source src="play_song.wav" type="audio/wav">
        Your browser does not support the audio element.
    </audio>

    <!-- background fatto con diverse layer-->
    <div class="bg">
        <div class="bg1"></div>
        <div class="bg2"></div>
        <div class="bg3"></div>
        <div class="bg4"></div>
        <div class="bg5"></div>
        <div class="bg6"></div>
        <div class="bg7"></div>
    </div>
    </div>

    <!-- wrapper container -->
    <div id="cont2" class="row">
        <div id="main" class="col-12">
            <!-- toggle menu e menu items, ogni item fa una cosa diversa-->
            <ul id="toggle-menu-closed" class="nes-container is-rounded  is-rounded nes-list is-disc">
                <li><a id="toggle-button" class="toggle-button" href="">Menu</a></li>
            </ul>
            <ul id="toggle-menu-open" class="nes-container is-rounded nes-list is-disc">
                <li class="toggle-menu-item nes-list is-disc"><a id="toggle-button" class="toggle-button" href="">Menu</a></li>
                <li class="toggle-menu-item"><a href="" id="task-button">Tasks</a></li>
                <li class="toggle-menu-item"><a href="" id="items-button">Items</a></li>
                <li class="toggle-menu-item"><a href="" id="social-button">Social</a></li>
                <li class="toggle-menu-item"><a href="/login/login_page.html" id="logout-button">Logout</a></li>
                <li class="toggle-menu-item"><a href="" id="close-button">Close</a></li>
            </ul>   

            <!-- player character -->
            <div id="char-sec" class="col-12 main">
                <div id="char">
                    <a>Player</a>
                </div>
            </div>

            <!-- tasks section -->
            <div id="tasks" class="menu nes-container is-rounded">  
                <!-- create labels with checkbox inputs  -->
                <div class="nes-container is-rounded" id="tasks-title">Tasks</div>
                <div id="tasks-list" class= "nes-list is-disc">
                    <!-- codice PHP per il 'fetching' delle tasks su DB -->
                    <?php include 'play_getTask.php';?>    
                </div>
                <div class="container">
                    <!-- form per aggiungere una nuova task -->
                    <form class="row" id="new-task" action="play_addTask.php" class="input-group" method="POST">
                        <input class="col-8 nes-container is-rounded" type="text" placeholder="add a new task" name="newTask">
                        <button class="col-2 nes-btn is-primary" onclick="addTask(event, this.form)">Add</button>       
                    </form>  
                </div>
            </div>

            <!-- social section -->
            <div id="social" class="container nes-container is-rounded">
                <div class="nes-container is-rounded" id="social-title">Social</div>
                <div id="social2" class="menu nes-container is-rounded">
                <!-- codice PHP per il 'fetching' degli amici su DB -->
                <?php include 'play_getFriend.php'?>
                <!-- form per aggiungere un nuovo amico -->
                <form class="row" id="new-friend" action="play_addFriend.php" class="input-group" method="POST">
                    <input class="col-9 nes-container is-rounded" type="text" placeholder="add a new friend" name="newFriend">
                    <button class="col-2 nes-btn is-rounded" onclick="addFriend(event, this.form)">Add</button>       
                </form>  
            </div>
            </div>
            
            <!-- inventory section -->
            <div id="inventory" class="container nes-container is-rounded">
                <div class="nes-container is-rounded" id="inventory-title">Items</div>
                <div id="inventory2" class="nes-container is-rounded">
                <!-- codice PHP per il 'fetching' degli items su DB -->
                <?php include 'play_getItem.php'?>
                </div>
            </div>
        </div>
    </div>
    <script src="play_script.js"></script>
</body>
</html>