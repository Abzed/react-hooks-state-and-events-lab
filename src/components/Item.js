import React, {useState} from "react";

function Item({ name, category }) {
  const [toCart, setToCart] = useState(false)

  function handleCart(){
    setToCart(toCart => !toCart)
  }

  return (
    <li className={toCart? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className={toCart? "remove" : "add"}>
      {toCart? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
