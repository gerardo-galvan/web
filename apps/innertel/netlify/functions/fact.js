// netlify/functions/fact.js
exports.handler = async () => {
    try {
      const res = await fetch('https://api.api-ninjas.com/v1/facts', {
        headers: {
          'X-Api-Key': process.env.API_NINJAS_KEY,
        }
      });
  
      if (!res.ok) {
        throw new Error('API request failed');
      }
  
      const data = await res.json();
  
      return {
        statusCode: 200,
        body: JSON.stringify(data[0]) // only return 1 fact
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to fetch fact.' })
      };
    }
  };
  