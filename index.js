import express from 'express';
import mongoose, { SchemaType } from 'mongoose';
import cors from 'cors';


const app=express();
const port=4000;
const uri = "mongodb+srv://todo123:todo123@cluster0.tmyvw48.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri,{
    useNewUrlparser:true,
useUnifiedTopology:true,

})
.then(()=>{
    console.log('connected to yourDB-Name database')
})
.catch((err)=>{
    console.log('Error connecting to database:',err)
});


const userSchema =new mongoose.Schema({
    name: {
type:String,
required:true,
    },
    password:{
type:String,
required:true,
    },
});


const User=mongoose.model('users',userSchema);


app.use(express.json());
app.use(cors());


app.post('/register', async (req,res) => {
    try{
        const{name,password}=req.body;
        const existinUser=await User.findOne({name });
        if(existinUser){
            return res.status(400).json({message: 'User name already exist'});
        }
        const newUser=new User({name,password});
await newUser.save();

res.status(201).json({message: 'User register successfully'});

    }catch(error){
        console.error('Error registering user:',error);
        res.status(500).json({message:'Something went Wrong'});
    }

} );


app.get('/users',async(req,res)=>{
    try{
        const users=await User.find({});
        res.json(users);
    }
    catch(error){
console.error('Error getting user:',error);
res.status(500).json({message:'Something went Wrong'});
    }
});
app.listen(port,()=>{
    console.log(`Server is running on port${port}`);
});