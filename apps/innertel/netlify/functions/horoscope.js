exports.handler = async (event) => {
    const sign = event.queryStringParameters.sign;
  
    if (!sign) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing zodiac sign. Try: horoscope leo' })
      };
    }
  
    try {
      const res = await fetch(`https://api.api-ninjas.com/v1/horoscope?sign=${sign}`, {
        headers: {
          'X-Api-Key': process.env.API_NINJAS_KEY
        }
      });
  
      const data = await res.json();
  
      return {
        statusCode: 200,
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
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to fetch horoscope.' })
      };
    }
  };
  