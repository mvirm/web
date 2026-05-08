const ParseLigthText = (text) => {
  return text.split(/(\(.*?\))/g).map((part, index) => {
    // si el fragmento está entre ()
    if (part.startsWith("(") && part.endsWith(")")) {
      return (
        <span
          key={index}
          className="font-extralight text-ink text-sm lg:text-base"
        >
          {part.slice(1, -1)}
        </span>
      );
    }
    return part;
  });
};
export default ParseLigthText;
