const button = document.querySelectorAll(".color-btn");
const resetBtn = document.querySelector(".reset");

button.forEach(btn => {
    btn.addEventListener("click", function() {
        document.body.style.backgroundColor = btn.getAttribute("data-color");
    })
});

resetBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
})