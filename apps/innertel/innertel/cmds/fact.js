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
    const fact = data[0]?.fact || "No fact found.";

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ fact })
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: 'Failed to fetch fact.' })
    };
  }
};
