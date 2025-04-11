exports.handler = async function () {
    try {
      const res = await fetch('https://api.coinstats.app/public/v1/coins/bitcoin?currency=USD');
  
      if (!res.ok) {
        throw new Error(`API request failed: ${res.status}`);
      }
  
      const json = await res.json();
      const btc = json.coin;
  
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: btc.name,
          price: btc.price,
          marketCap: btc.marketCap,
          volume: btc.volume,
          symbol: btc.symbol,
          priceChange1h: btc.priceChange1h,
          priceChange1d: btc.priceChange1d,
          priceChange1w: btc.priceChange1w
        }),
      };
    } catch (err) {
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Failed to fetch BTC stats.' }),
      };
    }
  };
  