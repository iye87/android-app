angular.module('app',['ui.router','app.controllers'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('ofertas', {
      url: '/ofertas',
      templateUrl: 'views/ofertas.html',
      controller: 'OfertaCtrl'
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