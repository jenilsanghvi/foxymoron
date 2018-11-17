(function () {
    //Defining the application
    var app = angular.module('myapp', []);
    var title = 'Assignment - Jenil Sanghvi';
    app.controller('primeController', function ($scope, $http) {
        $scope.submitForm = function () {
            var data = {
                prime: $scope.prime.primeNumber
            };
            $http.post('main/service.php', data).then(function (response) {
                if (response.data == 1) {
                    $scope.validtePrime = "Prime Number";
                } else {
                    $scope.validtePrime = "Not a Prime Number";
                }

            });
        }
    });
    app.controller('fibonacciController', function ($scope, $http) {
        $scope.findSeries = function () {
            var data = {
                fibo: $scope.fibonacci.endNumber
            };
            $http.post('main/service.php', data).then(function (response) {
                if (response.data.fibo !== '') {
                    $scope.series = response.data.fibo;
                }
            });
        }
    });
    app.controller('palindromeController', function ($scope, $http) {
        $scope.testWord = function () {
            var data = {
                palindrome: $scope.palind.word
            };
            $http.post('main/service.php', data).then(function (response) {
                console.log(response);
                if (response.data == 1) {
                    $scope.validatedString = "Palindrome";
                } else {
                    $scope.validatedString = "Not a Palindrome";
                }
            });
        }
    });
    app.controller('TitleController', function ($scope) {
        $scope.name = title;
    });

})();