const mongoose=require("mongoose")

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://natthawut2646:262546@cluster0.0ovn0ot.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('mongo connected');
})
.catch(()=>{
    console.log('mongo not connected');
})

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model('LogInCollection',LogInSchema)

module.exports= collection
