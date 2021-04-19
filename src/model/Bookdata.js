const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.dnxnk.mongodb.net/ICTAK?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    BookName: String,
    Author: String,
    Genre: String,
    Cover: String
});

const Bookdata = mongoose.model('bookdata', BookSchema);

module.exports = Bookdata;
