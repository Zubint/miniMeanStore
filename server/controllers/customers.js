var Customer = mongoose.model('Customer');

module.exports = (function(){
      return{
        index: function(req, res){
        //do something
            Customer.find({}, function(err, customers){
              if(err){
                console.log("error")
              }else {
                res.json(customers);
              }
            })
          },
        create: function(req, res){

          if(req.body.name){
          newCustomer = new Customer ({
            name: req.body.name.toLowerCase()
          })}else {
            res.json({status:false, errors:"Name is required"});
          }

          // var searchName = "/"+req.body.name+"/i";
          // console.log(searchName);

          Customer.findOne({name:req.body.name.toLowerCase()}, function(err, customer){
              console.log(customer, " ", err);
          if(customer){
              res.json({status:false, errors:"This name already exists"});
            }else {
              newCustomer.save(function(err){
                if(err){
                  console.log(err)
                  res.json({status: false, errors:"Name must be a minimum of 4 characters"});
                }else {
                  console.log("customer written");
                  res.redirect("/customers");
                }
              })
            }
          })
        },
        destroy: function(req, res){
          // console.log(req.params.id);
          Customer.findByIdAndRemove({_id:req.params.id}, function(err){
            if(err){
              console.log(err)
            }else {
              res.redirect("/customers");
            }
          })
        }

      //end of return statement add new methods above.
      }
})() //IMPORTANT TO EXECUTE THIS AS AN IMMEDIATE FUNCTION!
