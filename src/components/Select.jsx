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

const SelectOptions = function (
  { options, label, className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {/* {label && <SelectLabel htmlFor={id} className=""></SelectLabel>} */}
      <Select id={id} ref={ref} className={``} {...props}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option) => (
            <SelectGroup>
              {/* <SelectLabel>{label}</SelectLabel> */}
              {label && <SelectLabel htmlFor={id} className=""></SelectLabel>}
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default React.forwardRef(SelectOptions);
