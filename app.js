const express=require('express');
const app=express();
const morgan=require('morgan');
const travels = require('./api/controllers/travels');
const mongoose=require('mongoose');
mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@searchproject.fwxkq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{

    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});
mongoose.connection.on('connected',()=>{
    console.log('MCo77!');
});


const searchesRoutes=require('./api/routes/Searches')

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization");
    if(req.method==="OPTIONS")
    {
        res.header("Access-Control-Allow-Methods","PUT,POST,PATCH,DELETE,GET");
        return res.status(200).json({});
    }
    next();
});


app.use('/searches',searchesRoutes);



app.use((req,res,next)=>{
    const error=new Error('Not Found');
    error.status=404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    })
})
module.exports=app;