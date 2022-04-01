const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");
let color = document.querySelector(".color");

let count = 0;


btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
    const target = e.currentTarget.classList;
    if (target.contains('increase')) {
        count++;
    }
    value.textContent = count

    });

})