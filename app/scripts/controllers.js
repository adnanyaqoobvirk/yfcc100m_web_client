'use strict';

angular.module('yfcc100mApp')

.controller('HomeController', ['$scope', '$state', '$stateParams', 'categoryFactory', 'imageFactory', 'angularGridInstance', function ($scope, $state, $stateParams, categoryFactory, imageFactory, angularGridInstance) {
    $scope.message = "Loading ...";
    categoryFactory.query({})
        .$promise.then(
            function (response) {
                var categories = response;
                $scope.categories = categories;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );

    var searchByName = function (tag) {
        imageFactory.query({
            category: tag,
            limit: 50
            }).$promise.then(
                function (response) {
                    var images = response;
                    $scope.images = images;
                },
                function (response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
        );
    };
    
    $scope.afterSelect = function(selected) {
      searchByName( selected.originalObject.name );
    };

    searchByName("people");
}]);