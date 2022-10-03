import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <div className="product-container">
      <img src={imageUrl} alt={name} />
      <div className="product-details">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
