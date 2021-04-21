var kepek = ['<img src="kepek/bolyhos.jpg" alt=""/>', '<img src="kepek/erdeikutyatej.jpg" alt=""/>', '<img src="kepek/fatorzo.jpg" alt=""/>', '<img src="kepek/kokorcsin1.jpg" alt=""/>', '<img src="kepek/kokrcsin_mokas_virag.jpg" alt=""/>', '<img src="kepek/koponyalamavas.jpg" alt=""/>', '<img src="kepek/oregfej.jpg" alt=""/>', '<img src="kepek/rongyoskokorcsin.jpg" alt=""/>', '<img src="kepek/szerelmespar.jpg" alt=""/>'];
$(function (){
    htmlModositasok();
    $("img").mouseenter(formazFel);
    $("img").mouseleave(formazLe);
});

function htmlModositasok(){
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if(i === 0){
                $("article div").eq(i).append(kepek[j]);
            }
            else if(i === 1){
                $("article div").eq(i).append(kepek[j+3]);
            }
            else{
                $("article div").eq(i).append(kepek[j+6]);
            }
        }
    } 
}

function formazFel(){
    $(this).addClass("kiemel");
}

function formazLe(){
    $(this).removeClass("kiemel");
}