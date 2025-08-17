export default function handler(req, res) {
  console.log('=== TEST API ENDPOINT CALLED ===');
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  res.status(200).json({ 
    message: 'Test API endpoint is working!',
    method: req.method,
    timestamp: new Date().toISOString()
  });
}