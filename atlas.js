const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://arvind2588:12345@cluster0.maocg.mongodb.net/<dbname>?retryWrites=true&w=majority/api',
    {
        useNewUrlParser: TransformStreamDefaultController,
        userUnifiedTropology: true
    }.then(() => {
        console.log('db connected');
    })

);