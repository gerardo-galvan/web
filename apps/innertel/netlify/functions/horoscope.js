exports.handler = async (event) => {
    const sign = event.queryStringParameters.sign;
  
    if (!sign) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Missing zodiac sign. Try: horoscope leo' })
      };
    }
  
    try {
      console.log('Zodiac sign requested:', sign);
  
      const res = await fetch(`https://api.api-ninjas.com/v1/horoscope?sign=${sign}`, {
        headers: {
          'X-Api-Key': process.env.API_NINJAS_KEY
        }
      });
  
      if (!res.ok) {
        console.error('API error:', res.status, await res.text());
        return {
          statusCode: res.status,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({ error: 'Horoscope API error' })
        };
      }
  
      const data = await res.json();
      console.log('Horoscope API response:', data);
  
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          sign: data.sign,
          date: data.date,
          prediction: data.horoscope,
          mood: data.mood,
          compatibility: data.compatibility,
          lucky_number: data.lucky_number,
          lucky_time: data.lucky_time
        })
      };
    } catch (err) {
      console.error('Function error:', err);
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Failed to fetch horoscope.' })
      };
    }
  };
  