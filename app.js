/*var userName=prompt("May I know your name please")
alert("My name is!!!" + userName)*/
var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var Output = document.querySelector("#output")


console.log(Output)

function clickHandler() {
    Output.innerText = "een-gggdssa saaajjl "+txtInput.value

};
btnTranslate.addEventListener("click", clickHandler)