
//for bidding
function placeBid(itemId, currentBid) {
  const bidInput = document.getElementById(`bidInput${itemId}`);
  const newBid = parseFloat(bidInput.value);

  if (newBid > currentBid) {
      document.getElementById(`bid${itemId}`).innerText = newBid;
      alert('Bid placed successfully!');
  } else {
      alert('Bid must be higher than the current bid.');
  }
}

 // Search Functionality
 function search() {
 let input = document.getElementById('search-input').value.toLowerCase();
 let auctionItems = document.getElementsByClassName('auction-item');
  
      // Loop through the auction items and hide those that don't match the search 
 input
 for (let i = 0; i < auctionItems.length; i++) {
  let item = auctionItems[i];
   let itemName = item.getElementsByTagName('h3')
    [0].textContent.toLowerCase();
          
      if (itemName.indexOf(input) > -1) {
             item.style.display = '';  // Show item
          } else {
            item.style.display = 'none';  // Hide item
          }
   }        
}

// Function to filter products based on the selected category
function filterProducts() {
  const category = document.getElementById('category').value;
  const products = document.querySelectorAll('.auction-item');  // Get all product divs

  products.forEach(product => {
      // Get the category of each product from the data-category attribute
      const productCategory = product.getAttribute('data-category');

      // If the selected category is 'all' or the product matches the selected category
      if (category === 'all' || productCategory === category) {
          product.style.display = 'block';  // Show the product
      } else {
          product.style.display = 'none';  // Hide the product
      }
  });
}



