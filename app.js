// Import the Express module
const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a simple route for dynamic content
app.get('/dynamic', (req, res) => {
    res.send({
        message: 'Hello from a dynamically generated route!',
        timestamp: new Date()
    });
});

// Serve the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
