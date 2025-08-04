import React from "react";

function Button({
  children,
  type = "text",
  bgColor = "bg-blue-500",
  textColor = "text-white",
  className = "",
  ...props
}) {
  // children is the inner text which will be displayed inside this button
  return (
    <button
      className={`px-6 py-2 rounded-lg ${className} ${textColor} ${bgColor}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
