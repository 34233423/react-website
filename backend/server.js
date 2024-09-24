// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/test', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error(err));

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Routes
// app.use('/api/auth', require('./routes/auth'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));




 const express = require('express');
 const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
 const cors = require('cors');
const RegisterModel=require('./models/User.js')

 const app = express();
 app.use(cors())
 app.use(express.json())

 mongoose.connect('mongodb://127.0.0.1:27017/test');

app.post('/register',(req,res)=>{
    const {name,password} = req.body;
    RegisterModel.findOne({name:name})
    .then(user=>{
        if(user){
            res.json("Already exists")
        }else{
            RegisterModel.create({name:name,password:password})
            .then(result =>res.json("Account created"))
            .catch(err => res.json(err))
        }
    }).catch(err=> res.json(err))
})


 app.listen(3001,() => {
    console.log('Server is running on port 3001');
 })
