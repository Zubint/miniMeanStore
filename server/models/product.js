var ProductSchema = new mongoose.Schema({
  name:{type:String, required:true},
  qty:{type:Number, min:0},
  img:{type:String},
  description:{type: String}
}, {timestamps:true});

mongoose.model('Product', ProductSchema);  //registers the schema
