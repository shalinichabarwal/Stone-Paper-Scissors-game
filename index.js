
var array = document.querySelectorAll(".btn");
for (var i = 0; i < array.length; i++) {
  array[i].addEventListener("click", game);
}
function game(){
  var random = Math.floor(Math.random() * 3) + 1;

if (random == 2) {
  var src = "./Stone, paper, scissor/paper.jpg";
} else if (random == 1) {
  var src = "./Stone, paper, scissor/rock.jpg";
} else {
  var src = "./Stone, paper, scissor/scissor.jpg";
}

  document.querySelector("#image").setAttribute("src", src);

  if (this.innerHTML == random + "<img src=" +'"'+ src + '">') {
    document.querySelector(".play").innerHTML = "Draw!";
  } else if (
    (this.innerHTML == '1<img src="./Stone, paper, scissor/rock.jpg">' && random == 2) ||
    (random == 1 && this.innerHTML == '3<img src="./Stone, paper, scissor/scissor.jpg">') ||
    (random == 3 && this.innerHTML == '2<img src="./Stone, paper, scissor/paper.jpg">')
  ) {
    document.querySelector(".play").innerHTML = "Computer won!";
  } else {
    document.querySelector(".play").innerHTML = "You won!";
  }
}
