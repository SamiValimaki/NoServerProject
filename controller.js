angular.module('NoServer').controller('MainCtrl', function($scope, mainService) {

  $scope.characters = function() {
  	var promise = mainService.characters();
    promise.then(function(response)) {
      $scope.users = people;
    })
  }


  $scope.characters();

});
