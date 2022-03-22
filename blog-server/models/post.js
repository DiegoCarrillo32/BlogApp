const { Schema, model } = require('mongoose')

const PostSchema = Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        default: Date.now
    }


});
PostSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Post', PostSchema);