import { useState } from "react";
import CTASection from "../utils/CTASection";
import emailjs from "@emailjs/browser";
import Spinner from "../utils/Spinner";
import Success from "./alerts/Success";
import Error from "./alerts/Error";

const ContactForm = ({ setShowModal }) => {
  const EMAILJS_CONFIG = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Me llega un mail con todo el mensaje y se envia mail al cliente con respuesta automatica (emailsJS)
    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        EMAILJS_CONFIG.publicKey,
      );
      setIsLoading(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }
  };

  return (
    <div className="contactForm">
      {isLoading ? (
        <div className="spinnerContainer">
          <Spinner text={"enviando mensaje..."} />
        </div>
      ) : isSuccess ? (
        <Success />
      ) : isError ? (
        <Error />
      ) : (
        <form onSubmit={handleSubmit} className="contactForm">
          <fieldset>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="contame tú idea"
            ></textarea>
          </fieldset>
          <button type="submit">enviar mensaje</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
