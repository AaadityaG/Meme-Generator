const generateMemeBtn = document.querySelector(".meme-generator .generate-btn");
const memeIMG = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title")
const memeAuthor = document.querySelector(".meme-author");

const updateDetails = (url, title, author) => {
    memeIMG.setAttribute("src", url);
    memeIMG.setAttribute("alt", "MEME");
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/programming_memes")
    .then((response) => response.json())
    .then((data) => {
        updateDetails(data.url, data.title, data.author);
    })
}

generateMemeBtn.addEventListener("click", generateMeme);