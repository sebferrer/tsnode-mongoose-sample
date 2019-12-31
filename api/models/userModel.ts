import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

const UserSchema = new Schema({
    id: Number,
    name: {
        type: String,
        required: 'Kindly enter a name'
    },
    birthday: {
        type: Date,
        default: Date.now
    }
},
    { collection: 'users' });

module.exports = mongoose.model('Users', UserSchema);