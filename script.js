var count = 0;
var clickButton = document.getElementById("clickButton");
var clickCount = document.getElementById("clickCount");

clickButton.addEventListener("click", function () {
    count++;
    clickCount.innerHTML = count;
});