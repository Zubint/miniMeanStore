
var CustomerSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 4}
}, {timestamps: true});

mongoose.model('Customer', CustomerSchema);
