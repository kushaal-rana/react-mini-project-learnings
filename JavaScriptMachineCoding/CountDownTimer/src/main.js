(function () {
  var hour = document.querySelector(".hour");
  var minute = document.querySelector(".minute");
  var second = document.querySelector(".second");

  var startBtn = document.querySelector(".start");
  var stopBtn = document.querySelector(".stop");

  var resetBtn = document.querySelector(".reset");

  var countDownTimer = null;

  startBtn.addEventListener("click", () => {
    if (hour.value == 0 && minute.value == 0 && second.value == 0) return;

    function startTimer() {
      startBtn.style.display = "none";
      stopBtn.style.display = "initial";

      countDownTimer = setInterval(() => {
        timer();
      }, 1000);
    }
    startTimer();
  });

  resetBtn.addEventListener("click", () => {
    hour.value = "00";
    minute.value = "00";
    second.value = "00";
    stopInterval();
  });

  function stopInterval(state) {
    console.log(state);
    debugger;
    startBtn.innerHTML = state === "pause" ? "Continue" : "Start";
    startBtn.style.display = "initial";
    stopBtn.style.display = "none";
    clearInterval(countDownTimer);
  }

  stopBtn.addEventListener("click", () => {
    stopInterval("pause");
  });

  function timer() {
    if (second.value > 60) {
      minute.value++;
      console.log(typeof second.value, "second", second.value);
      second.value = parseInt(second.value) - 60;
    }
    if (minute.value > 60) {
      hour.value++;
      minute.value = parseInt(minute.value) - 60;
    }
    if (hour.value == 0 && minute.value == 0 && second.value == 0) {
      hour.value = "";
      minute.value = "";
      second.value = "";
      stopInterval();
    } else if (second.value != 0) {
      second.value = `${second.value <= 10 ? "0" : ""}${second.value - 1}`;
    } else if (minute.value != 0 && second.value == 0) {
      second.value = 59;
      minute.value = `${minute.value <= 0 ? "0" : ""} ${minute.value - 1}`;
    } else if (hour.value != 0 && minute.value == 0) {
      minute.value = 60;
      hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
    }
  }
})();
