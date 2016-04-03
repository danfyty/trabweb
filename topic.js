(function(angular) {
  //'use strict';
var app = angular.module('app', ['ngRoute']);


app.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider.
		when('/:param',{
			controller: 'topic_controller',
			templateUrl : 'topic_view.html'
		}).
		otherwise({
			redirectTo: 'abc'
		});
	}]);


app.controller('trending_controller', function($scope) {
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
    $scope.refresh_trending_topics=function() {
    }
});

app.controller('topic_controller', function($scope, $routeParams) {
	$scope.topic=$routeParams.param;
	$scope.posts= [
		{title:'asdf',topic:'abc', user: 'danft', text:'Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, #abc velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tin'},
		{title:'asdf1',topic:'abc', user: 'danft', text:'ehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit #abc'},
		{title:'asdf2',topic:'abd', user: 'yueee', text:'asdfklajsdlkjalksdjfjasdljfla aslkdjflaj akkdxjdk #abd'},
		{title:'asdf3',topic:'abc', user: 'danft', text:'#abc xxxxxxxxxxxxxxxxx'},
		{title:'asdf4',topic:'abd', user: 'zxxdd', text:'#abd xyyyyyyyyyyyyyyyyyy'},
		{title:'asdf5',topic:'abc', user: 'danft', text: 'xaicidkkjlfdsa #abc sdf dfsalkdfkaldfsjkldsfkjlklj fsd dlkjsdfaljkdsfjkldsfkljdj'},
	];
	$scope.posts=$scope.posts.filter(function(a){
		return a.topic==$scope.topic;
	});
});

} /*fim do script*/
)(window.angular);
