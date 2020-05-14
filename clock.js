function clock() {
    // 数字が1ケタのとき
    let twoDigits = function (num) {
        let digit;
        if (num < 10) {
            digit = "0" + num;
        } else {
            digit = num;
        }
        return digit;
    }

    // 曜日を表す各文字列の配列
    let weeks = new Array("Sun", "Mon", "Thu", "Wed", "Thr", "Fri", "Sat");

    // 現在日時を取得
    let now = new Date();

    let year = now.getFullYear();
    let month = twoDigits(now.getMonth() + 1)
    let day = twoDigits(now.getDate());
    let week = weeks[now.getDay()];
    let hour = twoDigits(now.getHours());
    let minute = twoDigits(now.getMinutes());
    let second = twoDigits(now.getSeconds());

    // 日付
    document.getElementById("clock_date").textContent = year + "/" + month + "/" + day + " (" + week + ")";

    // 時刻
    document.getElementById("clock_time").textContent = hour + ":" + minute + ":" + second;
}

// 1000ミリ秒毎に実行
setInterval(clock, 1000);
