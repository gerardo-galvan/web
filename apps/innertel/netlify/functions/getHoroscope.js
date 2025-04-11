exports.handler = async function(event) {
    const API_KEY = process.env.API_NINJAS_KEY;
    const query = new URLSearchParams(event.queryStringParameters);
    const sign = query.get('sign')?.toLowerCase();
  
    if (!sign) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Missing zodiac sign (e.g., ?sign=aries)' }),
      };
    }
  
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/horoscope?sign=${sign}`, {
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
  