import Card from "../components/Cards";
import Button from "../components/Button";
import TitleDescr from "../components/TitleDescr";

const Homepage = () => {
  const title = "Seamless Global Relations & Diversification Made Easy";

  const description =
    "Expert consulting for stress-free international moves and global opportunities";

  return (
    <main>
      <TitleDescr title={title} descripton={description}></TitleDescr>
      <Button type="primary">Get Started</Button>
      <Card></Card>
    </main>
  );
};

export default Homepage;
