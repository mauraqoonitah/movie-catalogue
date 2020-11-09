import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';
// mendapatkan seluruh aset yang membentuk keseluruhan aplikasi (app shell)
const { assets } = global.serviceWorkerOption;

// cache seluruh assets app shell
self.addEventListener('install', (event) => {
    event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

// hapus cache lama yg tidak digunakan lagi
self.addEventListener('activate', (event) => {
    event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(CacheHelper.revalidateCache(event.request));
});