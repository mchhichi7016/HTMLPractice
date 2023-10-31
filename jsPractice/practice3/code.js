let count = 0;
let label = document.getElementById("label");
let button1 = document.getElementById("ct1");
let button2 = document.getElementById("ct2");
let button3 = document.getElementById("ct3");



button1.addEventListener('click', () => {
    label.innerHTML = "値: 0";
});

button2.addEventListener('click', () => {
    label.innerHTML = '値: '  + count++;
});

button3.addEventListener('click', () => {
    label.innerHTML = '値: ' + count--;
});