// グーボタンを押したとき
$("#gu").on("click", function () {
  // コンピューターの手を決める（0:グー 1:チョキ 2:パー）
  const cpu = Math.floor(Math.random() * 3);

  // コンピューターの手を表示
  if (cpu === 0) {
    $("#computer").text("グー");
  } else if (cpu === 1) {
    $("#computer").text("チョキ");
  } else {
    $("#computer").text("パー");
  }

  // 勝敗を表示（自分はグー）
  if (cpu === 0) {
    $("#result").text("あいこ！もう一度");
  } else if (cpu === 1) {
    $("#result").text("勝ち！");
  } else {
    $("#result").text("負け…");
  }
});

// チョキボタンを押したとき
$("#choki").on("click", function () {
  // コンピューターの手を決める（0:グー 1:チョキ 2:パー）
  const cpu = Math.floor(Math.random() * 3);

  // コンピューターの手を表示
  if (cpu === 0) {
    $("#computer").text("グー");
  } else if (cpu === 1) {
    $("#computer").text("チョキ");
  } else {
    $("#computer").text("パー");
  }

  // 勝敗を表示（自分はチョキ）
  if (cpu === 0) {
    $("#result").text("負け…");
  } else if (cpu === 1) {
    $("#result").text("あいこ！もう一度");
  } else {
    $("#result").text("勝ち！");
  }
});

// パーボタンを押したとき
$("#pa").on("click", function () {
  // コンピューターの手を決める（0:グー 1:チョキ 2:パー）
  const cpu = Math.floor(Math.random() * 3);

  // コンピューターの手を表示
  if (cpu === 0) {
    $("#computer").text("グー");
  } else if (cpu === 1) {
    $("#computer").text("チョキ");
  } else {
    $("#computer").text("パー");
  }

  // 勝敗を表示（自分はパー）
  if (cpu === 0) {
    $("#result").text("勝ち！");
  } else if (cpu === 1) {
    $("#result").text("負け…");
  } else {
    $("#result").text("あいこ！もう一度");
  }
});