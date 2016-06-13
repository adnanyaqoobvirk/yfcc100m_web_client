'use strict';

angular.module('yfcc100mApp')
.constant("baseURL", "http://45.63.6.234:3000/api/")
.factory('categoryFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        return $resource(baseURL + "categories/:id", {id:"@id"});

}])

.factory('imageFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        return $resource(baseURL + "images/:category/:limit", {category:"@category", limit: "@limit"});

}]);