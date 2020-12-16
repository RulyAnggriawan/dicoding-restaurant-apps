import 'regenerator-runtime'
import CacheHelper from './utils/cache-helper';
const { assets } = global.serviceWorkerOption;


self.addEventListener('install', (event) => {
  console.log('installing service worker');
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  console.log('activating service worker');
  event.waitUntil(CacheHelper.deleteOldCache);
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));

});
