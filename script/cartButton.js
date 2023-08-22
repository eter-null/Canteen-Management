// counter js(jquery)
document.addEventListener("DOMContentLoaded", function () {
$(document).ready(function() {
    $(".plus").on("click", function() {
        // increment the value and update the input box within this instance
        var inputBox = $(this).siblings(".input-box");
        var itemCount = parseInt(inputBox.val()) + 1;
        inputBox.val(itemCount);
    });

    $(".minus").on("click", function() {
        // decrement the value and update the input box within this instance
        var inputBox = $(this).siblings(".input-box");
        var itemCount = parseInt(inputBox.val());
        if (itemCount > 0) {
            itemCount--;
            inputBox.val(itemCount);
        }
    });
});

});