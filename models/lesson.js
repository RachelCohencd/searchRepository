const mongoose=require('mongoose');

const lessonSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    video: {type: String ,require: true },
    title: {type: String ,require: true },
    date: {type: String ,require: true },
    last:{type: Boolean ,require: true },
    holiday:{type: Boolean ,require: true },
    subject: {type: String ,require: true },
    tatSubject: {type: String ,require: true },
    language: {type: String ,require: true },
    RavId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'Rav'},
    // image:{type:String}
});
module.exports=mongoose.model('Lesson',lessonSchema);
/**video: {type: String ,require: true },
    title: {type: String ,require: true },
    date: {type: Date ,require: true },
    subject: {type: String ,require: true },
    tatSubject: {type: String ,require: true },
    language: {type: String ,require: true },
    RavId:{type: mongoose.Schema.Types.ObjectId, ref:"rav"} */