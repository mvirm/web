const ButtonCTA = ({ setShowModal }) => {
  return (
    <button className="button-hero" onClick={() => setShowModal(true)}>
      contame tu idea
    </button>
  );
};

export default ButtonCTA;
