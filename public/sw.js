self.addEventListener('push', (e) => {
  // e.waitUntil(() => {
  const data = e.data?.json() || {};
  console.log('push data', { data, e });
  let promiseChain = self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon
  });
  e.waitUntil(promiseChain);
  // });
});
