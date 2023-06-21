var buttons = document.querySelectorAll('.days button');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

