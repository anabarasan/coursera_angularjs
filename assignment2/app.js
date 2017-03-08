(function(){
    'use strict';
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', toBuyController)
    .controller('AlreadyBoughtController', alreadyBoughtController)
    .service('ShoppingListCheckOffService', shoppingListCheckOffService)

    toBuyController.$inject = [ShoppingListCheckOffService]
    function toBuyController(ShoppingListCheckOffService) {
        var tobuy = this;
        tobuy.items = ShoppingListCheckOffService.get_tobuy_items();
        tobuy.buy = function(item_index){
            ShoppingListCheckOffService.buy(item_index);
        };
    }

    alreadyBoughtController.$inject = [ShoppingListCheckOffService]
    function alreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        var items = ShoppingListCheckOffService.get_bought_items();
    }

    function shoppingListCheckOffService() {
        var service = this;
        var tobuy = ['Chips', 'Cookies', 'Sugary Drinks', 'Biscuits'];
        var bought = [];

        service.buy = function(item_index) {
            service.bought.append(service.tobuy[item_index])
            service.tobuy.splice(item_index, 1)
        };

        service.get_tobuy_items = function() {
            return tobuy;
        };

        service.get_bought_items = function() {
            return bought;
        };
    }
})()