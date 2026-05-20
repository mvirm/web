import close from "../../assets/icons/close.svg";
import title from "../../assets/titles/form.svg";
import ContactForm from "./ContactForm";

const FormModal = () => {
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  return (
    <div className="open-modal">
      <div className="borderModal">
        <div className="modal">
          <header>
            <button>
              <img src={close} alt="Cerrar" />
            </button>
            <img src={title} alt="Formulario" />
            <span>Vemos juntos como llevarla a la realidad</span>
          </header>
          <section>
            <ContactForm />
          </section>
          <span>
            o escribime por{" "}
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar WhatsApp"
            >
              whatsapp
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
