var modal = document.getElementById('myModal');
var captionText = document.getElementById("caption");

//to make it dynamic: ${} or the other, older way
var img = document.getElementById('VitaDansanta_mic');
var modalImg = document.getElementById("VitaDansanta_mare");


img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = modalImg.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}