const CTASection = ({ text, buttonText }) => {
  return (
    <section className="ctaSection">
      <span>{text}</span>
      <button>{buttonText}</button>
    </section>
  );
};
export default CTASection;
