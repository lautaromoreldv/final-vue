 if('serviceWorker' in navigator){
     window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js')
        .catch(function (err){console.log('SW falló: ', err);});
});
    }

(function () {
  
  var aviso;

  window.addEventListener('beforeinstallprompt', function (e) {
       e.preventDefault();
         aviso = e;

    showAddToHomeScreen();

  });

function showAddToHomeScreen() {
    var mostrarAlerta = document.querySelector(".instalar");
        if(mostrarAlerta != undefined){
        mostrarAlerta.style.display = "flex";
        mostrarAlerta.addEventListener("click", addToHomeScreen);
      }
}

  function addToHomeScreen() {
      var mostrarAlerta = document.querySelector(".instalar");
          mostrarAlerta.style.display = 'none';

    if (aviso) {
         aviso.prompt();
              aviso.userChoice
        .then(function (choiceResult) {

          if (choiceResult.outcome === 'accepted') 

          aviso = null;

        });

    }

  }

  showAddToHomeScreen();

})(); 

/*if(window.Notification && Notification.permission !== 'denied'){ 
  setTimeout('Notification.requestPermission()', 5000);

var noti = new Notification("titulo", {
      body: "Notificación de Queen",
      icon: "img/logo0.png",
      image:"img/inicios.png",
      badge:"index.html"

  })

}*/


(function (){
var encabezado = document.querySelector("inicio"),
 metaTema = document.querySelector("meta[name=theme-color]");

 
 function estado(e){
  console.log(e.type) 

  if(navigator.onLine){
    metaTema.setAttribute("content", "#17a2b8");
    encabezado.classList.remove("offline");

  }else{
      metaTema.setAttribute("content", "#969DA0");
      encabezado.classList.add("offline");
  }

}

if(!navigator.onLine){
    estado(this)
}
window.addEventListener("online" , estado);
window.addEventListener("offline" , estado);


})();



