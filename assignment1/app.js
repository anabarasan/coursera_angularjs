(function(){
angular.module("LunchCheck", [])

.controller("LunchCheckController", LunchCheckController);

LunchCheckController.inject = ['$scope'];

function LunchCheckController($scope) {
    var lunch_menu;
    $scope.lunch_menu = "";
    $scope.result = "";
    $scope.check_menu = function() {
        lunch_menu = [];
        if ($scope.lunch_menu.length > 0) {
            // remove empty items
            $scope.lunch_menu.split(",").forEach(function(item) {
                if (item.trim().length > 0) {
                    lunch_menu.push(item);
                }
            });

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