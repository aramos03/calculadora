function concat(digito){

    if(document.getElementById("result").innerHTML == 0){
        document.getElementById("result").innerHTML = "";
    }
    
    if(isNaN(digito) == false){
        document.getElementById("result").innerHTML += digito;
    } else if(isNaN(document.getElementById("result").innerHTML.slice(-1)) == false) {
        document.getElementById("result").innerHTML += digito;
    } else {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML.slice(0, -1)
        document.getElementById("result").innerHTML += digito;
    }
}

function evaluar(){
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML.replace(/x/g, "*");
    document.getElementById("result").innerHTML = eval(document.getElementById("result").innerHTML);
}

function sqrt(){
    document.getElementById("result").innerHTML = Math.sqrt(document.getElementById("result").innerHTML).toFixed(5);
}

function borrar(){
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML.slice(0, -1);
    if(document.getElementById("result").innerHTML == ""){
        document.getElementById("result").innerHTML = "0";
    }
}

function limpiar(){
    document.getElementById("result").innerHTML = 0;
}