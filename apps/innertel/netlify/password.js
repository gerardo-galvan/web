exports.handler = async function (event) {
  const API_KEY = process.env.API_NINJAS_KEY;
  const query = new URLSearchParams(event.queryStringParameters);
  const length = parseInt(query.get('length')) || 16;

  const url = `https://api.api-ninjas.com/v1/passwordgenerator?length=${length}&upper_case=true&lower_case=true&numbers=true&special_chars=true`;

  try {
    const res = await fetch(url, {
      headers: {
        'X-Api-Key': API_KEY,
      },
    });

    if (!res.ok) {
      throw new Error(`API request failed: ${res.status}`);
    }

    const data = await res.json();

    // Confirm at least 1 uppercase letter is included (API usually does it already)
    const password = data.random_password;
    const hasUpper = /[A-Z]/.test(password);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: hasUpper ? password : 'A' + password.slice(1), // force at least one uppercase if not present
      }),
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
