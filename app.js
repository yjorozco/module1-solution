(function () {
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    String.prototype.isEmpty = function() {
      return (this.length === 0 || !this.trim());
    };
    $scope.checkLunch = function(){
      if($scope.menu!=undefined&&!$scope.menu.isEmpty()){
        var count = 0;
        var elements = $scope.menu.split(",");
        for(var i=0; i<elements.length;i++){
          if(!elements[i].isEmpty()){
            count++;
          }
        }
        if(count>0&&count<=3){
          $scope.message = "Enjoy!";
        }else{
          $scope.message = "Too much!";
        }
      }else{
         $scope.message = "Please enter data first";
      }
    }
  }
})();
