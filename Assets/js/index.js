function score(){
  var a = 0;
  var ans1=document.jsquiz.answer1.value;
  var ans2=document.jsquiz.answer2.value;
  var ans3=document.jsquiz.answer3.value;
  var ans4=document.jsquiz.answer4.value;
  var ans5=document.jsquiz.answer5.value;
  var ans6=document.jsquiz.answer6.value;
  var ans7=document.jsquiz.answer7.value;
  var ans8=document.jsquiz.answer8.value;
  var ans9=document.jsquiz.answer9.value;
  var ans10=document.jsquiz.answer10.value;
  if(ans1 == "All of these"){a++}
   if(ans2 == "Document Object Model"){a++}
    if(ans3 == "True"){a++}
     if(ans4 == "Functions"){a++}
      if(ans5 == "all of these"){a++}
       if(ans6 == "let and const"){a++}
     if(ans7 == "int"){a++}
     if(ans8 == "Brendan Eich"){a++}
      if(ans9 == ".js"){a++}
       if(ans10 == "Microsoft"){a++}

       var percentage = (a/10)*100
       let score = percentage

       var evaluation;
       if(score >= 70){
         evaluation = "Excellent keep it up!"
       }
       else if (score >= 60){
           evaluation = "Fairly done!"
       }
       else if (score >= 41 ){
         evaluation = "You can do better!"
       }
       else if (score <= 40 ){
         evaluation = "Try Again!"
       }
       
  
  var current_score = document.getElementById("current");   
   var kept_score = document.getElementById("kept");
   

    current_score.innerHTML += "<p>You have scored : " + percentage + "%</p>";    
    kept_score.innerHTML += " <p> Evaluation: " + evaluation + "% </p>";

    return false;

}
function time(){

       var startTime = performance.now()

          doSomething()

       var endTime =performance.now()

       var time_taken = document.getElementById("time");

    time_taken.innerHTML +=  " <p> Time taken :${endTime - startTime} minutes </p> ";
  }

  