fetch("../products.json")
  .then((res) => res.json())
  .then((products) => {
    const container = document.getElementById("productContainer");
    if (!container) return;

    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>Weight:</strong> ${product.weight}</p>
        <p><strong>Price:</strong> ₹${product.price}</p>
      `;
      container.appendChild(card);
    });
  });
