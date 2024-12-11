// Function to save item to localStorage
function saveItem(name, price, desc) {
  let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
  savedItems.push({ name, price, desc });
  localStorage.setItem('savedItems', JSON.stringify(savedItems));
  alert('Item saved!');
}

// Display saved items
window.addEventListener('load', function() {
  const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
  const savedItemsList = document.getElementById('savedItemsList');

  savedItems.forEach(item => {
      const savedItemElement = document.createElement('div');
      savedItemElement.classList.add('item');
      savedItemElement.innerHTML = `
          <h3>${item.name}</h3>
          <p>Price: $${item.price}</p>
          <p>${item.desc}</p>
      `;
      savedItemsList.appendChild(savedItemElement);
  });
});