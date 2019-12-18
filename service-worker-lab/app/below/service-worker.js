//Listening for life cycle events
self.addEventListener('install', event => console.log('Service worker installing...'));
self.addEventListener('activate', event => console.log('Service worker activating...'));

// Intercept network requests
self.addEventListener('fetch', event => console.log('Fetching: ', event.request.url))