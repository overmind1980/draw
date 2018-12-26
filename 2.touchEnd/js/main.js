var count = 0;
var currentPage = 0;
var touStartY = -100;
function init(){
    console.log(456);
    var body = document.getElementsByTagName("body")[0];
    body.addEventListener("touchstart",touchStartHandler);
    body.addEventListener("touchend",touchEndHandler);
}
function touchStartHandler(e){
    console.log(e.touches[0]);
    touStartY = e.touches[0].pageY;
}

function touchEndHandler(e){
    var touEndY = e.changedTouches[0].pageY;
    if(touStartY - touEndY>200){
        count=count+1;

        var chun = document.getElementById("chun");
        var xia = document.getElementById("xia");
        var qiu = document.getElementById("qiu");
        var dong = document.getElementById("dong");

        if(count==1){
            chun.classList.remove("none");
            chun.classList.add("show");
        }
        else if(count==2){
            chun.classList.remove("show");
            chun.classList.add("hidden");
            xia.classList.remove("none");
            xia.classList.add("show");
        }
        else if(count==3){

            xia.classList.remove("show");
            xia.classList.add("hidden");
            qiu.classList.remove("none");
            qiu.classList.add("show");
        }
        else if(count==4){
            qiu.classList.remove("show");
            qiu.classList.add("hidden");
            dong.classList.remove("none");
            dong.classList.add("show");
        }
    }
}