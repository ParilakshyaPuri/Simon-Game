let start = false;
let level = 1;
let generated_pattern = [];
let user_pattern = [];

const colors = ["red" , "green" , "blue" , "yellow"];
// const btn = document.querySelectorAll('.btn');

document.addEventListener("keypress" , () => {
    if (!start) {
        let name = prompt('Enter your name');
        $('h1').text('Level ' + level);
        alert('All the best ' + name + ' !');
        start = true;

        generate_sequence();
    }
})

$('.btn').click(function() {    
    var user_color = $(this).attr("id");
    playSound(user_color);
    user_pattern.push(user_color);
    check(user_pattern.length - 1);
})

function generate_sequence() {
    user_pattern = [];
    let index = randomNumber();
    generated_pattern.push(colors[index]);
    flash(colors[index]);
    // check();
}

function check(current_level) {
    if (user_pattern[current_level] === generated_pattern[current_level]) {
        if (user_pattern.length === generated_pattern.length) {
            level++;
            $('h1').text('Level: ' + level);
            generate_sequence();
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        startOver();
    }
}

function startOver() {
    level = 1;
    generated_pattern = [];
    user_pattern = [];
    start = false;
  }
  

function playSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

function flash(color) {
    $('#' + color).fadeIn(100).fadeOut(100).fadeIn(100);
}

function randomNumber() {
    let num = Math.floor(Math.random() * 4);
    return num;
}