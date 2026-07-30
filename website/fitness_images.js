const fs = require('fs');
const path = require('path');
const file = path.join('.', 'health.html');

const fitnessImages = [
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop'
];

let content = fs.readFileSync(file, 'utf8');
let idx = 0;
content = content.replace(/<img[^>]*src=\"([^\"]+)\"[^>]*>/g, (match, url) => {
  let newUrl = fitnessImages[idx % fitnessImages.length];
  idx++;
  return match.replace(url, newUrl);
});

fs.writeFileSync(file, content);
console.log('Updated health.html with fitness images');
