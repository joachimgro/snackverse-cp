const fs = require('fs');

// Read the HTML file
const content = fs.readFileSync('src/app/snackverseHTML.ts', 'utf8');

// Extract HTML string
const match = content.match(/export const snackverseHtml = `([\s\S]+)`/);
if (!match) {
  console.error('Could not find snackverseHtml');
  process.exit(1);
}

const html = match.group(1);

// Helper to convert HTML to JSX
function htmlToJSX(htmlStr) {
  // Remove style and script tags
  htmlStr = htmlStr.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  htmlStr = htmlStr.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  
  // Convert class to className
  htmlStr = htmlStr.replace(/\bclass=/g, 'className=');
  
  // Convert SVG attributes
  htmlStr = htmlStr.replace(/\bfill-rule=/g, 'fillRule=');
  htmlStr = htmlStr.replace(/\bclip-rule=/g, 'clipRule=');
  htmlStr = htmlStr.replace(/\bstroke-width=/g, 'strokeWidth=');
  
  // Convert srcset to srcSet
  htmlStr = htmlStr.replace(/\bsrcset=/g, 'srcSet=');
  
  // Make self-closing tags
  htmlStr = htmlStr.replace(/<img([^>]*?)(?<!/)>/g, '<img$1 />');
  htmlStr = htmlStr.replace(/<source([^>]*?)(?<!/)>/g, '<source$1 />');
  htmlStr = htmlStr.replace(/<path([^>]*?)(?<!/)>/g, '<path$1 />');
  htmlStr = htmlStr.replace(/<rect([^>]*?)(?<!/)>/g, '<rect$1 />');
  htmlStr = htmlStr.replace(/<br([^>]*?)(?<!/)>/g, '<br$1 />');
  
  return htmlStr;
}

// Extract sections (simplified - we'll need to manually find boundaries)
console.log('HTML length:', html.length);
console.log('Header start:', html.indexOf('<div class="menu__wrapper'));
console.log('Hero start:', html.indexOf('<div class="hero flex flex-col'));
