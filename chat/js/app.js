let chat=document.querySelector("#chat");
let chatMini=document.querySelector("#chat-mini")
let chatInput=document.querySelector('#chat-input')
chat.querySelector(".close-icon").addEventListener('click',function(){
    chat.classList.remove('active')
})
chatMini.onclick=function(){
    chat.classList.add("active")
}
chatInput.addEventListener("keypress",function(e){
    if(e.keyCode==13){
        e.preventDefault()
    }
})
chatInput.addEventListener("keyup",function(e){
if(e.keyCode==13){
    let userInput=this.value;
        if(userInput.length){
            if(userInput[0].toUpperCase()==userInput[0]){
                AddMessage(userInput,"support")
            }else{
                AddMessage(userInput,"user")
            }
        }
}
})
function AddMessage(a,b){
    let div =document.createElement('div');
    div.className='message '+b;
    let textP=document.createElement('p');
    textP.innerText=a;
    let timeP=document.createElement('p')
    timeP.className="time";
    let now=new Date();
    timeP.innerText=now.getHours()+":"+now.getMinutes();
    div.appendChild(textP)
    div.appendChild(timeP)
    chat.querySelector("main").appendChild(div);
    chatInput.value=""
}