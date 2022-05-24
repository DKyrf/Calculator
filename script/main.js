const res = document.querySelector("#result");
const hys = document.querySelector("#hystory");
const clear = document.querySelector("#clear");
const container = document.querySelector("#constainer")


//ButtonsListener
document.addEventListener("click", (e)=>{
    var target = e.target.value
    if(target === "="){
        calculate(res.value)
    }else if(target === "C"){
        res.value = ""
    }else if(target !== undefined){
        res.value += target
    }
})


//KeysListener
document.addEventListener("keydown", monitor)

const memory = [];

function calculate (n){
    const calculator = eval(n || null);

    if(isNaN(calculator)){
        console.log("Can't calculate")
    }else{
        res.value = calculator;
        memory.push(res.value);
        const memoryValue = memory[memory.length-1];
        hys.innerHTML += `${memoryValue}`
    }
}

//Function for buttons 
function monitor(k){
    //Numbers

    if(k.key === "1"){
        res.value += 1
    }else if(k.key === "2"){
        res.value += 2
    }else if(k.key === "3"){
        res.value += 3
    }else if(k.key === "4"){
        res.value += 4
    }else if(k.key === "5"){
        res.value += 5
    }else if(k.key === "6"){
        res.value += 6
    }else if(k.key === "7"){
        res.value += 7
    }else if(k.key === "8"){
        res.value += 8
    }else if(k.key === "9"){
        res.value += 9
    }else if(k.key === "0"){
        res.value += 0
    };

    //Operators

    if(k.key === "+"){
        res.value += "+"
    }else if(k.key === "-"){
        res.value += "-"
    }else if(k.key === "*"){
        res.value += "*"
    }else if(k.key === "/"){
        res.value += "/"
    }else if(k.key === "."){
        res.value += "."
    };
    
    //Evaluate

    if(k.key === "=" || k.key === "Enter"){
        calculate(res.value)
    };

    //BackSpace

    if(k.key === "Backspace"){
        const resInput = res.value;
        res.value = resInput.substring(0, resInput.length - 1)
    }

}