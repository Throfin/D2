/*global angular*/

(function () {
    'use strict';
    
    var dnd = angular.module('dnd', ['ui.bootstrap', 'ngRoute']);
    
    dnd.config(function ($routeProvider) {
        $routeProvider.when('/',
                                {
                templateUrl: '/public/modules/story/story-templ.html',
                controller: 'StoryCtrl'
            }
                           )
             .when('/npcs',
                                {
                    templateUrl: '/public/modules/npcs/npcs-templ.html',
                    controller: 'NpcsCtrl'
                }
                           )
                .otherwise({
                redirectTo: '/'
            }
                           );
    });
    
    dnd.controller('NavCtrl', function () { });
    
    dnd.controller('StoryCtrl', function () { });
    
    dnd.controller('NpcsCtrl', function () { });
    
    dnd.directive('navigationBar', function () {
        return {
            restrict: 'E',
            templateUrl: '/public/modules/menu/nav-bar-templ.html',
            controller: 'NavCtrl',
            controllerAs: 'navCtrl'
        };
    });
    
}());