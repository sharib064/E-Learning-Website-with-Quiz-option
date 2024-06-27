let ans=[1,1,1,2,2,2];
let ques=["What does HTML stand for?",
"Which tag is used to define a hyperlink in HTML?",
"What is the correct CSS syntax for changing the font color of a text to red?",
"Which CSS property is used to control the spacing between lines of text?",
"Which keyword is used to declare variables in JavaScript with block scope?",
"What will typeof [] return in JavaScript?"];
let options=[["Hyper Text Markup Language","High Tech Modern Language","Hyperlinks and Text Markup Language","Home Tool Markup Language"],
["<a>","<link>","<hyperlink>","<url>"],
["color: red;","text-color: red;","font-color: red;","text-style: red;"],
["text-spacing","line-height","text-spacing","spacing"],
["var","let","const","block"],
["array","object","undefined","null"]];
let i=0;
let score=0;
let button=document.querySelectorAll("button");
let p=document.querySelector("p");
button.forEach((btn)=>{
    btn.addEventListener("click",(evt)=>{
        if(ans[i]==evt.target.value){
            score++;
        }
        i++;
        clearTimeout(timer);
        if(i>=6){
            scored();
        }else{
            update();
        }
    });
});
update();
function update(){
    p.innerText=ques[i];
    let j=0;
    button.forEach((btn)=>{
        btn.innerText=options[i][j++];
    });
    startTimer();
}
function scored(){
    button.forEach((btn)=>{
        btn.remove();
    });
    p.innerText=`Your Score: ${score}`;
}
function startTimer(){
    timer=setTimeout(() => {
        i++;
        if(i>=6){
            scored();
        }else{
            update();
        }
    }, 10000);
}
function req(data){
    window.location.href="index.html";
}