// Import Modules - Http
const http = require('http');

// Import app.js
const app = require('./app');


// Initialize Port
const port = process.env.PORT || 8080;

// Initialize Server
const server = http.createServer(app);

// Start Server
server.listen(port, () => console.log(`Listening on port ${port}`));