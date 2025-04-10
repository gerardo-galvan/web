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
  
      if (!response.ok) {
        return {
          statusCode: response.status,
          body: JSON.stringify({ error: `API error: ${response.statusText}` }),
        };
      }
  
      const data = await response.json();
  
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server error: ' + error.message }),
      };
    }
  };