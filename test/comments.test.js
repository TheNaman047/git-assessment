const { comments } = require('../api/routes/comments');
if (!Array.isArray(comments)) throw new Error('expected an array');
if (comments.length !== 0) throw new Error('expected empty');
console.log('ok');
