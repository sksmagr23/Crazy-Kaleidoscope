function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
}

setInterval(() => {
    let boxes = document.getElementsByClassName("jst")
    Array.from(boxes).forEach(e => {
        e.style.backgroundColor = getRandomColor()
    })
}, 500);

setInterval(() => {
    document.querySelector(".box-inner b").style.color = getRandomColor();
}, 500);