const express = require('express');
const path = require('path');
const app = express();

// Use the port Elastic Beanstalk assigns, default to 8080
const PORT = process.env.PORT || 8080;

// Serve all static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html for single page app-like routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
