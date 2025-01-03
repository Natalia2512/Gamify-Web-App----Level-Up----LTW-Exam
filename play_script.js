// play song
var audio = document.getElementById('audioPlayer');
audio.volume = 0.3;
audio.play();

// get player username and level from session storage
var charLvl = document.querySelector('#char>a');
charLvl.innerHTML = sessionStorage.getItem('username') + '  lv' + sessionStorage.getItem('points');

// toggle menu
var toggle = document.getElementById('toggle-menu-open');
var toggleButton = document.getElementsByClassName('toggle-button');

for (var i = 0; i < toggleButton.length; i++){

    toggleButton[i].addEventListener('click', function(event){
        event.preventDefault();
        if (toggle.style.display == 'block') {
            toggle.style.display = 'none'
        }
        else {
            toggle.style.display = 'block'
        }
    });
}

// pop menus inside the toggle menu, opening one close the other ones
var taskButton = document.getElementById('task-button');
var tasks = document.getElementById('tasks');
var socialButton = document.getElementById('social-button');
var social = document.getElementById('social');
var itemButton = document.getElementById('items-button');
var inventory = document.getElementById('inventory');
var closeButton = document.getElementById('close-button');


taskButton.addEventListener('click', function(event){
    event.preventDefault();
    if (tasks.style.display == 'block') {
        tasks.style.display = 'none'
    }
    else {
        tasks.style.display = 'block'
        inventory.style.display = 'none'
        social.style.display = 'none'
    }
});

itemButton.addEventListener('click', function(event){
    event.preventDefault();
    if (inventory.style.display == 'flex') {
        inventory.style.display = 'none'
    }
    else {
        inventory.style.display = 'flex'
        tasks.style.display = 'none'
        social.style.display = 'none'
    }
})

socialButton.addEventListener('click', function(event){
    event.preventDefault();
    if (social.style.display == 'flex') {
        social.style.display = 'none'
    }
    else {
        social.style.display = 'flex'
        inventory.style.display = 'none'
        tasks.style.display = 'none'
    }
});

closeButton.addEventListener('click', function(event){
    event.preventDefault();
    social.style.display = 'none'
    inventory.style.display = 'none'
    tasks.style.display = 'none'
})


// Tasks checker using AJAX
function insertData(data){
    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'play_send.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.send('data=' + data);

    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
        } else {
            console.log(this.readyState);
            console.log(this.status);
        }
    }
    
}

// function which updates DB in case of 'check'
var checkboxes = document.querySelectorAll('input[type="checkbox"][name^="taskN"]');
for (var i = 0; i < checkboxes.length; i++){
    checkboxes[i].addEventListener('click', function(){
        if (this.checked) {
            console.log(this.name + 'is checked');
            insertData(this.value);
            this.disabled = true;
            sessionStorage.setItem('points', parseInt(sessionStorage.getItem('points')) + parseInt(10));
        } else {
            console.log(this.name + ' is not checked');
        }
    });
}

// add task and check if it was done using AJAX
function addTask(event, form){
    event.preventDefault();
    var taskList = document.getElementById("tasks-list")
    var taskForm = new FormData(form);

    taskForm.append('username', sessionStorage.getItem('username'));

    fetch('play_addTask.php', {
        method: 'POST', 
        body: taskForm
    })
    .then(response => response.json())
    .then(data => {
        taskList.innerHTML += data['newTask'];
    })
    .then(data=>{
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        for (var i = 0; i < checkboxes.length; i++){
            checkboxes[i].addEventListener('click', function(){
                if (this.checked) {
                    insertData(this.value);
                    this.disabled = true;
                    this.setAttribute("checked", "");
                    sessionStorage.setItem('points', parseInt(sessionStorage.getItem('points')) + parseInt(10));
                    
                    charLvl.innerHTML = sessionStorage.getItem('username') + '  lv' + sessionStorage.getItem('points');

                    var invContainer = Array.from(document.getElementsByClassName("disabled"));
                    invContainer.forEach((img, i) => {
                        if (sessionStorage.getItem('points') >= parseInt(img.dataset.value)){
                            img.classList.toggle('disabled');
                        }
                    });
                }
            });
        }
    })
}



// Get items using AJAX
var char = document.getElementById('char');
var invArray = Array.from(document.getElementsByClassName('ti'));
invArray.forEach((img, i) => {
    img.addEventListener('click', (event) => {
        event.preventDefault();
        console.log("char/char"+i+".png")
        char.style.backgroundImage = 'url("char/char'+i+'.png")';
        sessionStorage.setItem('item', 'char'+i);
        
        fetch('play_saveItem.php', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'data=char'+i
        })
    })
});



// add friend using AJAX
function addFriend(event, form){
    event.preventDefault();

    var friendForm = new FormData(form);
    friendForm.append('username', sessionStorage.getItem('username'));

    fetch('play_addFriend.php', {
        method: 'POST', 
        body: friendForm
    })
    .then(response => response.json())
    .then(data => {
        var friendList = document.getElementById('friend-list');
        friendList.innerHTML += data['newFriend'];
        console.log(data);
    })
    .catch(error=>{
        alert('Error adding friend');}
        )
}



char.style.backgroundImage = 'url("char/'+sessionStorage.getItem("item")+'.png")';