function fadein()
{
    $("#secret").toggle(500)
}

function say() {
    text = "Hello "+$("#name").val()
      
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg); 
   }
function hideme1()
{
    $(".secret").toggle(500)
}