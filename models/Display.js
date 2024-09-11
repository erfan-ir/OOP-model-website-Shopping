class Display {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
    this.parent.addEventListener("click", this);
  }
  showProducts() {
    this.toShow = [...new Set(this.products)];
    this.parent.innerHTML = "";
    this.toShow.forEach((product) => {
      const qty = this.products.filter((p) => p.id === product.id).length;
      this.createCard(product, qty);
    });
    this.calculatorTotalPrice();
  }
  createCard(data, qty) {
    const cartEle = document.createElement("div");
    const imgEle = this.productImg(data);
    const infoEle = this.productInfo(data);
    cartEle.innerHTML = imgEle;
    cartEle.innerHTML += infoEle;
    if (this.constructor.name === "Cart") {
      const controlEle = this.productControl(data, qty);
      cartEle.innerHTML += controlEle;
    }
    this.parent.appendChild(cartEle);
  }
  productImg(data) {
    const { image, alt } = data;
    const imgJSX = `<img src="${image}" alt="${alt}" />`;
    return imgJSX;
  }
}

export default Display;
