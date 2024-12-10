const removeBlur = () => {
    target = document.getElementById("kaisetsu");
    ans = target.querySelector(".ansbg");
    console.log(ans);
    noise = ans.getElementsByTagName("div")[0].children[0]
    console.log(noise);
    noise.remove();
    console.log(ans);
    ans.getElementsByTagName("div")[0].children[0].removeAttribute("style");
}

const replaceExplain = (url, imagedir) => {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const correctExplain = doc.getElementById("kaisetsu");
            console.log(correctExplain);
            const img = correctExplain.getElementsByTagName("img");
            for (let i = 0; i < img.length; i++) {
                console.log(img[i].src);
                srcfile = img[i].src.split("/").pop();
                img[i].src = `${imagedir}/img/${srcfile}`;
            }

            target = document.getElementById("kaisetsu");
            target.innerHTML = correctExplain.innerHTML;

            const newHeading = document.createElement('h3');
            newHeading.textContent = '解説';
            target.insertBefore(newHeading, target.firstChild);
        }
    )
}

const getExplainURL = () => {
    probremInfo = document.getElementById("mainCol").querySelector(".anslink").innerHTML;
    year = probremInfo.match(/(?<year>\d*)年/)[1];
    season = probremInfo.match(/(?<season>春|秋)/)[1] == "春" ? "haru" : "aki";
    number = probremInfo.match(/問(?<number>\d*)/)[1];
    // console.log(probremInfo);
    // console.log("year", year);
    // console.log("season", season);
    // console.log("number", number);
    url = `https://www.nw-siken.com/kakomon/${year.toString().padStart(2, '0')}_${season}/am2_${number}.html`;
    imagedir = `https://www.nw-siken.com/kakomon/${year.toString().padStart(2, '0')}_${season}`;
    console.log(url);
    return [url, imagedir];
}

removeBlur();
[url, imagedir] = getExplainURL();
replaceExplain(url, imagedir);

