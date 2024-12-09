const removeBlur = (target) => {
    ans = target.querySelector(".ansbg");
    console.log(ans);
    noise = ans.getElementsByTagName("div")[0].children[0]
    console.log(noise);
    noise.remove();
    console.log(ans);
    ans.getElementsByTagName("div")[0].children[0].removeAttribute("style");
}

const target = document.getElementById("kaisetsu");
removeBlur(target);
