let btn = document.querySelector(".btn");
let div = document.querySelector(".notes");
let input = document.querySelector(".input-field");
let popup = document.querySelector(".popup");

btn.addEventListener("click", caledd);

function caledd(e){
  let text = input.value;
  
   if(text== ""){
    let voiceee = new SpeechSynthesisUtterance("please inter some text");
          window.speechSynthesis.speak(voiceee);
   }else{
     let voice = new SpeechSynthesisUtterance(text + " " + " , is added successfully");
     window.speechSynthesis.speak(voice);

    var id = Math.ceil(Math.random()*9999);
    var newLi = document.createElement("li");
        newLi.classList.add("show");
        newLi.id = id;
    var pTag = document.createElement("p");
    let dd = document.createElement("div");
    var newBtn = document.createElement("button");
    var checkBtn = document.createElement("button");
        newBtn.innerHTML= "<i class='bx bx-trash'></i>";
        checkBtn.innerHTML = "<i class='bx bx-edit'></i>";
        newBtn.classList.add("dlBtn");
        checkBtn.classList.add("ckBtn");
        pTag.innerHTML = text;
        newLi.appendChild(pTag);
        newLi.appendChild(dd);
        dd.appendChild(checkBtn);
        dd.appendChild(newBtn);
        div.appendChild(newLi);
        input.value = "";
      };
     checkBtn.addEventListener("click", ()=>{
      if(input.value !== "" ){
        alert("please save the first text")}
        else{
          input.value = pTag.innerHTML;
          newLi.remove();
        
      }
     })

    newBtn.addEventListener("click", deteted);
    function deteted(){
      popup.style.display = "block";
      let sure = document.getElementById("sure-btn");
      sure.addEventListener("click", function (){
            popup.style.display = "none";
            newLi.remove();
       });
    };

    newLi.addEventListener("click", function(){
       newLi.querySelector("p").classList.toggle("pp");
    })};

        

  input.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
      caledd();
    }
  });

  function can(){
    popup.style.display = "none";
    }