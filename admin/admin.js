document.getElementById('productForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const description = document.getElementById('description').value.trim();
  const price = parseFloat(document.getElementById('price').value);

  if (!name || !description || isNaN(price)) {
    alert("❌ Please fill all fields correctly.");
    return;
  }

  const product = { name, description, price };
  const json = JSON.stringify(product, null, 2);

  document.getElementById('output').textContent = json;

  alert("✅ Product JSON generated. Copy it and paste into products.json manually.");
  document.getElementById('productForm').reset();
});
