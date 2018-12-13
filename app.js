// We Create a Module here
angular.module('PatientDetails',[]).controller('PatientDetailsCtrl',function($scope,$http) {
    $scope.contactList ="" ;
    $scope.selectedPatients = "";
    $http.get('db.json')
        .then(function(response) {
        $scope.contactList = response.data.details;
        console.log($scope.contactList);
    });
    $scope.selectDetails = function(index) {
        $scope.selectedPatients = $scope.contactList[index];
    };

    $scope.printDoc = function() {
        window.print();
    };
});
