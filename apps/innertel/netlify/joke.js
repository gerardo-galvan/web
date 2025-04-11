exports.handler = async function () {
    const API_KEY = process.env.API_NINJAS_KEY;
  
    try {
      const res = await fetch('https://api.api-ninjas.com/v1/jokes?limit=1', {
        headers: {
          'X-Api-Key': API_KEY,
        },
      });
  
      if (!res.ok) {
        throw new Error(`API request failed: ${res.status}`);
      }
  
      const data = await res.json();
      const joke = data[0]?.joke || "No joke found.";
  
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ joke }),
      };
    } catch (err) {
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Failed to fetch joke.' }),
      };
    }
  };
  