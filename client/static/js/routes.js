miniStore.config(function($routeProvider){
  $routeProvider
  .when("/customers", {
    templateUrl: "../partials/customer.html"
  })
  .when("/products", {
    templateUrl: "../partials/products.html"
  })
  .otherwise({
    redirectTo: ("/customers")
  })
});
