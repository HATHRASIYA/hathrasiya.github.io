document.addEventListener("DOMContentLoaded", () => {
  fetch('products.json')
    .then(response => response.json())
    .then(products => {
      const container = document.querySelector('.products');
      products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <strong>₹${product.price}</strong>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Failed to load products:", err);
      document.querySelector('.products').innerHTML = "<p>Error loading products. Please try again later.</p>";
    });
});
