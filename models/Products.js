import Display from "./Display.js";

// products class for cart
class Products extends Display {
  constructor(parent, products, cart) {
    super(parent, products);
    this.cart = cart;
  }

  showProducts() {
    this.products.forEach((product) => this.createCard(product));
  }

  //USE JSX :) for convenience ;)
  productInfo(data) {
    const { id, price, name } = data;
    const information = `<div id="product-info">
        <h3>${name}</h3>
        <div>
            <span>${price} تومان</span>
            <button data-id="${id}">+</button>
        </div>
    </div>
    `;

    return information;
  }

  // handle event
  handleEvent() {
    const element = event.target;
    if (element.tagName === "BUTTON") {
      this.addToCart(element.dataset.id);
    }
  }
  addToCart(id) {
    const product = this.products.find((i) => i.id === +id);
    this.cart.products.push(product);
    this.cart.showProducts();
  }
}
export default Products;
