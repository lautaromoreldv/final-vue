var cacheName = 'cache - tp2';

self.addEventListener('install', function(event) {
	event.waitUntil(	
		caches.open(cacheName)
			.then(function (cache){
				 cache.addAll(
				 		['index.html',
				 		'galeria.html',
						'tienda.html',
						'contacto.html',
				 		'css/estilo.css',
				 		'css/bootstrap.css',
				 		'manifest.json',
				 		'favicon.ico',
				 		'js/script.js',
				 		'js/jquery-3.4.1.js',
				 		'js/bootstrap.bundle.js',
				 		'js/vue.js',
				 		'js/vue_app.js',
						'img/icon.jpg',
				 		'img/logo0.png',
				 		'img/banner2.jpg',
				 		'img/inicios.png',
				 		'img/queen1976.png',
				 		'img/queen1976_1.jpg',
				 		'img/akom.jpg',
				 		'img/queenend.jpg',
				 		'img/queenend2.jpg',
				 		'img/queenend4.jpg',
				 		'img/discos/queen.jpg',
				 		'img/discos/queenii.jpg',
				 		'img/discos/sheer heart attack.jpg',
				 		'img/discos/a night at the opera.jpg',
				 		'img/discos/a day at the races.jpg',
				 		'img/discos/news of the world.jpg',
				 		'img/discos/jazz.jpg',
				 		'img/discos/the game.jpg',
				 		'img/discos/hotspace.jpg',
				 		'img/discos/the works.jpg',
				 		'img/discos/a kind of magic.jpg',
				 		'img/discos/the_miracle.jpg',
				 		'img/discos/innuendo.jpg',
				 		'img/icons/icon-192x192.png',
						'img/icons/icon-256x256.png',
						'img/icons/icon-384x384.png',
						'img/icons/icon-512x512.png',
					])
				}));
});
self.addEventListener('activate', function (event) {
});

self.addEventListener('fetch', function(event) { 
	event.respondWith( 
		caches.match(event.request) 
			.then(function(response) {
				if (response) { 
					return response;
			}

		return fetch(event.request); 
	}));
});