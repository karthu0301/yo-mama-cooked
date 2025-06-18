require('dotenv').config();
const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const app = express();

app.use(express.json());

// your OAuth & recipe endpoints go here...

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log(`Server listening on http://127.0.0.1:${PORT}`));
