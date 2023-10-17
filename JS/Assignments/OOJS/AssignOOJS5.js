// Product constructor function
function Product(name, category, price, stock) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
  }
  
  // Inventory 
  function Inventory() {
    this.products = [];
  }
  
  // add
  Inventory.prototype.addProduct = function (product) {
    if (product instanceof Product) {
      this.products.push(product);
      console.log(`Product "${product.name}" added to the inventory.`);
    } else {
      console.error('Invalid product. Please provide a valid Product object.');
    }
  };
  
  // delete
  Inventory.prototype.deleteProduct = function (productName) {
    const index = this.products.findIndex((product) => product.name === productName);
  
    if (index !== -1) {
      this.products.splice(index, 1);
      console.log(`Product "${productName}" deleted from the inventory.`);
    } else {
      console.error(`Product "${productName}" not found in the inventory.`);
    }
  };
  
  // Usage example
  const inventory = new Inventory();
  
  const product1 = new Product('Widget', 'Electronics', 19.99, 100);
  const product2 = new Product('Gadget', 'Electronics', 29.99, 50);
  
  inventory.addProduct(product1);
  inventory.addProduct(product2);
  
  console.log('Current Inventory:');
  console.log(inventory.products);
  
  inventory.deleteProduct('Widget');
  console.log('Updated Inventory:');
  console.log(inventory.products);

  