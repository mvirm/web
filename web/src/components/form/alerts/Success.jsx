import success from "../../../assets/icons/success.svg";
const Success = () => {
  return (
    <div className="alert">
      <h2>¡Gracias por tu mensaje!</h2>
      <img src={success} alt="Éxito" />
      <p>Nos pondremos en contacto contigo lo antes posible.</p>
    </div>
  );
};

export default Success;
