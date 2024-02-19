document.addEventListener('DOMContentLoaded', function() {
   
    document.addEventListener('keydown', function(event) {
        var keyInfoElement = document.getElementById('keyInfo');
        keyInfoElement.innerHTML = `
            <p><strong>Keycode:</strong> ${event.keyCode}</p>
            <p><strong>Code:</strong> ${event.code}</p>
            <p><strong>Key pressed:</strong> ${event.key}</p>
            <p><strong>random generated number:</strong> ${event.which}</p>
        `;
    });
});