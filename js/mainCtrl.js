app.controller("mainCtrl", function($scope) {
  $scope.name="Tyler";

  $scope.friends=["Bob", "Bill", "Joe"];

  $scope.addFriend = function() {
    console.log("in the function");
    $scope.friends.push($scope.friendName);
  }
});
