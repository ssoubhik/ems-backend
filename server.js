// Import Modules - Http
const http = require('http');

// Import app.js
const app = require('./app');

// Initialize Port
const port = process.env.PORT || 3000;

// Initialize Server
const server = http.createServer(app);

// Start Server
server.listen(port);