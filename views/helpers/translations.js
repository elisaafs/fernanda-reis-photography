const translationDefinitions = require("./translationDefinitions");

exports.translateHelper = function(item, language) {
    return translationDefinitions[item][language];
};

exports.websiteLink = function(path, language) {
    return `/${language}/${path}`;
};

exports.photoSetName = function(photoSet, language) {
    return photoSet.rawName || exports.translateHelper(photoSet.name, language);
};
