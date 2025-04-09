exports.handler = async (event) => {
    const word = event.queryStringParameters.word;
  
    if (!word) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Missing word. Usage: define <word>' })
      };
    }
  
    try {
      const res = await fetch(`https://api.api-ninjas.com/v1/dictionary?word=${word}`, {
        headers: {
          'X-Api-Key': process.env.API_NINJAS_KEY
        }
      });
  
      if (!res.ok) {
        const errText = await res.text();
        console.error(`API error for "${word}":`, errText);
        return {
          statusCode: res.status,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({ error: `Definition not found for "${word}".` })
        };
      }
  
      const data = await res.json();
  
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          word: data.word,
          definition: data.definition
        })
      };
    } catch (err) {
      console.error('Server error:', err);
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Server error fetching definition.' })
      };
    }
  };
  