exports.handler = async function(event) {
    const API_KEY = process.env.API_NINJAS_KEY;
    const query = new URLSearchParams(event.queryStringParameters);
    const ip = query.get('ip') || '';
    const url = `https://api.api-ninjas.com/v1/iplookup${ip ? `?address=${ip}` : ''}`;
  
    try {
      const response = await fetch(url, {
        headers: {
          'X-Api-Key': API_KEY,
        },
      });
  
      const data = await response.json();
  
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
    } catch (error) {
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Server error: ' + error.message }),
      };
    }
  };
  