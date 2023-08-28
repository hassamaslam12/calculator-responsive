var valueInString = "";
var inp = document.getElementById("inp");






function getVal(val){
    if(valueInString==="new"){
        inp.value = "";
        valueInString =""
    }
    
    inp.value += val;
    valueInString += val;
}


function operator(o){
    if(valueInString==="new"){
        valueInString = inp.value;
    }
    inp.value = null;
    
    if(
        valueInString.endsWith('+') ||
        valueInString.endsWith('-') ||
        valueInString.endsWith('*') ||
        valueInString.endsWith('/')     
        ){
            
            valueInString = valueInString.slice(0,-1) ;
            valueInString += o;
            console.log("if" + o)
            console.log(valueInString)
            
        }else{
            
            valueInString += o;
    }
}


function del(){
    inp.value = inp.value.slice(0,-1);

}

function c(){
    inp.value = "";
    valueInString = "";
}


function onEquals(){
    if(
        valueInString.endsWith('+') ||
        valueInString.endsWith('-') ||
        valueInString.endsWith('*') ||
        valueInString.endsWith('/')     
        ){
            inp.value = "err";
        }
    else{
    valueInString = eval(valueInString);
    inp.value = valueInString;
    valueInString = "new";
}
}