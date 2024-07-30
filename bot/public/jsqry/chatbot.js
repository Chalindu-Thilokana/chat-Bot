$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $('#button-submit').on('click', function () {
        var value = $('#input').val();

        // Send user input to the server
        $.ajax({
            type: 'POST',
            url: '/send',
            data: {
                input: value
            },
            success: function (response) {
                // Append the response to the chatbox
                $('#content-box').append(`
                    <div class="d-flex mb-2">
                        <div class="mr-2" style="width: 45px;height: 45px;">
                            <img src="https://icon-library.com/images/avatar-icon/avatar-icon-6.jpg" width="100%" height="100%" style="border-radius: 50px;">
                        </div>
                        <div class="float-right px-3 py-2" style="width: 270px;background: #d35410;border-radius: 10px; float: right;font-size: 85%;">
                            ${response}
                        </div>
                    </div>
                `);

                // Clear the input field
                $('#input').val('');
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
});
