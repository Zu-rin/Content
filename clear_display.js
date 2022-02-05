setInterval(()=>{
    let explanation = document.getElementById("kaisetsu");
    if (explanation.getElementsByTagName("p")[0]){
        explanation.getElementsByTagName("p")[0].remove();
        explanation.getElementsByClassName("ansbg")[0].removeAttribute("style");
    }
}, 128);