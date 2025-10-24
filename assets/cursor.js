// author of the original code: Rusakov Mikhail Yurievich
// reference: https://myrusakov.ru/js-custom-cursor.html

const cursor = document.getElementById("cursor")

const mouseMove = function (e) {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
};

document.addEventListener("mousemove", mouseMove); 