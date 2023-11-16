const { formatList } = require('../shared/format');

const out = formatList([{ status: 'open', title: 'write tests' }]);
if (!out.includes('write tests')) throw new Error('formatList broken');
console.log('ok');
