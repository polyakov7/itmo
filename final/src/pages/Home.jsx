import { useState, useEffect } from "react";
import VSelect from "../components/VSelect";
import ProductCard from "../components/ProductCard";
 import { data as initialData } from "/variables";

const Home = () => {
  const [data, setData] = useState(initialData);
  const [cart, setCart] = useState([]);
  const [categories] = useState([
    { c_id: 1, category: "Смартфоны" },
    { c_id: 2, category: "Ноутбуки" },
    { c_id: 3, category: "Телевизоры" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (err) {
        setCart([]);
      }
    }
  }, []);
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    console.log(data)
    console.log(selectedCategory)

    console.log("Выбранная категория:", categoryId);
    console.log(computedData)
  };

  const computedData = selectedCategory
    ? data.filter((item) => item.c_id === parseInt(selectedCategory))
    : data;

  const addCart = (product_id) => {
    const result = data.find((elem) => elem.id === product_id);
    if (!result) return;
    
    setCart((prevCart) => {
      const exist = prevCart.find((elem) => elem.id === product_id);
      let updatedCart;
      
      if (exist) {
        updatedCart = prevCart.map((elem) =>
          elem.id === product_id ? { ...elem, count: elem.count + 1 } : elem
        );
      } else {
        updatedCart = [...prevCart, { ...result, count: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert(`${result.title} Успешно добавлен в корзину!`);
      return updatedCart;
    });
  };

  return (
    <div>
        <div className="container">
      {/* <QuickSearch /> */}
      <div>
        <VSelect 
        categories={categories} 
        dat={data} 
        onSelected={setSelectedCategory}
        onChange={handleCategoryChange} />
      </div>
      <div className="product_list">
        {computedData.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
            id={item.id}
            add={() => addCart(item.id)}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;