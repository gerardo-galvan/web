
laloApp.controller('myController',
    ['$scope', '$log', '$http', '$timeout',
        function ($scope, $log, $http, $timeout) {

            'use strict';

            /**
             *
             * PROPERTIES
             *
             */

            var _appCtrl = this;

            $scope.appModel = {};


            $scope.menuIsOpen = false;

            $scope.toggle = function(e) {
                $scope.menuIsOpen = !$scope.menuIsOpen;
            }


            /**
             *
             * CONTROLLER METHODS
             *
             */

            this.init = function () {

                $http({method: 'GET', url: config.url.DATA_URL}).
                    success(function(data, status, headers, config) {
                        $scope.appModel = data;
                    }).
                    error(function(data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });

                $scope.display = "name";



                this.alternate();

                return this;
            };

            this.alternate = function() {

                setInterval(function(){
                    $scope.display = 'nickname';
                    $scope.$apply();

                    $timeout(function() {
                        $scope.display = 'name';
                    }, 1500);

                },4000);


                return this;
            };



            /**
             *
             * SERVICE CALL
             *
             */

            this.init();

        }]);