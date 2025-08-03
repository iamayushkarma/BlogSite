import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        ref={ref}
        className={`px-3 py-2 border-2 border-gray-300 rounded-md text-[16px] text-gray-600 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 ${className}`}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
