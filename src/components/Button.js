function Button({
  displayText,
  url,
  theme,
  width,
  onClick,
  noPadding,
  extraClasses,
  extraClasses4Button,
}) {
  // Determine the background, text, and border colors based on the theme
  const buttonBgColor =
    theme === "dark"
      ? "bg-blue-900"
      : theme === "transparent"
        ? "bg-transparent"
        : "bg-white";

  const buttonTextColor =
    theme === "dark"
      ? "text-white"
      : theme === "transparent"
        ? "text-black"
        : "text-black";

  const buttonBorderColor =
    theme === "dark"
      ? "border-black hover:border-white"
      : theme === "transparent"
        ? "border-none"
        : "border-white hover:border-black";

  return (
    <button
      className={`p-[1px] ${buttonBgColor} w-${width} ${extraClasses4Button}`}
      onClick={onClick}
    >
      <a
        href={url}
        className={`uppercase tracking-widest border-solid border ${buttonBorderColor} ${buttonTextColor} w-${width} text-sm max-sm:text-xs ${noPadding ? "p-0" : "p-4"} g-font-3 inline-block ${extraClasses}`}
      >
        {displayText}
      </a>
    </button>
  );
}

export default Button;
