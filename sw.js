const CACHE = 'radar-v1';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('message', e => {
  if (!e.data) return;

  if (e.data.type === 'SCHEDULE') {
    const { title, body, delay, tag } = e.data;
    setTimeout(() => {
      self.registration.showNotification(title, {
        body: body || '',
        tag: tag || 'radar-' + Date.now(),
        icon: './icon.png',
        vibrate: [200, 100, 200],
      });
    }, Math.max(0, delay));
  }

  if (e.data.type === 'SHOW') {
    self.registration.showNotification(e.data.title, {
      body: e.data.body || '',
      tag: 'radar-now-' + Date.now(),
    });
  }
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cls => {
      for (const c of cls) if ('focus' in c) return c.focus();
      return clients.openWindow('./');
    })
  );
});
