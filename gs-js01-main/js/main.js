$("#button").on("click", function () {
const randomNumber2 = Math.floor(Math.random() * 5);

    if (randomNumber2 === 0) {
    // alert("大凶");
    $("#result").text("大凶")
    }else if (randomNumber2 === 1) {
    // alert("凶");
     $("#result").text("凶")
    }else if (randomNumber2 === 2) {
    // alert("小吉");
    $("#result").text("小吉")
    }else if (randomNumber2 === 3) {
    // alert("中吉");
     $("#result").text("中吉")
    }else if (randomNumber2 === 4) {
    // alert("大吉");
    $("#result").text("大吉")
    }else {alert("エラー");
    }
});