$(document).ready(function() {

    $('#yeet').on('click', function () {
        var password = $('#inputPassword4').val();
        var email = $('#inputEmail4').val();
        alert('Sike! Your email is ' + email + ' and your password is ' + password);
    });

    $('#heading2').on('click', function () {
        var l1 = $('label').eq(0);
        var content = l1.text();
        l1.html('<h3>' + content + '</h3>');

        var l2 = $('label').eq(1);
        var content2 = l2.text();
        l2.html('<h3>' + content2 + '</h3>');
    });
    
    $('#undo').on('click', function () {
        var l1 = $('label').eq(0);
        var content = l1.text();
        l1.html(content);

        var l2 = $('label').eq(1);
        var content2 = l2.text();
        l2.html(content2);
    });

    $('#inputEmail4').on('keyup', function() {
        var content = $('#inputEmail4').val();
        var uppercase = content.toUpperCase();
        $('#inputEmail4').val(uppercase);


        $('#pl').text('Password ' + Math.random());
    });
});