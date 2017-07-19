var modal = document.getElementById('myModal');
var captionText = document.getElementById("caption");

// -------- non-dynamic massacre --- to make it dynamic: ${} or the other, older way

var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
var modal5 = document.getElementById('myModal5');
var modal6 = document.getElementById('myModal6');
var modal7 = document.getElementById('myModal7');

var img = document.getElementById('VitaDansanta_mic');
var modalImg = document.getElementById("VitaDansanta_mare");

var img1 = document.getElementById('BattledSnail_mic');
var modalImg1 = document.getElementById("BattledSnail");
var img2 = document.getElementById('Hoplites_mic');
var modalImg2 = document.getElementById("Hoplites");
var img3 = document.getElementById('HulkFrog_mic');
var modalImg3 = document.getElementById("HulkFrog");
var img4 = document.getElementById('MariaLactans2_mic');
var modalImg4 = document.getElementById("MariaLactans2");
var img5 = document.getElementById('MaxiCooper_mic');
var modalImg5 = document.getElementById("MaxiCooper");
var img6 = document.getElementById('MiniCar_mic');
var modalImg6 = document.getElementById("MiniCar");
var img7 = document.getElementById('OlivesTrabi_mic');
var modalImg7 = document.getElementById("OlivesTrabi");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = modalImg.src;
}

img1.onclick = function(){
    modal1.style.display = "block";
    modalImg1.src = modalImg1.src;
}
img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = modalImg2.src;
}
img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = modalImg3.src;
}
img4.onclick = function(){
    modal4.style.display = "block";
    modalImg4.src = modalImg4.src;
}
img5.onclick = function(){
    modal5.style.display = "block";
    modalImg5.src = modalImg5.src;
}
img6.onclick = function(){
    modal6.style.display = "block";
    modalImg6.src = modalImg6.src;
}
img7.onclick = function(){
    modal7.style.display = "block";
    modalImg7.src = modalImg7.src;
}

//END of massacre --- to make it dynamic: `${}` or the other, older way

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}