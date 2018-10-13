if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js').then(function(reg) {
    console.log("Service Worker has been registered successfully!");
  }).catch((e) => {
    console.log("Couldn't register service worker... \n", e);
  });
}
