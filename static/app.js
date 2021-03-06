
angular.module('weatherNews', ['ui.router'])
.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
	$stateProvider
	    .state('home', {
		url: '/home',
		templateUrl: '/home.html',
		controller: 'MainCtrl'
	    })
	    .state('posts', {
		url: '/posts/{id}',
		templateUrl: '/posts.html',
		controller: 'PostsCtrl'	
	    });
	$urlRouterProvider.otherwise('home');
}])
.factory('postFactory', [function(){
    var o = {
	posts: []
    };
    return o;
}])
.controller('MainCtrl', [
  '$scope',
  'postFactory',
  function($scope, postFactory) {
    console.log("main");
    $scope.test = 'Hello world!';
    $scope.posts = postFactory.posts; /*[
	{title:'Post 1', upvotes:5},
	{title:'Post 2', upvotes:6},
	{title:'Post 3', upvotes:1},
	{title:'Post 4', upvotes:4},
	{title:'Post 5', upvotes:3}
    ];*/
    $scope.addPost = function() {
	if($scope.formContent === '') {return;}
	$scope.posts.push({title:$scope.formContent,upvotes:0, comments: []});
	$scope.formContent='';
    };
    $scope.incrementUpvotes = function(post) {
	post.upvotes += 1;
    };
  }
])
.controller('PostsCtrl' [
'$scope',
/*'$stateParams',
'postFactory',*/
function($scope/*, $stateParams, postFactory*/) {
    console.log("sadfa");
    /*$scope.post = postFactory.posts[$stateParams.id];
    $scope.addComment = function() {
	if($scope.body === '') { return; }
	$scope.post.comments.push({
	    body: $scope.body,
	    upvotes: 0
	});
	$scope.body = '';
    };
    $scope.incrementUpvotes = function(comment){
	comment.upvotes += 1;
    };*/
}]);

