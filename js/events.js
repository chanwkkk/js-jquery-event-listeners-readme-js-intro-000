//define functions here
function getIt(){
  $("p").on("click",()=>{
    alert("Hey!")
  })
}

function pressIt(){
  $('#typing').on("keydown",(e)=>{

    if(e.which===71){
      alert ("You pressed G!")
    }
  })
}

function frameIt(){
  $("img").on("load",()=>{
    var img1=document.querySelector('img');
     img1.className="tasty"
  })
}

function submitIt(){
  $("form").on("submit",(e)=>{
     alert ("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){
  getIt();
// call functions here
pressIt();
frameIt();
submitIt();
});
