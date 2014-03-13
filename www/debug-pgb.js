document.querySelector('body').addEventListener('click', function () {
    console.log('body clicked.');

    for (var messageIndex = 0; messageIndex < window.logMessages.length; messageIndex++) {
        alert(window.logMessages[messageIndex]);
    }

    console.log('messages shown.');
});