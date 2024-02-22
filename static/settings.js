function upload_img() {
    // Function to trigger file input click
    document.getElementById('fileid').click();
}

var base64_encoded_image_data = null; // Variable to store base64 encoded image data

// Event fires once a file has been selected on the client
document.getElementById('fileid').addEventListener('change', function() {
    // Event listener for file input change
    if (this.files && this.files[0]) {
        var file = this.files[0];

        // Use FileReader to read the file
        var reader = new FileReader();

        reader.onload = function (e) {
            // e.target.result contains the Base64 encoded string
            var base64String = e.target.result;
            base64_encoded_image_data = base64String;
            // Print the Base64 string to the console
            // For debugging purposes
            console.log("Base64 String:", base64String);
        };

        // Read the file as Data URL (Base64)
        reader.readAsDataURL(file);
    }
});

$("#submit").click(function() {
    // Event listener for submit button click
    var postData = {
        "Firstname": $("#firstname_box").val(), // Get value from input with id "firstname_box"
        "Surname": $("#surname_box").val(), // Get value from input with id "surname_box"
        "SSN": $("#ssn_box").val(), // Get value from input with id "ssn_box"
        "img": base64_encoded_image_data // Set base64 encoded image data
    };

    // Make a POST request using jQuery AJAX
    $.ajax({
        type: "POST",
        url: "/update_profile", // URL to send the request
        data: JSON.stringify(postData),  // Convert the data to a JSON string
        contentType: "application/json; charset=utf-8", // Content type of the request
        dataType: "json", // Data type of the response
        success: function(response) {
            // Handle the success response
            console.log("Update successful:", response);
        },
        error: function(error) {
            // Handle the error response
            console.error("Error updating profile:", error);
        }
    });
});
