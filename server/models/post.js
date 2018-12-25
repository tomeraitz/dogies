const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    garden: { type: Schema.Types.ObjectId, ref: 'Garden' },
    text: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    attendCounter: Number,
    date: Date
})

const Post = mongoose.model('Post', postSchema)
module.exports = Post
