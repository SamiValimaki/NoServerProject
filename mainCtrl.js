angular.module('NoServerApp')
.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
  $scope.sw = true;
  $scope.guessCount = 0;
  $scope.correctCount = 0;
  $scope.correctImage = null;
  $scope.correctAnswer = null;
  $scope.characters = [
    { name: "Obi-Wan Kenobi",
      fileName: "ObiWanKenobi.jpg",
      swapiValue: "people/10"
    },
    { name: "Darth Maul",
      fileName: "DarthMaul.jpg",
      swapiValue: "people/44"
    },
    { name: "Yoda",
      fileName: "Yoda.jpg",
      swapiValue: "people/20"
    },
    { name: "Darth Vader",
      fileName: "DarthVader.jpg",
      swapiValue: "people/4"
    },
    { name: "Luke Skywalker",
      fileName: "LukeSkywalker1.jpg",
      swapiValue: "people/1"
    },
    { name: "Palpetine",
      fileName: "DarthSidious.jpg",
      swapiValue: "people/21"
    }
  ]
  $scope.callApi = function (swapiValue) {
    $http.get ('http://swapi.co/api/' + swapiValue)
      .success (function (data, status, headers, config) {
        $scope.apiResult = data;
        $('#swapi-modal').modal('show');
      })
      .error (function (data, status, headers, config) {
        $scope.apiResult = 'These are not the droids you are looking for';
        $('#swapi-modal').modal('show');
      })
  }
  $scope.randomImg = function (){
      return Math.floor(Math.random() * $scope.characters.length );
  }
  $scope.startGame = function () {
    $scope.guessCount = 0;
    $scope.correctCount = 0;
    $scope.selectedImage = $scope.randomImg();
    $scope.correctAnswer = null;
    $scope.correctImage = null;
  }
  $scope.userGuess = function (guess) {
    $scope.sw = false;
    $scope.guessCount++;
    if (guess === $scope.selectedImage) {
      $scope.correctCount++;
      $scope.correctAnswer = true;
    } else {
      $scope.correctAnswer = false;
    }
    $scope.correctImage = $scope.characters[$scope.selectedImage].fileName;
    $scope.selectedImage = $scope.randomImg();
    if ($scope.guessCount == 10) {
      $('#game-over-modal').modal('show');
      $scope.finalScore = $scope.correctCount;
      $scope.startGame();
      $scope.sw = true;

    }
  }
  $scope.startGame();
}]);
