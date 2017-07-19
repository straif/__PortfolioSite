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
var modal8 = document.getElementById('myModal8');
var modal9 = document.getElementById('myModal9');
var modal10 = document.getElementById('myModal10');
var modal11 = document.getElementById('myModal11');
var modal12 = document.getElementById('myModal12');
var modal13 = document.getElementById('myModal13');
var modal14 = document.getElementById('myModal14');
var modal15 = document.getElementById('myModal15');
var modal16 = document.getElementById('myModal16');
var modal17 = document.getElementById('myModal17');

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
var img8 = document.getElementById('michelangelo_mic');
var modalImg8 = document.getElementById("michelangelo_mare");
var img9 = document.getElementById('hymera_mic');
var modalImg9 = document.getElementById("hymera_mare");
var img10 = document.getElementById('trol_mic');
var modalImg10 = document.getElementById("trol_mare");
var img11 = document.getElementById('space_mic');
var modalImg11 = document.getElementById("space_mare");
var img12 = document.getElementById('steam_mic');
var modalImg12 = document.getElementById("steam_mare");
var img13 = document.getElementById('poster_mic');
var modalImg13 = document.getElementById("poster_mare");
var img14 = document.getElementById('ork_mic');
var modalImg14 = document.getElementById("ork_mare");
var img15 = document.getElementById('a_mic');
var modalImg15 = document.getElementById("a_mare");
var img16 = document.getElementById('cugnot_mic');
var modalImg16 = document.getElementById("cugnot_mare");
var img17 = document.getElementById('grot_mic');
var modalImg17 = document.getElementById("grot_mare");

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
img8.onclick = function(){
    modal8.style.display = "block";
    modalImg8.src = modalImg8.src;
}
img9.onclick = function(){
    modal9.style.display = "block";
    modalImg9.src = modalImg9.src;
}
img10.onclick = function(){
    modal10.style.display = "block";
    modalImg10.src = modalImg10.src;
}
img11.onclick = function(){
    modal11.style.display = "block";
    modalImg11.src = modalImg11.src;
}
img12.onclick = function(){
    modal12.style.display = "block";
    modalImg12.src = modalImg12.src;
}
img13.onclick = function(){
    modal13.style.display = "block";
    modalImg13.src = modalImg13.src;
}
img14.onclick = function(){
    modal14.style.display = "block";
    modalImg14.src = modalImg14.src;
}
img15.onclick = function(){
    modal15.style.display = "block";
    modalImg15.src = modalImg15.src;
}
img16.onclick = function(){
    modal16.style.display = "block";
    modalImg16.src = modalImg16.src;
}
img17.onclick = function(){
    modal17.style.display = "block";
    modalImg17.src = modalImg17.src;
}

//END of massacre --- to make it dynamic: `${}` or the other, older way

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}