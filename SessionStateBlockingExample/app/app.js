(function () {
    'use strict';

    angular
        .module('blockingApp', [])
        .controller('exampleCtrl', exampleCtrl);

    exampleCtrl.$inject = ['$http'];

    function exampleCtrl($http) {
        var self = this;

        self.blockingExampleIsRunning = false;
        self.nonBlockingEampleIsRunning = false;

        self.blockingExampleIsComplete = function () {
            return !self.blockingExampleIsRunning && self.call1 && self.call2 && self.call3;
        };

        self.nonBlockingExampleIsComplete = function () {
            return !self.nonBlockingEampleIsRunning && self.noncall1 && self.noncall2 && self.noncall3;
        };

        self.callBackground = function (serviceCall, runningExample) {
            if (serviceCall)
                return 'alert alert-success';
            else if (!runningExample)
                return 'alert alert-info';
            else
                return 'alert alert-warning'
        };

        self.runBlockingExample = function () {
            self.blockingExampleIsRunning = true;
            self.call1 = false;
            self.call2 = false;
            self.call3 = false;

            $http.get('/blockingajax/call1').then(call1Final);

            function call1Final(result1){
                self.call1 = result1.data;

                self.updateBlockingExampleRunStatus();
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
            self.nonBlockingExampleIsRunning = true;
            self.noncall1 = false;
            self.noncall2 = false;
            self.noncall3 = false;

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