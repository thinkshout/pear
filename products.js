window.onload = function() {

    var shop = document.getElementsByClassName("Product__buy button");
    var forms = document.getElementsByTagName("form");
    var cart = document.getElementById("cart_btn");
    var addCart = document.getElementById("Cart__line-items");

    for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit',getValues,false);
    }

    function getValues(form) {
        form.preventDefault();
        console.log(this.quantity.value);
        console.log(this.Size.value);
        console.log(this.checkoutId.value);
        console.log(this.productId.value);

        var form_id = this.productId.value;
        var check_id = this.checkoutId.value;


    }

    // cart.addEventListener('click',myCart,false);
    //
    // function myCart(){
    //     $(addCart).append(form_id);
    // }

    cart.addEventListener('click',myCart,false);

    function myCart(){
        var t = document.createTextNode("hello");
        document.getElementsByClassName("Cart__line-items")[0].appendChild(t);
    }
}

