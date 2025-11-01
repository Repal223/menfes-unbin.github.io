/* Basic service worker to show web push notifications with default icons. */
self.addEventListener('push', (event) => {
  let payload = {};
  try { payload = event.data ? event.data.json() : {}; } catch (_) { payload = { body: event.data && event.data.text() }; }

  const n = payload.notification || payload;
  const title = n.title || 'Menfes UNBIN';
  const options = {
    body: n.body || n.message || 'Notifikasi baru dari Menfes',
    icon: n.icon || '/icons/ikon pop-up notifikasi.png',
    badge: n.badge || '/icons/badge notifikasi.png',
    image: n.image || undefined,
    data: { url: (n.click_action || n.url || '/') },
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = (event.notification && event.notification.data && event.notification.data.url) || '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientsArr) => {
      for (const client of clientsArr) {
        if ('focus' in client) {
          client.navigate(url);
          return client.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});

