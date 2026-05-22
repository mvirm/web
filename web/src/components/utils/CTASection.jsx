const CTASection = ({ text, buttonText, setShowModal }) => {
  return (
    <section className="ctaSection">
      <span>{text}</span>
      <button onClick={() => setShowModal(true)}>{buttonText}</button>
    </section>
  );
};
export default CTASection;
