document.querySelector('body').addEventListener('click', function () {
    for (var messageIndex = 0; messageIndex < window.logMessages.length; messageIndex++) {
        alert(window.logMessages[messageIndex]);
    }
});