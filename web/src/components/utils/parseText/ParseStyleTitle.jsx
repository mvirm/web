const ParseStyledTitle = (title) => {
  return title.split(/(\*.*?\*|\^.*?\^)/g).map((part, index) => {
    // *texto*
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <span
          key={index}
          className="text-orange font-subtitle font-bold text-2xl lg:text-3xl"
        >
          {part.slice(1, -1)}
        </span>
      );
    }

    // ^texto^
    if (part.startsWith("^") && part.endsWith("^")) {
      return (
        <span
          key={index}
          className="text-magenta-dark md:text-magenta font-bold text-xl lg:text-2xl"
        >
          {part.slice(1, -1)}
        </span>
      );
    }

    // texto normal
    return part;
  });
};

export default ParseStyledTitle;
