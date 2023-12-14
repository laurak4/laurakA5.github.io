function showAlert() {
    alert("Hello, world!");
}

function enlargeText(){
    showAlert(); 
    var input = document.getElementById("inputText");
    input.style.fontSize = "24pt";
}

function radioStyles() {
    showAlert(); 
    var inputTextArea = document.getElementById("inputText");
    var fancyRadio = document.getElementById("fancyShmancyRadio");
    
    if (fancyRadio.checked) {
        inputTextArea.style.fontWeight = "bold"; // Set font weight to bold
        inputTextArea.style.color = "blue"; // Change text color to blue
        inputTextArea.style.textDecoration = "underline"; // Underline the text
    
    } else {
        inputTextArea.style.fontWeight = "normal"; // Reset font weight to normal
        inputTextArea.style.color = "black"; // Reset text color to black
        inputTextArea.style.textDecoration = "none"; // Remove underline
       
    }

    var fancyShmancyRadio = document.getElementById("fancyShmancyRadio");
    fancyShmancyRadio.addEventListener("change", radioStyles);

    var boringBettyRadio = document.getElementById("boringBettyRadio");
    boringBettyRadio.addEventListener("change", radioStyles);
}

function addMoo() {
    var inputTextArea = document.getElementById("inputText");
    var textVal = inputTextArea.value;

    textVal = textVal.toUpperCase(); 
    var sentences = textVal.split('.');

    for(var i = 0; i < sentences.length - 1; i++){
        sentences[i] = sentences[i] + "-Moo"; 
    }
    textVal = sentences.join('. ');
    inputTextArea.value = textVal; 

}

