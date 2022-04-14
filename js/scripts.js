let count = 4;
let arrImgNum = 0;

function initialize() {
    const main = document.getElementsByTagName("main")[0];

    for (let i = 0; i < 82; i++)
        main.appendChild(CreateSection())
}

function CreateSection() {
    let newSection = document.createElement("section");
    newSection.className = "Squares";
    for (let i = 0; i < 4; i++) {
        let newArticle = document.createElement("article");
        newArticle.className = "whiteColor";
        newArticle.onclick = () => {
            onClickEvent(newArticle)
        };
        newSection.appendChild(newArticle);
    }
    return newSection;
}

const onClickEvent = (event) => {
    if (event.className == "redColor")
        event.className = "whiteColor";
    else
        event.className = "redColor";
}

function CreateImg(imgSrc) {
    let DisnyImg = document.createElement("img");
    DisnyImg.className = "uncovering";
    DisnyImg.src = imgSrc;
    return DisnyImg;
}

function addImgInbox(num) {
    let arrImg = ["images/disneyPixe_12.jpg", "images/disneyPixe_8.jpg", "images/disneyPixe_4.jpg", "images/disneyPixe_11.jpg", "images/disneyPixe_7.jpg", "images/disneyPixe_3.jpg", "images/disneyPixe_10.jpg", "images/disneyPixe_6.jpg", "images/disneyPixe_2.jpg", "images/disneyPixe_9.jpg", "images/disneyPixe_5.jpg", "images/disneyPixe_1.jpg"];
    let Articles = document.getElementsByTagName("article");
    let disnyImg = CreateImg(arrImg[arrImgNum]);
    Articles[num].appendChild(disnyImg);
    arrImgNum++;
}

function addImgInboxMin(num) {
    let arrImg = ["images/4.jpg", "images/3.jpg", "images/2.jpg", "images/1.jpg"];
    let Articles = document.getElementsByTagName("article");
    let disnyImg = CreateImg(arrImg[arrImgNum]);
    Articles[num].appendChild(disnyImg);
    arrImgNum++;
}

function onClickPlus() {
    if (window.matchMedia("(max-width: 1200px)").matches) {
        onClickPlusMin();
    } else {

        if (arrImgNum < 12) {

            addImgInbox(count);
            addImgInbox(count + 2);
            addImgInbox(count + 8);
            count++;
            if (count == 6)
                count += 2;
        }
        if (arrImgNum == 12) {
            let show = document.getElementById("hidden");
            show.style.display = "block";
            if (count == 0) {
                clear();
                disnyMusic();
                arrImgNum = 0;
            }
            count = 0;
        }
    }
}

function onClickPlusMin() {
    if (arrImgNum < 4) {
        addImgInboxMin(count);
    }
    if (count == 7) {
        let show = document.getElementById("hidden");
        show.style.display = "block";

    }
    if (count == 8) {
        clear();
        disnyMusic();
    }
    count++;
}

function chengeWhite() {

    if (window.matchMedia("(max-width: 1200px)").matches) {
        Restart();
    }
}

function disnyMusic() {
    let audio = new Audio("images/Classic Walt Disney.mp3");
    audio.play();
}

function clear() {
    let ref = document.getElementById("buttonRef");
    let show = document.getElementById("hidden");
    let plus = document.getElementById("plusBut");
    show.style.display = "none";
    plus.style.display = "none";
    ref.style.display = "block";
}

function Restart() {
    location.reload(true);
}

function addOnClick() {

    let article = document.getElementsByTagName("article");
    for (let i = 0; i < 5; i++) {
        article[i].setAttribute("onclick", "onClickEvent(this)");
    }

}