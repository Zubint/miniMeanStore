miniStore.factory('CustomerFactory', function($http){

  var factory={};

    factory.index=function(callback){
      $http.get("/customers").success(function(response){
          callback(response);
      })
    }

    factory.create =function(customer, callback){
      $http.post("/customers", customer).success(function(response){
        callback(response);
      })
    }

    factory.destroy=function(customer, callback){
      console.log("factory customer: " + customer);
      $http.post("/customers/"+customer+"/destroy").success(function(response){
        callback(response);
      })
    }

  return factory;

})
