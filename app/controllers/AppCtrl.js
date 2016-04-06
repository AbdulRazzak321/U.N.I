'use strict';

gps.controller('AppCtrl', function($scope, CgMailChimpService, SweetAlert) {

    var vm = this;

    $scope.subData = {
        name: '',
        EMAIL: ''
    };

    $scope.doSubscribe = function($event, subData) {
        $event.preventDefault();
        console.table(subData);

        CgMailChimpService.subscribe($scope.subData).then(function(data) {
            // console.log('[Debug] success', data);
            SweetAlert.swal("Awesome!", "Just click the link in your email, and you will recieve the download link!", "success");
            $scope.subData = {
                name: '',
                EMAIL: ''
            };
        }, function(error) {
            // console.log('[Debug] failed', error);
            SweetAlert.swal("Ops!", "Sorry, something went wrong. Please try again!", "error");
        });
    }

});