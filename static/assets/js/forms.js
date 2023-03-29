let ha = document.getElementById("ha-select");
let wa = document.getElementById("wa-select");
ha.addEventListener("change",(event)=>{
    let value = event.target.value;
    if (value == 2){
        document.getElementById("ha-2").style.display = "";
        document.getElementById("ha-4").style.display = "none";
    }else if (value == 3)
    {
        document.getElementById("ha-2").style.display = "none";
        document.getElementById("ha-4").style.display = "";
    }else{
        document.getElementById("ha-2").style.display = "none";
        document.getElementById("ha-4").style.display = "none";
    }
})
wa.addEventListener("change",(event)=>{
    let value = event.target.value;
    if (value == 2){
        document.getElementById("wa-2").style.display = "";
        document.getElementById("wa-3").style.display = "none";
        document.getElementById("wa-4").style.display = "none";
    }else if (value == 3)
    {
        document.getElementById("wa-2").style.display = "none";
        document.getElementById("wa-3").style.display = "";
        document.getElementById("wa-4").style.display = "none";
    }else if (value == 4){
        document.getElementById("wa-2").style.display = "none";
        document.getElementById("wa-3").style.display = "none";
        document.getElementById("wa-4").style.display = "";
    }else{
        document.getElementById("wa-2").style.display = "none";
        document.getElementById("wa-3").style.display = "none";
        document.getElementById("wa-4").style.display = "none";
    }
})