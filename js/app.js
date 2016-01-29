angular.module('app',['ui.router','app.controllers'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tareas', {
    	url: '/tareas',
    	templateUrl: 'views/tareas.html',
        controller: 'TareasCtrl'
      })
    .state('addtarea', {
    	url: '/addtarea',
    	templateUrl: 'views/addtarea.html',
        controller: 'AddtareaCtrl'
      })
    .state('tarea/tareaId', {
    	url: '/tarea/:tareaId',
    	templateUrl: 'views/tarea.html',
        controller: 'TareaDetailCtrl'
      })
    .state('sobre', {
    	url: '/sobre',
    	templateUrl: 'views/sobre.html'
      })
    .state('categorias', {
      url: '/categorias',
      templateUrl: 'views/categorias.html',
      controller: 'CategoriaCtrl'
      })
    .state('ofertas', {
      url: '/ofertas',
      templateUrl: 'views/ofertas.html',
      controller: 'OfertaCtrl'
      })
    .state('compannias', {
      url: '/compannias',
      templateUrl: 'views/compannias.html',
      controller: 'CompanniaCtrl'
      })
    .state('conf', {
    	url: '/conf',
    	templateUrl: 'views/conf.html'
      });
  $urlRouterProvider.otherwise('/ofertas');
}).run(function($cordovaPush) {

  var androidConfig = {
    "senderID": "826292561900",
  };

  document.addEventListener("deviceready", function(){
    $cordovaPush.register(androidConfig).then(function(result) {
      // Success
    }, function(err) {
      // Error
    })

    $rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
      switch(notification.event) {
        case 'registered':
          if (notification.regid.length > 0 ) {
            alert('registration ID = ' + notification.regid);
          }
          break;

        case 'message':
          // this is the actual push notification. its format depends on the data model from the push server
          alert('message = ' + notification.message + ' msgCount = ' + notification.msgcnt);
          break;

        case 'error':
          alert('GCM error = ' + notification.msg);
          break;

        default:
          alert('An unknown GCM event has occurred');
          break;
      }
    });


    // WARNING: dangerous to unregister (results in loss of tokenID)
    $cordovaPush.unregister(options).then(function(result) {
      // Success!
    }, function(err) {
      // Error
    })

  }, false);
});