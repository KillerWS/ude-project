// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let testSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    }
}, {
        collection: 'test'
    })

//module.exports = mongoose.model('Test', testSchema);
export default mongoose.model('Test', testSchema);