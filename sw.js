// Service worker minimal pour Grand Livre — Budget.
// Rôle unique : satisfaire le critère d'installabilité PWA de Chrome/Edge
// (qui exigent un service worker enregistré et actif).
// Volontairement SANS mise en cache agressive, pour ne jamais afficher
// une version périmée de l'appli après une mise à jour : chaque requête
// part normalement sur le réseau.

self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  event.respondWith(fetch(event.request));
});
