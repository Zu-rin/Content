const baseURL = `${window.location.protocol}//${window.location.hostname}`

const removeBlur = () => {
    target = document.getElementById("kaisetsu");
    ans = target.querySelector(".ansbg");
    noise = ans.getElementsByTagName("div")[0].children[0]
    noise.remove();
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
    params = probremInfo.match(/(?<year>\d*|元)年.*(?<season>春|秋).*問(?<number>\d*)<br>/).groups
    year = params.year == "元" ? "01" : params.year.padStart(2, '0');
    season = params.season == "春" ? "haru" : "aki";
    number = params.number;
    console.log(probremInfo);
    console.log("year", year);
    console.log("season", season);
    console.log("number", number);
    url = `${baseURL}/kakomon/${year}_${season}/am2_${number}.html`;
    imagedir = `${baseURL}/kakomon/${year.toString().padStart(2, '0')}_${season}`;
    console.log(url);
    return [url, imagedir];
}

removeBlur();
[url, imagedir] = getExplainURL();
replaceExplain(url, imagedir);

