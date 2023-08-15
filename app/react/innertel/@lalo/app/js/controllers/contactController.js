
laloApp.controller('contactController',
    ['$scope', '$log', '$http', '$timeout',
        function ($scope, $log, $http) {

            'use strict';

            $scope.submit = function(e) {
                var $form = $(e.target).closest('form'),
                    _params = $form.serialize();

                $http({method: 'GET', url: config.url.CONTACT_URL + '?' + _params}).
                    success(function(data, status, headers, config) {}).
                    error(function(data, status, headers, config) {});
            }
        }]);