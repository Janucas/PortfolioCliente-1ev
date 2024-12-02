import "./Footer.css";

//Montaje del navbar
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Designed byJuan Antonio Núñez Castaño. All rights reserved.</p>
        <p>Hope you like it 😎</p>
        
      </div>
    </footer>
  );
};

export default Footer;
