import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Category 1",
      imagePath: "/img/img1.jpg",
    },
    {
      id: 2,
      title: "Category 2",
      imagePath: "/img/img2.jpg",
    },
    {
      id: 3,
      title: "Category 3",
      imagePath: "/img/img3.jpg",
    },
    {
      id: 4,
      title: "Category 4",
      imagePath: "/img/img4.jpg",
    },
    {
      id: 5,
      title: "Category 5",
      imagePath: "/img/img5.jpg",
    },
    {
      id: 6,
      title: "Category 6",
      imagePath: "/img/img2.jpg",
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;
