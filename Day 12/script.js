var app = angular.module("FormApp",[]);

app.controller("MainCtrl", function($scope)
{
	$scope.validate = function()
	{
		if($scope.nameInput === "")
		{
			$scope.namePlace = "Please input a name";
		}
		if(($scope.numInput.match(/\d/g).length)===10)
		{
			$scope.numInput = "";
			$scope.numPlace = "Please input a valid phone number";
		}
		
		$scope.emailInput = "";

		$scope.passInput = "";
		
		$scope.rePassInput = "";
	};
});