exports.handler = async function () {
    const API_KEY = process.env.API_NINJAS_KEY;
  
    try {
      const res = await fetch('https://api.api-ninjas.com/v1/cryptoprice?symbol=BTCUSD', {
        headers: {
          'X-Api-Key': API_KEY,
        },
      });
  
      if (!res.ok) {
        throw new Error(`API request failed: ${res.status}`);
      }
  
      const data = await res.json();
  
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ price: data.price }),
      };
    } catch (err) {
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Failed to fetch BTC price.' }),
      };
    }
  };
  