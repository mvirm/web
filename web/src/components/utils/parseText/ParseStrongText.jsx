const ParseStrongText = (text) => {
  return text.split(/(\*.*?\*|-.*?-)/g).map((part, index) => {
    // texto entre *
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <span key={index} className="font-bold text-text-strong">
          {part.slice(1, -1)}
        </span>
      );
    }

    // texto entre -
    if (part.startsWith("-") && part.endsWith("-")) {
      return (
        <span key={index} className="text-title">
          {part.slice(1, -1)}
        </span>
      );
    }

    return part;
  });
};

export default ParseStrongText;
