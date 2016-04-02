(function(angular) {
  //'use strict';
var myApp = angular.module('danft_app', []);

/*servico para compartilhar a variavel trending topic*/
myApp.factory('Trending_topic', function() {
    return {
        title:'whatever'
    };
});

myApp.controller('trending_controller', function($scope, Trending_topic) {
    $scope.trending_topics=[];
    //$scope.trending_topics[0]=Trending_topic;
    $scope.trending_topics=[
    {title:'topico1'},
    {title:'topico2'},
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
    //share_trending_topic=$scope.trending_topics[0];
    //Trending_topic=$scope.trending_topics[0];
    $scope.trending_topic=Trending_topic;
    $scope.trending_topic=$scope.trending_topics[0];

    /*aki, dpois vo pegar os topics de algum lugar*/
    $scope.refresh_trending_topics=function() {
        //$scope.trending_topics[0]=0w
        //Trending_topic=$scope.trending_topics[0];
        //console.log(Trending_topic);
    }
});

myApp.controller('post_controller', function($scope, Trending_topic) {
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
