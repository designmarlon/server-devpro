const mongoose = require('mongoose')

 const languageSchema = mongoose.Schema({
    name: String,
    yearOfCreation: Date,
    currentVersion: String,
    logo: String,
    paradigmUsed: String,
    isTyped: Boolean,
    isFrontEndLanguage: Boolean,
    isBackEndLanguage: Boolean,
    features: String,
    pros: String,
    cons: String
})

const Language = mongoose.model('language', languageSchema)

module.exports = Language