import error from "../../../assets/icons/error.svg";
const Error = () => {
  return (
    <div className="alert">
      <h2>¡Error!</h2>
      <img src={error} alt="Error" />
      <p>Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</p>
    </div>
  );
};

export default Error;
