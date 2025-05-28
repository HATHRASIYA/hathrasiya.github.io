document.getElementById("uploadForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const product = {
    name: formData.get("name"),
    price: parseFloat(formData.get("price")),
    weight: formData.get("weight"),
    description: formData.get("description"),
    image: formData.get("image"),
  };

  // Load existing products
  fetch("../products.json")
    .then((res) => res.json())
    .then((products) => {
      products.push(product);

      // Uploading new list
      fetch("../products.json", {
        method: "PUT", // Will not work directly on GitHub, only on backend
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(products, null, 2),
      }).then(() => {
        alert("Product added (Note: This only works with real backend)");
      });
    });
});
