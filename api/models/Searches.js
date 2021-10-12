const mongoose=require('mongoose');

const SearchSchema=mongoose.Schema({
    createdAt: {type: Number, required: true},
    customerId: {type: String,required: true},
    invoiceId: {type: String,required: true}
});
module.exports=mongoose.model('Searches',SearchSchema); 
