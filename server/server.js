const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors')
const errorHandler=require('./middleware/errorHandler')


const app=express();
app.use(cors())
app.use(express.json())


 //mongo db connection
mongoose.connect('mongodb+srv://rajahhassan88:7co5KQuHt3OoCA6H@cluster0.x2vozz5.mongodb.net/test', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
  }) 
  .catch((err) => { 
    console.error('Error connecting to MongoDB', err);
  });


  app.use('/users',require('./routes/userRoutes'))
  

app.use(errorHandler)



//setting port
app.listen(2000,()=>{
    console.log('app connected to port 2000'); 
})

