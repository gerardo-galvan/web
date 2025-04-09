exports.handler = async () => {
    try {
      const res = await fetch('https://api.api-ninjas.com/v1/jokes', {
        headers: {
          'X-Api-Key': process.env.API_NINJAS_KEY
        }
      });
  
      const data = await res.json();
  
      return {
        statusCode: 200,
        body: JSON.stringify({ joke: data[0]?.joke || 'No joke found.' })
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to fetch joke.' })
      };
    }
  };
  