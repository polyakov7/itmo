import { useState, useEffect } from "react";
import ProductCardDelete from "../components/ProductCardDelete";

const Cart = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCarts(JSON.parse(storedCart));
      }
    } catch (err) {
      setCarts([]);
    }
  }, []);

  const delCart = (id) => {
    setCarts((prevCarts) => {
      const updatedCarts = prevCarts.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCarts));
      return updatedCarts;
    });
  };

  return (
    <div className="container">
      <h1>Корзина</h1>
      <div className="allcard">
        {carts.map((item) => (
          <ProductCardDelete
            key={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
            id={item.id}
            del={() => delCart(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;

