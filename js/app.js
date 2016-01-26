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
});



///////////Funciones para guardar y recuperar los datos/////////////
//Todo basado en llave valor
function saveData(key,value){
    value=JSON.stringify(value);
    localStorage.setItem(key,value);
}
function getData(key){
   return JSON.parse(localStorage.getItem(key));
}

function deleteData(key){
   localStorage.removeItem(key);
}
/////////////////////////////////////////////////////////////////////