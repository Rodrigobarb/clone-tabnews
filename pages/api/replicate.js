// pages/api/replicate.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { image, prompt } = req.body;
  const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN;

  if (!REPLICATE_API_TOKEN) {
    return res.status(500).json({ error: 'Missing API token' });
  }

  try {
    const response = await fetch('https://api.replicate.com/v1/predictions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${REPLICATE_API_TOKEN}`,
        'Content-Type': 'application/json',
        'Prefer': 'wait'
      },
      body: JSON.stringify({
        version: '76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38',
        input: { image, prompt }
      })
    });

    const data = await   response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error processing request', details: error.message });
  }
}