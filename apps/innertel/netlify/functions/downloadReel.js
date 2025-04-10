const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

exports.handler = async (event) => {
  const { reelUrl } = JSON.parse(event.body || '{}');

  if (!reelUrl || !reelUrl.includes('instagram.com/reel')) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid or missing Instagram Reel URL.' }),
    };
  }

  const outputPath = `/tmp/reel.mp4`;
  const command = `yt-dlp -o "${outputPath}" "${reelUrl}"`;

  try {
    await new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) return reject(stderr);
        resolve(stdout);
      });
    });

    const file = fs.readFileSync(outputPath);
    const base64 = file.toString('base64');

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Disposition': 'attachment; filename="reel.mp4"',
      },
      body: base64,
      isBase64Encoded: true,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to download reel.', detail: err.toString() }),
    };
  }
};
