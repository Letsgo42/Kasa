import "./Footer.scss";

function Footer() {
  return (
    <footer className="Footer">
      <img
        className="Footer__logo"
        src="/images/logo.svg"
        alt="logo Kasa noir et blanc"
      />
      <p className="Footer__signature">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
