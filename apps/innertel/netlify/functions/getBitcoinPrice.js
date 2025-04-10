const fetch = require('node-fetch');

exports.handler = async () => {
  const API_KEY = process.env.API_NINJA_KEY;

  if (!API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Missing API key in environment.' }),
    };
  }

  try {
    const res = await fetch('https://api.api-ninjas.com/v1/cryptoprice?symbol=BTC', {
      headers: { 'X-Api-Key': API_KEY }
    });

    const data = await res.json();

    if (data.price) {
      return {
        statusCode: 200,
        body: JSON.stringify({ price: data.price })
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Price not found in API response.' })
      };
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Request failed.', detail: err.message })
    };
  }
};
