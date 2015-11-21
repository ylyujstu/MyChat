angular.module('myChatApp', ['ngRoute']);

run(function($window, $rootScope, $http, $location) {
	/* 
	`$http`是Angular提供的一个Ajax组件，在应用启动时，通过Ajax调用服务端的验证接口`'/api/validate'`，获取用户的信息，如果用户已登录，服务端返回用户信息，客户端把用户信息保存到全局作用域中`$rootScope.me`中，然后通过`$location`组件跳转到`/`，即聊天室页面；如果用户未登录，则跳转到登录页。
	*/
	$http({
		url: '/api/validate',
		method: 'GET'
	}).success(function (user) {
		$rootScope.me = user;
		$location.path('/');
	}).error(function(data){
		$location.path('/login');
	})
});





