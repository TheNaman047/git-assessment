const { comments } = require('../api/routes/comments');
if (!Array.isArray(comments)) throw new Error('expected an array');
console.log('ok');
