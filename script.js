$( ".window" )
  .draggable({
    cancel: ".inside,input,textarea"
  });



$("input.address").focus(function(){
  $(".fa-refresh").hide(500);
this.select();
}).focusout(function(){
  $(".fa-refresh").show(500);
}); 

window.onload = function () {
    // randomObject();
    console.log("hhi");

    var zoom = document.getElementById(zoom);

    img.onclick = function() { 
      console.log("hhi");

      modal.style.display = "block";
    }
    
}


function randomObject() {
  // let posx = Math.random() * (700 - 50) + 50;
  // let posy = Math.random() * (700 - 50) + 50;
  // console.log(posx);
  let temp = document.getElementsByClassName("folder");
  // for(let i = 0; i < temp.length; i++) {
  //   temp[i].style.left = posx +"px";
  //   temp[i].style.top = posy +"px";
  //   posx = Math.random() * (700 - 50) + 50;
  //   posy = Math.random() * (700 - 50) + 50;
  // }
  temp[0].style.left = Math.random() * (10 - 0) + 0 +"%";
  temp[0].style.top = Math.random() * (10 - 0) + 0  +"vh";

  temp[1].style.left = Math.random() * (10 - 0) + 0 +"%";
  temp[1].style.top = Math.random() * (40 - 30) + 40  +"vh";


  temp[2].style.left = Math.random() * (10 - 0) + 0+"%";
  temp[2].style.top = Math.random() * (70 - 60) + 60  +"vh";




}

function folder() {

  let elem = document.getElementById('nav2');
  let ht = window.getComputedStyle(elem, null).getPropertyValue("display");
  console.log(  ht);


  if(ht == "block")
   {
     
    document.getElementById("nav2").style.display = "none";
    document.getElementById("nav3").style.display = "none";

    document.getElementsByClassName("thumbs2")[0].style.marginLeft = '0px';


   }
   else {
    document.getElementById("nav2").style.display = "block";
    document.getElementById("nav3").style.display = "block";

    document.getElementsByClassName("thumbs2")[0].style.marginLeft = '5px';


   }
}

function folder_pc() {

  let elem = document.getElementById('nav2');
  let ht = window.getComputedStyle(elem, null).getPropertyValue("display");
  console.log(  ht);


  if(ht == "block")
   {
     
    document.getElementById("nav2").style.display = "none";
    document.getElementById("nav3").style.display = "none";

    // document.getElementsByClassName("thumbs2")[0].style.marginLeft = '33px';


   }
   else {
    document.getElementById("nav2").style.display = "block";
    document.getElementById("nav3").style.display = "block";

    // document.getElementsByClassName("thumbs2")[0].style.marginLeft = '0px';


   }
}

function menu() {

  let elem = document.getElementById('nav');
  let ht = window.getComputedStyle(elem, null).getPropertyValue("display");
  console.log(  ht);


  if(ht == "block")
   {
     
    document.getElementById("nav").style.display = "none";

    // document.getElementsByClassName("thumbs2")[0].style.marginLeft = '33px';


   }
   else {
    document.getElementById("nav").style.display = "block";

    // document.getElementsByClassName("thumbs2")[0].style.marginLeft = '0px';


   }
}

function modal(num) {
  var modal = document.getElementsByClassName("myModal")[num];

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementsByClassName("myImg")[num];
  var modalImg = document.getElementsByClassName("img01")[num];
  
  modalImg.src = img.src;

    modal.style.display = "block";

  
  
  
}

function closeModal(num) {

  // Get the <span> element that closes the modal
  var modal = document.getElementsByClassName("myModal")[num];

  var span = document.getElementsByClassName("close")[num];
  
  // When the user clicks on <span> (x), close the modal
    modal.style.display = "none";
}

function modalVid(num) {
  var modal = document.getElementsByClassName("myModal")[num];

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var vid = document.getElementsByClassName("myImg")[num];
  var modalImg = document.getElementsByClassName("img01")[num];
  
  modalImg.src = vid.src;

    modal.style.display = "block";


}