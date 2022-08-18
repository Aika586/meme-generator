import Photo from "../Troll Face.png";

const Header = () => {
  return (
    <header>
      <img src={Photo} alt="troll-face" className="troll-face" />
      <h2 className="title">Meme Generator</h2>
      <h4 className="h-project">React Course-Project 3</h4>
    </header>
  );
};

export default Header;
