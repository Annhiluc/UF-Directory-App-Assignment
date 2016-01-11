angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    
    //Adds a new listing to the listings variable and resets the information on the form
    $scope.addListing = function() {
      $scope.listings.push({
        code: $scope.newCode,
        name: $scope.newName,
        coordinates: $scope.newCoordinates,
        address: $scope.newAddress
      });

      //Resets the form 
      $scope.newCode = '';
      $scope.newName = '';
      $scope.newCoordinates = '';
      $scope.newAddress = '';
    };

    //Deletes a listing at the given index
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };

    //Updates the detailed info to be shown on the Detailed Info jumbotron
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);