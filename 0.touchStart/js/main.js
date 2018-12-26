var count = 0;
function init(){
    console.log(456);
    var body = document.getElementsByTagName("body")[0];
    body.addEventListener("touchstart",touchHandler);
}
function touchHandler(e){
    console.log(e.touches[0]);
    count=count+1;
    if(count==1){
        var chun = document.getElementById("chun");
        chun.classList.remove("hidden");
        chun.classList.add("show");
    }
    if(count==2){
        var xia = document.getElementById("xia");
        xia.classList.remove("hidden");
        xia.classList.add("show");
    }
    if(count==3){
        var qiu = document.getElementById("qiu");
        qiu.classList.remove("hidden");
        qiu.classList.add("show");
    }
    if(count==4){
        var dong = document.getElementById("dong");
        dong.classList.remove("hidden");
        dong.classList.add("show");
    }

}