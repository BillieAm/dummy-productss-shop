import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { imagePath, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imagePath})` }}
      />
      <div className="category-title-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
