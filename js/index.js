//Object Oriented Programming
import Cart from "../models/Cart.js";
import Products from "../models/Products.js";
import { fetchData } from "../utils/httpReq.js";
const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cart-list");
const totalPriceNode = document
  .getElementById("total-price")
  .querySelector("span");
// GET data
const render = async () => {
  const productsData = await fetchData();
  const cartInstance = new Cart(cartListNode, totalPriceNode);
  const productsInstancs = new Products(
    productsNode,
    productsData,
    cartInstance
  );
  //show cards
  productsInstancs.showProducts();
};

// after load DOM || HTML
document.addEventListener("DOMContentLoaded", render);
