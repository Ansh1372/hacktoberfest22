// jshint esversion:6

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const catSchema = new mongoose.Schema({
    name:String
});
const Cat = mongoose.model('cat', catSchema);

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
