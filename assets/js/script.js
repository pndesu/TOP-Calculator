const time = document.querySelector('.time');
function updateTime(){
    let hourMinute = new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
    time.textContent = `${hourMinute}`;
}
setInterval(updateTime, 100);