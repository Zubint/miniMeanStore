miniStore.controller("CustomersController", function($scope, CustomerFactory){

    CustomerFactory.index(function(customers){
      $scope.customers = customers;
      console.log(customers);
    });

    $scope.remove=function(customerID){
        console.log("controller id:" +customerID);
        CustomerFactory.destroy(customerID, function(response){
          console.log(response)
          if(response.status){
            $scope.customers=response
          }else{
            $scope.errors=[];
            $scope.errors.push(response.errors);
            CustomerFactory.index(function(response){
              $scope.customers = response;
            })
          } //eventually check for errors;
        })
    }
    $scope.create=function(){
      console.log("create in client side controller")
      CustomerFactory.create($scope.newCustomer, function(response){
        console.log(response);
        // $scope.customers = response
        if(response.status){
          //this means status is 'true'
          $scope.customers = response
        }else{
          $scope.errors=[];
          $scope.errors.push(response.errors)
          console.log($scope.errors);
          CustomerFactory.index(function(customers){
            $scope.customers = customers;
          });
        }//eventually, check for errors
      })
      $scope.newCustomer={};
    }
})
