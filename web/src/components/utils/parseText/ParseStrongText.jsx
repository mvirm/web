const ParseStrongText = (text) => {
  return text.split(/(\*.*?\*)/g).map((part, index) => {
    // si el fragmento está entre *
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <span key={index} className="font-bold text-text-strong">
          {part.slice(1, -1)}
        </span>
      );
    }
    return part;
  });
};

export default ParseStrongText;
