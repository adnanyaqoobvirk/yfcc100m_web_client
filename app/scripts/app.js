'use strict';

angular.module('yfcc100mApp', ['ui.router','ngResource', 'angularGrid', 'angucomplete-alt'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'HomeController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })
        
            // route for the aboutus page
            .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        templateUrl : 'views/aboutus.html'                
                    }
                }
            })
        
            // route for the api page
            .state('app.api', {
                url:'api',
                views: {
                    'content@': {
                        templateUrl : 'views/api.html'                 
                    }
                }
            })
    
        $urlRouterProvider.otherwise('/');
    })
;
