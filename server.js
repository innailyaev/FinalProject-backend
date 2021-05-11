const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

const usersRouter = require('./server/routes/users.route');
const postRouter = require('./server/routes/posts.route');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/users', usersRouter);
app.use('/api/posts', postRouter);

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

//connect to db with mongoose
mongoose.connect('mongodb+srv://innailyaev:CdZkVJeEQeMtFR9j@cluster.o79ew.mongodb.net/TravelApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log("database connect")
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`application start at ${process.env.PORT || 5000}`)
})
