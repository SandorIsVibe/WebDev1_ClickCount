var count = 0;
var clickButton = document.getElementById("clickButton");
var clickCount = document.getElementById("clickCount");
var log = document.getElementById("myLog");

count = localStorage.getItem("myClickCount")
clickCount.innerHTML = count;   

function eventFunction() {
    
    //it will disappear if I refresh the page
    log.innerHTML = "event triggered"

    //it will not disappear as it is taking value from localStorage
    count++;
    localStorage.setItem("myClickCount", count)
    clickCount.innerHTML = count;
}
clickButton.addEventListener("click", eventFunction);

