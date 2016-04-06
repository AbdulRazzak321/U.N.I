'use strict';

var gps = angular.module('LogikApp', [
    'ngAnimate',
    'ngResource',
    'ngSanitize',
    'cg.mailchimp',
    'oitozero.ngSweetAlert',
])

.config(function(CgMailChimpServiceProvider) {

    CgMailChimpServiceProvider.setConfig({
        username: 'logik',
        dc: 'us11',
        u: '8f504087a4ce064dd5a714ec2',
        id: '8e0d48b43d'
    });

})

.run(function($rootScope, $window, $timeout) {

    var scope = $rootScope

});
