angular.module('NoServerApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
      $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: './templates/home.html'
        })
          .state('about', {
            url: '/about',
            templateUrl: './templates/about.html'
        })
          .state('more',{
            url: '/more',
            templateUrl: './templates/more.html'
        })
});
