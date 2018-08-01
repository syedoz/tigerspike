$( document ).ready(function() {
    $("#myForm").validate({
        rules: {
            firstname: {
                required: true,
            },
            surname: {
                required: true,
            },
            sex: {
                required: true,
            },
            dob: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            email_again: {
                equalTo: "#email"
            },
            password: {
                required: true
            },
        }
    });
});
