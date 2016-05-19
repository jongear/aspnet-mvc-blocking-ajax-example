(function () {
    'use strict';

    //angular.module('blockingApp', []);

    angular
        .module('blockingApp', [])
        .controller('exampleCtrl', exampleCtrl);

    exampleCtrl.$inject = ['$http'];

    function exampleCtrl($http) {
        var self = this;

        self.runBlockingExample = function () {
            $http.get('/blockingajax/call1').then(call1Final);

            function call1Final(result1){
                self.call1 = result1.data;
            }

            $http.get('/blockingajax/call2').then(call2Final);

            function call2Final(result2) {
                self.call2 = result2.data;
            }

            $http.get('/blockingajax/call3').then(call3Final);

            function call3Final(result3) {
                self.call3 = result3.data;
            }
        };

        self.runNonblockingExample = function () {
            $http.get('/nonblockingajax/call4').then(call1Final);

            function call1Final(result1) {
                self.noncall1 = result1.data;
            }

            $http.get('/nonblockingajax/call5').then(call2Final);

            function call2Final(result2) {
                self.noncall2 = result2.data;
            }

            $http.get('/nonblockingajax/call6').then(call3Final);

            function call3Final(result3) {
                self.noncall3 = result3.data;
            }
        };
    }
})();