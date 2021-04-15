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