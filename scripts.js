var footballModal = document.getElementById("footballModal");

var footballButton = document.getElementById("footballButton");

var span = document.getElementsByClassName("close")[0];


footballButton.onclick = function() {
    footballModal.style.display = "block";
}
span.onclick = function() {
    footballModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == footballModal) {
        footballModal.style.display = "none";
    }
}
