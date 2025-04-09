exports.handler = async (event) => {
    const vin = event.queryStringParameters.vin;
  
    if (!vin) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Missing VIN number. Usage: vinlookup <VIN>' })
      };
    }
  
    try {
      const res = await fetch(`https://api.api-ninjas.com/v1/vinlookup?vin=${vin}`, {
        headers: {
          'X-Api-Key': process.env.API_NINJAS_KEY
        }
      });
  
      if (!res.ok) {
        const errorText = await res.text();
        console.error('VIN API error:', res.status, errorText);
        return {
          statusCode: res.status,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({ error: 'VIN API error.' })
        };
      }
  
      const data = await res.json();
  
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
      };
    } catch (err) {
      console.error('Function error:', err);
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Failed to fetch VIN data.' })
      };
    }
  };
  