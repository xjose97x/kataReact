console.error = function(){};
const context = require.context('./app', true, /\.[sS]pec\.js$/);
context.keys().forEach(context)
