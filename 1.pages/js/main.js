var count = 0;
function init(){
    console.log(456);
    var body = document.getElementsByTagName("body")[0];
    body.addEventListener("touchstart",touchHandler);
}
function touchHandler(e){
    console.log(e.touches[0]);
    count=count+1;

    var chun = document.getElementById("chun");
    var xia = document.getElementById("xia");
    var qiu = document.getElementById("qiu");
    var dong = document.getElementById("dong");

    if(count==1){
        chun.classList.remove("hidden");
        chun.classList.add("show");
    }
    else if(count==2){
        chun.classList.remove("show");
        chun.classList.add("hidden");
        xia.classList.remove("hidden");
        xia.classList.add("show");
    }
    else if(count==3){

        xia.classList.remove("show");
        xia.classList.add("hidden");
        qiu.classList.remove("hidden");
        qiu.classList.add("show");
    }
    else if(count==4){
        qiu.classList.remove("show");
        qiu.classList.add("hidden");
        dong.classList.remove("hidden");
        dong.classList.add("show");
    }

}