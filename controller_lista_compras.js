(function(angular) {
    'use strict';

    var app = angular.module('exemplo', []);

    app.controller('ListaComprasController', ['$scope', function($scope) {
        $scope.itens = [
            { produto: 'Teclado', quantidade: 2, comprado: false },
            { produto: 'Pendrive', quantidade: 12, comprado: false }
        ];

        $scope.adicionaItem = function() {
            $scope.itens.push({ produto: $scope.item.produto,
                                quantidade: $scope.item.quantidade,
                                comprado: $scope.item.comprado });

            $scope.item.produto = $scope.item.quantidade = $scope.item.comprado = '';
        };
    }]);
})(window.angular);
