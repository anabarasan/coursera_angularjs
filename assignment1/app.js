(function(){
angular.module("LunchCheck", [])

.controller("LunchCheckController", LunchCheckController);

LunchCheckController.inject = ['$scope'];

function LunchCheckController($scope) {
    var lunch_menu;
    $scope.lunch_menu = "";
    $scope.result = "";
    $scope.check_menu = function() {
        if ($scope.lunch_menu.length > 0) {
            lunch_menu = $scope.lunch_menu.split(",");
            console.log(lunch_menu.length);
            if (lunch_menu.length <= 3) {
                $scope.result = "Enjoy!";
            } else {
                $scope.result = "Too much!";
            }
        } else {
            $scope.result = "Please enter data first";
        }
    };
}

})();