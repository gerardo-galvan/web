'use strict'

var config = {
    url: {
        DATA_URL:'app/json/data.json',
        CONTACT_URL:'app/php/mail.php',
        BASE_URL:''
    }
};

var laloApp = angular.module('gApp',[]);

laloApp.config(function($locationProvider, $routeProvider,$compileProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'app/views/me.html',
            controller: 'myController'
        })
        .when('/me', {
            templateUrl: 'app/views/me.html',
            controller:  'myController'
        })

         .when('/tweets', {
            templateUrl: 'app/views/tweets.html',
            controller:  'myController'
        })

        .when('/contact', {
            templateUrl: 'app/views/contact.html',
            controller:  'myController'
        })
        .when('/links', {
            templateUrl: 'app/views/links.html',
            controller:  'myController'
        })
    
       .when('/feed', {
            templateUrl: 'app/views/feed.html',
            controller:  'myController'
        })
    
        .otherwise({ redirectTo: '/' });

        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel|imessage|sms):/);
});