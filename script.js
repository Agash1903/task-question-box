// function button1(){
   
//     var txt=document.getElementById("text").value;
    
//     if(txt==""){
//         alert("Please enter a value");
//     }
//     else if(txt=="good" || txt=="Good" || txt=="agash is a good boy"){
//         document.getElementById("h2").innerHTML="Good Vibe";
//     }
//     else if(txt=="how are you" ){
//         document.getElementById("h2").innerHTML="I am good man!!";
//     }
   
// }
// function button2(){
//     document.getElementById("text").value="";
//     document.getElementById("h2").innerHTML="Wrong Meassage";
// }
function button2(){
    alert("Question Declined");
}

let questions = [
    "agash is a good boy",
    "how are you",
    "what is your name",
    "are you happy right now",
    "what is your profession",
    "are you a programmer",
    "how many languages do you know",
    "are you an engineer",
    "what is your age",
    "who is the cuurent owner of tesla",
    "who is the prime minister of india",
   "how old are you",
   "what is your name",
   "are you happy right now",
   "what is your profession",
   "are you a programmer"
]

function button1(){
   let question = document.querySelector("#text").value;
   question = question.toLowerCase();
   if(questions.includes(question)) window.alert("Good Vibe ");
   else window.alert("Bad Mood is Comming bro");
}
