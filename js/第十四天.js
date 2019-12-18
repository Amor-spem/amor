function NewTime(){
    document.getElementById("NewTime").innerHTML = new Date();
}
function loop() {
    var cars = ["BMW", "Volvo", "porsche", "Ford", "Fiat", "Audi"]; 
    var car =[];
    for(i=0;i<cars.length;i++){
        car += cars[i] + " | ";
    }
    document.getElementById("loop").innerHTML = "有很多汽车 "+car;
}
