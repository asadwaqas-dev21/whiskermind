const https = require('https');

https.get('https://yang-mun.com', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const urls = new Set();
    const regex = /https?:\/\/[^\s"'<>]+\.(?:jpg|jpeg|png|webp|gif)/ig;
    let match;
    while ((match = regex.exec(data)) !== null) {
      urls.add(match[0]);
    }
    
    // also try cdn.shopify.com without protocol
    const regex2 = /\/\/cdn\.shopify\.com[^\s"'<>]+\.(?:jpg|jpeg|png|webp|gif)/ig;
    while ((match = regex2.exec(data)) !== null) {
      urls.add('https:' + match[0]);
    }
    
    console.log(Array.from(urls).slice(0, 15).join('\n'));
  });
}).on('error', err => console.log(err));
