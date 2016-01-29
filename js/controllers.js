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

	if (localStorage.getItem('categoria-ratchet2')) {		

		$http.get('http://localhost/all_categoria').success(function(data) {
	            //localStorage.setItem('categoria-ratchet2', JSON.stringify(data));
	            var categorias2 = data;
	            var categorias = JSON.parse(localStorage.getItem('categoria-ratchet2'));

		    	if(categorias.length == categorias2.length)
				{$scope.categorias = categorias} else {$scope.categorias = categorias2;
				 localStorage.setItem('categoria-ratchet2', JSON.stringify(data));} 
			});
	}
	else{//data/listCategorias.json
		$http.get('http://localhost/all_categoria').success(function(data) {
        localStorage.setItem('categoria-ratchet2', JSON.stringify(data));
        $scope.categorias = data;
    });
	}

	$scope.addActivo = function(id) {		
		var index;
		var categorias = JSON.parse(localStorage.getItem('categoria-ratchet2'));

		for (var i = 0; i < categorias.length; i++) {
			if (categorias[i].id == id) {
				index = i;
				break;
			}	
		}

		var activo;
		if (categorias[index].activo == true) {activo=false}else{activo=true}

		var aux = JSON.parse(localStorage.getItem('categoria-ratchet2'));
		aux.splice(index,1);
		var aux1 = {
			'id': id,
			'nombre': categorias[index].nombre,
			'ruta_foto': categorias[index].ruta_foto,
			'activo': activo
		};
        aux.push(aux1);

        for (var i = 0; i < aux.length; i++) {
        	for (var j = aux.length - 1; j >= 0; j--) {
        		if (aux[i].id>aux[j].id)
        		{
        			var pp = aux[i];
        			aux[i]=aux[j];
        			aux[j]=pp;
        		}
        	}
        }

        localStorage.setItem('categoria-ratchet2', JSON.stringify(aux));
}
})
.controller('CompanniaCtrl', function($scope, $http) {

		if (localStorage.getItem('compannia-ratchet2')) {	

		$http.get('http://localhost/all_compannia').success(function(data) {
				//localStorage.setItem('compannia-ratchet2', JSON.stringify(data));
	            var compannias2 = data;
	            var compannias = JSON.parse(localStorage.getItem('compannia-ratchet2'));

		    	if(compannias.length == compannias2.length)
				{$scope.compannias = compannias} else {$scope.compannias = compannias2;
				 localStorage.setItem('compannia-ratchet2', JSON.stringify(data));} 
			});
	}else{
		$http.get('http://localhost/all_compannia').success(function(data) {
        localStorage.setItem('compannia-ratchet2', JSON.stringify(data));
        $scope.compannias = data;
    });
	}

	$scope.addActivo = function(id) {		
		var index;
		var compannias = JSON.parse(localStorage.getItem('compannia-ratchet2'));

		for (var i = 0; i < compannias.length; i++) {
			if (compannias[i].id == id) {
				index = i;
				break;
			}	
		}

		var activo;
		if (compannias[index].activo == true) {activo=false}else{activo=true}

		var aux = JSON.parse(localStorage.getItem('compannia-ratchet2'));
		aux.splice(index,1);
		var aux1 = {
			'id': id,
			'nombre': compannias[index].nombre,
			'industria': compannias[index].industria,
			'activo': activo
		};
        aux.push(aux1);

        for (var i = 0; i < aux.length; i++) {
        	for (var j = aux.length - 1; j >= 0; j--) {
        		if (aux[i].id>aux[j].id)
        		{
        			var pp = aux[i];
        			aux[i]=aux[j];
        			aux[j]=pp;
        		}
        	}
        }

        localStorage.setItem('compannia-ratchet2', JSON.stringify(aux));
}
})
.controller('OfertaCtrl', function($scope, $http) {
    $http.get('data/listOfertas.json').success(function(data) {
        localStorage.setItem('oferta-ratchet2', JSON.stringify(data));

        var oferta = data;
        var ofertas_categoria=[];
        var ofertas_activas=[];
        var ofertas_compannias=[];

	//Selecciono de la lista de categoria las que estan activas
	if (localStorage.getItem('categoria-ratchet2')) {
        var categorias = JSON.parse(localStorage.getItem('categoria-ratchet2'));
    }
        var cat_activas=[];
        for (var i = 0; i < categorias.length; i++) {
        	if (categorias[i].activo==true){
        		cat_activas.push(categorias[i]);
        	}
        };
    //Selecciono de la lista de compañias las que estan activas    
        var compannias = JSON.parse(localStorage.getItem('compannia-ratchet2'));
        var comp_activas=[];
        for (var i = 0; i < compannias.length; i++) {
        	if (compannias[i].activo==true){
        		comp_activas.push(compannias[i]);
        	}
        };
    //Selecciono de la lista de ofertas las que tienen las categoria activas
        for (var i = 0; i < oferta.length; i++) {
        	for (var j = 0; j < cat_activas.length; j++) {
        		if (oferta[i].id_categoria==cat_activas[j].id) {
        			ofertas_categoria.push(oferta[i]);
        		};
        	};	
        };
    //Selecciono de la lista de ofertas las que tienen las categoria activas
        for (var i = 0; i < oferta.length; i++) {
        	for (var j = 0; j < comp_activas.length; j++) {
        		if (oferta[i].id_compannia==comp_activas[j].id) {
        			ofertas_compannias.push(oferta[i]);
        		};
        	};	
        };
    //Selecciono las ofertas de compañias y categorias activas    
        for (var i = 0; i < ofertas_categoria.length; i++) {
        	for (var j = 0; j < comp_activas.length; j++) {
        		if (ofertas_categoria[i].id_compannia==comp_activas[j].id) {
        			ofertas_activas.push(ofertas_categoria[i]);
        		};
        	};
        };
        if (comp_activas.length==0 && cat_activas.length==0) {
        	$scope.ofertas=oferta;
        }else if (comp_activas.length == 0) {
        	$scope.ofertas=ofertas_categoria;
        } else if (cat_activas.length == 0) {
        	$scope.ofertas=ofertas_compannias;
        }else{
        	$scope.ofertas=ofertas_activas;
        }
        
    });
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


