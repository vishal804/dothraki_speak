var textInput = document.getElementById("tArea");
var btnSubmit = document.getElementById("btn");
var textOutput = document.getElementById("output")

serverURL = "https://api.funtranslations.com/translate/dothraki.json"

//serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" 

function URL (text) {
    return serverURL +"?"+"text="+ text
}

btnSubmit.addEventListener("click", () => {
    var text = textInput.value
    fetch(URL(text))
    .then(response => response.json())
    .then(json => {
        textOutput.innerText = json.contents.translated
    })
    .catch( (error) => {
        alert("Server Error");
    })
})






