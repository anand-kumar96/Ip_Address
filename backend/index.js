const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.set('trust proxy', true); // To correctly get IP address

app.get('/api/ip', (req, res) => {
  const clientIp =
    req.headers['x-forwarded-for']?.split(',')[0] ||
    req.socket.remoteAddress;
  res.json({ ip: clientIp });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
