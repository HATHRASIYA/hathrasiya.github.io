
function showOrderForm() {
  document.getElementById('order-form').style.display = 'block';
  window.scrollTo(0, document.body.scrollHeight);
}

function submitOrder() {
  const address = document.getElementById('address').value;
  if (!address.trim()) {
    alert('Please enter a delivery address.');
    return;
  }

  // Hide form, show thank-you message
  document.getElementById('order-form').style.display = 'none';
  document.getElementById('thank-you').style.display = 'block';

  // Optional: send to WhatsApp
  const phoneNumber = "918755666903";
  const message = encodeURIComponent(`Order placed for Hathrasiya Hing (10 GM)\nDelivery Address:\n${address}`);
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}
