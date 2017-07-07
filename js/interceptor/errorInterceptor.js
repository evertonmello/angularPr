angular.module("listaTelefonica").factory("errorInterceptor", function ($q, $location) {
	return {
		responseError: function (rejection) {	
			if (rejection.status != 200) {
				$location.path("/erro");
			}
			return $q.reject(rejection);
		}
	};
});