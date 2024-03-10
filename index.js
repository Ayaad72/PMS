// Load product list from local storage on page load
window.onload = function() {
    var savedProductList = localStorage.getItem('productList');
    if(savedProductList) {
      var productList = JSON.parse(savedProductList);
      renderProductList(productList);
    }
  };
  
  function addProduct() {
    var productName = document.getElementById("productName").value;
    var productModel = document.getElementById("productModel").value;
    if (productName && productModel) {
      var product = {
        name: productName,
        model: productModel
      };
      
      // Retrieve existing product list from local storage
      var productList = localStorage.getItem('productList');
      productList = productList ? JSON.parse(productList) : [];
      
      // Add new product to the array
      productList.push(product);
      
      // Save updated product list to local storage
      localStorage.setItem('productList', JSON.stringify(productList));
      
      // Render updated product list
      renderProductList(productList);
      
      // Clear input fields
      document.getElementById("productName").value = "";
      document.getElementById("productModel").value = "";
    } else {
      alert("Please enter product details.");
    }
  }
  
  function renderProductList(productList) {
    var productListContainer = document.getElementById("productList");
    productListContainer.innerHTML = "";
    productList.forEach(function(product, index) {
      var newRow = productListContainer.insertRow();
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      cell1.textContent = product.name;
      cell2.textContent = product.model;
      cell3.innerHTML = '<button class="edit" onclick="editProduct(' + index + ')">Edit</button><button class="remove" onclick="removeProduct(' + index + ')">Remove</button>';
    });
  }
  
  function editProduct(index) {
    // Retrieve product list from local storage
    var productList = JSON.parse(localStorage.getItem('productList'));
    
    // Retrieve product details at the specified index
    var product = productList[index];
    
    // Set input fields with product details
    document.getElementById("productName").value = product.name;
    document.getElementById("productModel").value = product.model;
    
    // Remove product from array
    productList.splice(index, 1);
    
    // Save updated product list to local storage
    localStorage.setItem('productList', JSON.stringify(productList));
    
    // Render updated product list
    renderProductList(productList);
  }
  
  function removeProduct(index) {
    // Retrieve product list from local storage
    var productList = JSON.parse(localStorage.getItem('productList'));
    
    // Remove product at the specified index
    productList.splice(index, 1);
    
    // Save updated product list to local storage
    localStorage.setItem('productList', JSON.stringify(productList));
    
    // Render updated product list
    renderProductList(productList);
  }
  
