exports.handler = async function (event) {
  const API_KEY = process.env.API_NINJAS_KEY;
  const query = new URLSearchParams(event.queryStringParameters);
  const rawLength = query.get('length');
  const length = parseInt(rawLength);

  // Validate length: must be a number between 4 and 64
  if (isNaN(length) || length < 4 || length > 64) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'Invalid length. Must be a number between 4 and 64.' }),
    };
  }

  const url = `https://api.api-ninjas.com/v1/passwordgenerator?length=${length}&upper_case=true&lower_case=true&numbers=true&special_chars=true`;

  try {
    const res = await fetch(url, {
      headers: {
        'X-Api-Key': API_KEY,
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`API request failed: ${errorText}`);
    }

    const data = await res.json();
    const password = data.random_password;

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'Failed to generate password.' }),
    };
  }
};
