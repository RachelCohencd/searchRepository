const mongoose=require('mongoose');


const RavSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    img:{type:String,required:true},
    name: {type: String ,require: true },
    capitiy: {type: String ,require: true },
    lessons:[
        {type:mongoose.Schema.Types.ObjectId, ref:'Lesson'}
    ]
});
module.exports=mongoose.model('Rav',RavSchema);
/**img7: {type: String ,require: true },
    name: {type: String ,require: true },
    capitiy: {type: String ,require: true },
    lessons:[
        {type:mongoose.Schema.Types.ObjectId, ref:'Lesson'}
    ] */