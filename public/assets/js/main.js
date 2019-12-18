$(function () {
    $("#addproducts").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newProduct = {
            title: $("#title").val().trim(),
            description: $("#description").val().trim(),
            image: $("#image").val().trim(),
            type: $("#type").val().trim(),
            stock: $("#stock").val().trim(),
            price: parseInt($("#price").val().trim())
        };
        // Send the POST request.
        if (newProduct.title !== ""
            && newProduct.description !== ""
            && newProduct.image !== ""
            && newProduct.type !== ""
            && newProduct.stock !== ""
            && newProduct.price !== ""
            && typeof(newProduct.price) === "number"
            && !isNaN(newProduct.price)) {
            $.ajax("/addproducts", {
                type: "POST",
                data: newProduct
            }).then(
                function () {
                    console.log("Added New Product");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        }
    });
});