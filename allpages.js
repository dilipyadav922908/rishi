const barBox = document.querySelector("#bar-box");
const menu = document.querySelector(".offscreen-menu");
const closeBtn = document.querySelector("#close-btn");
const startBtn = document.querySelector(".start-btn")
// open
barBox.addEventListener("click", () => {
    menu.classList.add("active");
});

// close
closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});
startBtn.addEventListener("click",()=>{
    console.log("adhth")
    window.location.href = 'sign-up.html';
})


