const axios = require('axios');
const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();

// Use cors middleware to enable CORS for all routes
app.use(cors());

app.get('/api/orderlines', async (req, res) => {
  try {
    const { type_id, quantity } = req.query;


    if (!type_id|| !quantity) {
      return res.status(400).json({ error: 'Please provide type_id and quantity.' });
    }

    const response = await axios.get('https://minizuba-fn.azurewebsites.net/api/orderlines', {
      params: {
        type_id,
        quantity,
      },
    });

    res.json(response.data);
    console.log(res)
  } catch (error) {
    if (error.response && error.response.status === 400) {
      console.error('Bad Request: Please pass a type_id on the query string or in the request body');
      res.status(400).json({ error: 'Bad Request: Please pass a type_id on the query string or in the request body' });
    } else {
      console.error('An error occurred:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
