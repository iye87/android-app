angular.module('app.controllers', [])
.controller('TareasCtrl', function($scope, $http) {
	if (localStorage.getItem('tareas-ratchet2')) {
		$scope.tareas = JSON.parse(localStorage.getItem('tareas-ratchet2'));
	}
	else {
	        $http.get('data/list.json').success(function(data) {
	            localStorage.setItem('tareas-ratchet2', JSON.stringify(data));
	            $scope.tareas = data;
	        });
	}
})
.controller('CategoriaCtrl', function($scope, $http) {
if (localStorage.getItem('PP-ratchet2')) {
		$scope.categoria = JSON.parse(localStorage.getItem('PP-ratchet2'));
	}
	else {
	        $http.get('data/listCompannias.json').success(function(data) {
	            localStorage.setItem('PP-ratchet2', JSON.stringify(data));
	            $scope.categoria = data;
	        });
	}
})
.controller('CompanniaCtrl', function($scope, $http) {
	if (localStorage.getItem('compannia-ratchet2')) {
		$scope.compannias = JSON.parse(localStorage.getItem('compannia-ratchet2'));
	}
	else {
	        $http.get('data/listCompannias.json').success(function(data) {
	            localStorage.setItem('compannia-ratchet2', JSON.stringify(data));
	            $scope.compannias = data;
	        });
	}
})
.controller('OfertaCtrl', function($scope, $http) {
	if (localStorage.getItem('oferta-ratchet2')) {
		$scope.ofertas = JSON.parse(localStorage.getItem('coferta-ratchet2'));
	}
	else {
	        $http.get('data/listOfertas.json').success(function(data) {
	            localStorage.setItem('oferta-ratchet2', JSON.stringify(data));
	            $scope.ofertas = data;
	        });
	}
})
.controller('AddtareaCtrl', function($scope,$http) {
	$scope.addtarea = function () {
		var tareas = JSON.parse(localStorage.getItem('tareas-ratchet2'));
		var tarea = {
			'id': tareas.length + 1,
			'titulo': $scope.tarea.titulo,
			'desccorta': $scope.tarea.desccorta,
			'desclarga': $scope.tarea.desclarga
		};
        tareas.push(tarea);
        localStorage.setItem('tareas-ratchet2', JSON.stringify(tareas));
        location.href = '#/tareas';
	};
})
.controller('TareaDetailCtrl', function($scope,$http,$stateParams) {
	$scope.id = $stateParams.tareaId;
	$scope.tareas = JSON.parse(localStorage.getItem('tareas-ratchet2'));
	var index;
	for (var i = 0; i < $scope.tareas.length; i++) {
		if ($scope.tareas[i].id == $scope.id) {
			index = i;
			break;
		}
	};
	var tarea = $scope.tareas[index];
	$scope.tarea = tarea;

   $scope.deletetarea = function() {
        $scope.tareas.splice(index,1);
        localStorage.setItem('tareas-ratchet2', JSON.stringify($scope.tareas));
        location.href = '#/tareas';
    };
});


