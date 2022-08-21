import "../categories.styles.scss";

const Home = () => {
  const categories = [
    { id: 1, title: "Category 1" },
    { id: 2, title: "Category 2" },
    { id: 3, title: "Category 3" },
    { id: 4, title: "Category 4" },
    { id: 5, title: "Category 5" },
  ];
  return (
    <main className="categories-container">
      {categories.map(({ id, title }) => (
        <div key={id} className="category-container">
          {/* <img /> */}
          <div className="category-title-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Home;
