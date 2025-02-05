import { url } from "/variables";

const ProductCard = ({ id, img, title, price, add }) => {
  return (
    <div className="card">
      <img src={url + img} alt="" />
      <h5>{title}</h5>
      <h4>{price}</h4>
      <button onClick={() => add(id)}>Купить</button>
    </div>
  );
};

export default ProductCard;