const express = require('express');
const path = require('path');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(path.join(__dirname + 'dist')));
// Start the app by listening on the default
// Heroku port
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.listen(process.env.PORT || 8080);
console.log('Server running on localhost:8080');