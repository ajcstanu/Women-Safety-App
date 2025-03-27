let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12
    });
}

document.getElementById('sosButton').addEventListener('click', async () => {
    const statusMessage = document.getElementById('status-message');
    statusMessage.textContent = 'Sending SOS...';
    statusMessage.style.display = 'block';

    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        fetch('http://localhost:5000/api/sos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: 'testUser', location: { latitude, longitude } })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            statusMessage.textContent = 'SOS Sent Successfully!';
            setTimeout(() => statusMessage.style.display = 'none', 3000); // Hide after 3 seconds
        })
        .catch(error => {
            console.error('Error:', error);
            statusMessage.textContent = 'Failed to send SOS.';
            setTimeout(() => statusMessage.style.display = 'none', 3000);
        });
    }, () => {
        statusMessage.textContent = 'Geolocation access denied.';
        setTimeout(() => statusMessage.style.display = 'none', 3000);
    });
});

document.getElementById('trustedContactsButton').addEventListener('click', () => {
    alert('Trusted Contacts feature coming soon!');
});

document.getElementById('safeRoutesButton').addEventListener('click', () => {
    alert('Safe Routes feature coming soon!');
});