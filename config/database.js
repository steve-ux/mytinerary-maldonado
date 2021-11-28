const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://steve-ux:1234@cluster0.v7hwp.mongodb.net/mytinerary?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    // useCreateIndex: true,
    useNewUrlParser: true,
    // useFindAndModify: false, 
})
.then(()=> console.log('Database connected'))
.catch((error) => console.log(error))