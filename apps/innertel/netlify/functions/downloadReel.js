const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { reelUrl } = JSON.parse(event.body || '{}');

  if (!reelUrl || !reelUrl.includes('instagram.com')) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing or invalid Instagram URL.' }),
    };
  }

  try {
    const res = await fetch('https://fastvideosave.net/instagram-downloader', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://fastvideosave.net',
        'Referer': 'https://fastvideosave.net/instagram-downloader',
        'User-Agent': 'Mozilla/5.0'
      },
      body: `url=${encodeURIComponent(reelUrl)}`
    });

    const html = await res.text();
    const match = html.match(/href="([^"]+\.mp4[^"]*)"/i);

    if (match && match[1]) {
      return {
        statusCode: 200,
        body: JSON.stringify({ videoUrl: match[1] })
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Video not found or extract failed.' })
      };
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Request failed.', detail: err.message })
    };
  }
};
