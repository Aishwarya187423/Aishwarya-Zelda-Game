// Aish-Zelda.test.js
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Read the HTML file
const html = fs.readFileSync(path.resolve(__dirname, 'Aish-Zelda.html'), 'utf-8');

// Setup JSDOM environment
let dom;
let document;
beforeAll(() => {
  dom = new JSDOM(html);
  document = dom.window.document;
});

describe('Aish-Zelda HTML Tests', () => {
  test('Header contains the correct title', () => {
    const headerTitle = document.querySelector('header h1').textContent;
    expect(headerTitle).toBe('The Legend of Zelda');
  });

  test('Navigation contains Home link', () => {
    const homeLink = document.querySelector('nav a[href="#"]');
    expect(homeLink).not.toBeNull();
    expect(homeLink.textContent).toBe('Home');
  });

  test('Featured Products section contains three product cards', () => {
    const productCards = document.querySelectorAll('.featured-products .product');
    expect(productCards.length).toBe(3);
  });

  test('The footer has the correct copyright text', () => {
    const footerText = document.querySelector('footer p').textContent;
    expect(footerText).toContain('The Legend of Zelda');
  });

  test('Button in the product section has the correct text', () => {
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
      expect(button.textContent).toBe('Buy Now');
    });
  });
});
