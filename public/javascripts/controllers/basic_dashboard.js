angular.module('dashboardApp')
      .controller('BasicBarsController',
        ['$scope', function($scope){
            $scope.items = [
              {Name: 'Mike', Value: 49},
              {Name: 'Marcia', Value: 52},
              {Name: 'Mikael', Value: 18}
            ];
        }]);
