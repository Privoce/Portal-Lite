// see 'https://sdk.pushy.me/web/1.0.8/pushy-service-worker.js'
// Listen for incoming push notifications
self.addEventListener('push', function (event) {
    // Extract payload as JSON object, default to empty object
    var data = event.data.json() || {};

    // Extract notification image URL
    var image = data.image || 'https://sdk.pushy.me/web/assets/img/icon.png';

    // Notification title and body
    var title = data.title || '';
    var body = data.message || '';

    // Notification options
    var options = {
        body: body,
        icon: image,
        badge: image,
        data: {
            url: data.url
        }
    };

    // Support for notification collapsing
    if (data['_pushyCollapseKey'])
        options.tag = data['_pushyCollapseKey'];
    
    // Wait until notification is shown
    event.waitUntil(self.registration.showNotification(title, options));

    // Send to Pushy notification listener (if webpage is open)
    clients.matchAll().then(clients => {
        // Set pushy notification flag
        data._pushy = true;
        
        // Send to all open pages
        clients.forEach(client => {
            client.postMessage(data, [new MessageChannel().port2]);
        });
    });
});

// Listen for notification click event
self.addEventListener('notificationclick', function (event) {
    // Hide notification
    event.notification.close();

    // Attempt to extract notification URL
    var url = event.notification.data.url;

    // Check if it exists
    if (url) {
        // Open the target URL in a new tab/window
        event.waitUntil(clients.openWindow(url));
    }
});