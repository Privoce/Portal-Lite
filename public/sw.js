self.addEventListener('push', (event) => {
  console.log('push', { event });
  let data = {};
  if (event.data) {
    data = event.data.json();
  }
  let title = data.title || 'Something Has Happened';
  let body = data.message || "Here's something you might want to check out.";
  let icon = 'images/new-notification.png';

  let notification = new self.Notification(title, {
    body,
    tag: 'simple-push-demo-notification',
    icon
  });

  notification.addEventListener('click', function () {
    if (clients.openWindow) {
      clients.openWindow('https://nicegoodthings.com');
    }
  });
});
