const mongoose=require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://natthawut2646:262546@cluster0.0ovn0ot.mongodb.net/?retryWrites=true&w=majority')
    .then(()=> console.log('Connected to MongoDB'))
    .catch((err)=>console.log('Cannot Connect to MongoDB')) 
     

const LoginSchema=new mongoose.Schema({
    path:{
        type:String,
        require:true
    }
})

const collection=new mongoose.model("imgCollection5",LoginSchema)

module.exports=collection