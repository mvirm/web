import footerMobile from "../../assets/background/mobile/footer.svg";
import footerDesktop from "../../assets/background/tabletDesktop/footer.svg";
import wsp from "../../assets/icons/wsp.svg";
import email from "../../assets/icons/email.svg";

const Footer = ({ setShowModal }) => {
  return (
    <footer className="footer">
      <picture>
        <source media="(min-width: 768px)" srcSet={footerDesktop} />
        <img src={footerMobile} alt="" />
      </picture>
      <div className="footerContent">
        <section>
          <div>
            <img src={wsp} alt="whatsapp" />
            <a
              href="https://wa.me/5491134323534"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar WhatsApp"
            >
              WHATSAPP
            </a>
          </div>
          <div onClick={() => setShowModal(true)} style={{ cursor: "pointer" }}>
            <img src={email} alt="email" />
            <h6>CONTACTO</h6>
          </div>
        </section>
        <p>© 2026 Virginia Montoya Web Site. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
