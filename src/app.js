function clickHandler() {
    var date = new Date(document.querySelector("#date-input").value);

    var luckyNumber = document.querySelector("#lucky-number-input").value;
    var sumOfBirthday = (date.getDate() + date.getMonth() + date.getYear());

    if (sumOfBirthday % luckyNumber == 0) {
        document.querySelector("#result").innerText = "Wow, your Birthday is a lucky numner 😀";
    } else if (sumOfBirthday % luckyNumber > 0) {
        document.querySelector("#result").innerText = "Ops, your Birthday is not a lucky number 😔";
    } else if (sumOfBirthday == NaN || luckyNumber == "") {
        document.querySelector("#result").innerText = "Please enter both the fields";

    }
    console.log(sumOfBirthday % luckyNumber);
}


//getDay()
//getDate()
//getMonth()
//getFullYear()