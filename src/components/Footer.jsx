import reactLogo from "../assets/react.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>Built with React + Vite</p>
      <img src={reactLogo} className="react-logo" alt="React logo" />
    </footer>
  );
}

export default Footer;
