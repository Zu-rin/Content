const removeBlur = (target) => {
    if (target.getElementsByTagName("p")[0]){
        target.getElementsByTagName("p")[0].remove();
        target.getElementsByClassName("ansbg")[0].removeAttribute("style");
    }
}

const target = document.getElementById("kaisetsu");
const observeOption = {
    childList: true,
    subtree: true
}

const observer = new MutationObserver((mutationList, obs) => {
    mutationList.forEach((mutation) => {
        // 要素が追加されれば変更
        if(mutation.addedNodes.length) {
            removeBlur(target);
            // Blur削除1回で監視終了
            obs.disconnect();
        }
    });
});

observer.observe(target, observeOption);
