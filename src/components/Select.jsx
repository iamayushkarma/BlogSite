// import React, { useId } from "react";

// function Select({ options, label, className = "", ...props }, ref) {
//   const id = useId;
//   return (
//     <div className="w-full">
//       {label && <label htmlFor={id} className=""></label>}
//       <select id={id} ref={ref} className={``} {...props}></select>
//     </div>
//   );
// }

// export default Select;
import React, { useId } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectOptions = React.forwardRef(function SelectOptions(
  { options, label, className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium mb-2">{label}</label>}
      <Select id={id} ref={ref} className={className} {...props}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options?.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
});
export default SelectOptions;
