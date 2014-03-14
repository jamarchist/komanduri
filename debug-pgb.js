document.addEventListener('deviceready', function() {
    document.querySelector('body').addEventListener('click', function () {
        console.log('body clicked.');
    });
});