import { url } from "/variables";

const ProductCardDelete = ({ id, img, title, price, del }) => {
  return (
    <div className="card">
      <img src={url + img} alt="" />
      <h5>{title}</h5>
      <h4>{price}</h4>
      <button onClick={() => del(id)}>Удалить</button>
    </div>
  );
};

export default ProductCardDelete;

