const translationDefinitions = require('./translationDefinitions')

exports.translateHelper = function(item, language) {
    return translationDefinitions[item][language]
}

exports.websiteLink = function(path, language) {
    return `/${language}/${path}`
}
