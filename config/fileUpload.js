var path = require('path');

module.exports.fileUpload = {
    uploadDir : path.resolve(__dirname, '../', 'uploads'),
    staticDir : path.resolve(__dirname, '../frontend/static/')
};
