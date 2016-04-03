(function(angular) {
  //'use strict';
var app = angular.module('app', []);

/*servico para compartilhar a variavel trending topic*/
app.factory('Trending_topic', function() {
    return {
        title:'abc'
    };
});

app.controller('trending_controller', function($scope, Trending_topic) {
    $scope.trending_topics=[];
    //$scope.trending_topics[0]=Trending_topic;
    $scope.trending_topics=[
    {title:'abc'},
    {title:'abd'},
    {title:'topico3'},
    {title:'topico4'},
    {title:'to'},
    {title:'topico4'},
    {title:'topico14'},
    {title:'topico5'},
    {title:'txx'},
    {title:'topico4'},
    {title:'topico4'},
    {title:'topico4'},
    {title:'topico4'},
    {title:'topico4'},
    {title:'topico4'},
    {title:'topico4'},
    {title:'topico4'},
    ];
    $scope.trending_topic=Trending_topic;
    $scope.trending_topic=$scope.trending_topics[0];

    /*aki, dpois vo pegar os topics de algum lugar*/
    $scope.refresh_trending_topics=function() {
    }
});

app.controller('post_controller', function($scope, Trending_topic) {
    $scope.trending_topic=Trending_topic;
    $scope.myposts=[{
        title:'Trabalho web',
        text:'Esse trabalho ta ficando mto bom!'
    }];


    $scope.add_post=function(vtitle, vtext) {
        $scope.myposts.push({
            title:vtitle,
            text:vtext 
        });
    }
    $scope.add_topic=function(topic) {
        $("#post_text").val($("#post_text").val() + "#" + topic);
    }
});

} /*fim do script*/
)(window.angular);
