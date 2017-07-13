function myFunction() {
    alert("WORKING");
}

window.onload = function() {

    var shop = document.getElementsByClassName("Product__buy button");

    for (var i = 0; i < shop.length; i++) {
        shop[i].addEventListener('click', myFunction, false);
        console.log("Page stopped");
    }
    function myFunction(stopPage){
        stopPage.preventDefault();
    }
}

