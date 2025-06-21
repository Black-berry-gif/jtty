/*const myHeading = document.querySelector("h1");
myHeading.textContent = "小哥小哥，血色玫瑰人生";

let nsy = "羊宫妃娜"
if (nsy === "羊宫妃娜"){
    alert("我是羊噶");
}else{
    alert("我要烤羊");
}

document.querySelector("html").addEventListener("click", function(){
    alert("你是一个nsyc");
});*/

document.addEventListener('DOMContentLoaded', function(){
const myText = document.querySelector(".toggle-text");
const myImage = document.querySelector("img");

myImage.onclick = () =>{
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "11主要.jpg"){
    myImage.setAttribute("src", "比心.jpg");
    myText.textContent = "小哥，你真厉害";
  }else{
    myImage.setAttribute("src", "11主要.jpg")
    myText.textContent = "小哥，给你个比心要不要"
  }
};
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
  const myName = prompt("小哥告诉我你叫什么名字");
  localStorage.setItem("名字", myName);
  myHeading.textContent = `${storedName}小哥你好`
}

if (!localStorage.getItem("名字")){
  setUserName();
}else{
  const storedName = localStorage.getItem("名字");
  myHeading.textContent = `${storedName}小哥你好`
}

myButton.onclick = function (){
  setUserName();
};
