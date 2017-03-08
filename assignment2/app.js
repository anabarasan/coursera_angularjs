(function(){
    'use strict';
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

    ToBuyController.$inject = ['ShoppingListCheckOffService']
    function ToBuyController(ShoppingListCheckOffService) {
        var tobuy = this;
        tobuy.items = ShoppingListCheckOffService.get_tobuy_items();
        tobuy.buy = function(item_index){
            ShoppingListCheckOffService.buy(item_index);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.items = ShoppingListCheckOffService.get_bought_items();
    }

    function ShoppingListCheckOffService() {
        var service = this;
        var tobuy = ['Chips', 'Cookies', 'Sugary Drinks', 'Biscuits'];
        var bought = [];

        service.buy = function(item_index) {
            bought.push(tobuy[item_index])
            tobuy.splice(item_index, 1)
        };

        service.get_tobuy_items = function() {
            return tobuy;
        };

        service.get_bought_items = function() {
            return bought;
        };
    }
})()