const mongoose = require('mongoose')
const Schema = mongoose.Schema

const suggestSchema = new Schema ({
    firstName: {
        type: 'String',
        required: true
    },
    lastName: {
        type: 'String',
        required: true
    },
    gender: {
        type: 'String',
        required: true
    },
    email: {
        type: 'String',
        required: true
    },
    resourceFile: {
        type: 'String',
        required: true
    }
}
)

const suggestions = mongoose.model("suggestions", suggestSchema)