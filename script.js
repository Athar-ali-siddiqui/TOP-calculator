
let arr = Array(3);
let index = 0;
let clearScreen = false;

const btns = document.querySelectorAll(".btn");
const oprt = document.querySelectorAll(".opr");
// one.onclick = () => console.log("1");
const screen = document.querySelector(".upper");
const result = document.querySelector(".lower");
const clearBtn = document.getElementById("clear");
const delBtn = document.getElementById("del");


clearBtn.addEventListener("click" , clear);
delBtn.addEventListener("click" , del);




function clear(){
    screen.textContent = ""; 
    result.textContent = "0"
    index = 0;
}
function del(){
    
    let text = screen.textContent;
    if(text === "0") return;
    screen.textContent = text.replace(text[text.length - 1],''); 
}


btns.forEach( 
    (btn) => {
        btn.addEventListener("click" , () => setText(btn.textContent))
    }
)

oprt.forEach( 
    (btn) => {
        btn.addEventListener("click" , () => setOpr(btn.textContent))
    }
)
function setOpr(t){
    if(clearScreen == true) {
        screen.textContent = "";
        clearScreen = false;
    }
    screen.textContent += result.textContent;
    if(index == 0) {
        arr[index++] = result.textContent;
        arr[index++] = t;
        screen.textContent += t;
        clearScreen = true;
    }
    else if(index == 2){
        arr[index] = result.textContent;
        index = 0;
        solve(t);
    }
    else result.textContent = "SYNTAX ERROR"
}

function setText(t){
    if(clearScreen == true) {
        result.textContent = "";
        clearScreen = false;
    }
    if(result.textContent === "0") result.textContent = "";
    result.textContent += t; 
    console.log(t);
}

function solve(opr){
    console.log("here in solve")
    const mid_opr = arr[1];
    let ans = parseFloat(arr[0]);
    if(mid_opr === "+"){
        ans +=  parseFloat(arr[2])
    }
    else if(mid_opr === "-"){
        ans -=  parseFloat(arr[2])
    }
    else if(mid_opr === "*"){
        ans *=  parseFloat(arr[2])
    }
    else if(mid_opr === "/"){
        ans /=  parseFloat(arr[2])
    }
    else if(mid_opr === "%"){
        ans =  parseFloat(screen.textContent) /100;
    }
    result.textContent = ans;
    if(opr === "="){
        screen.textContent += opr;
        clearScreen = true;
    }
    else{
        arr[index++] = ans;
        arr[index++] = opr
        screen.textContent = ans + opr;
        clearScreen = true;
    }
}