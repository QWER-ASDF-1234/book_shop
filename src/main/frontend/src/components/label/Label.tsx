import { cn } from "@/lib/utils";
import { type LabelHTMLAttributes } from "react";

export interface LabelVariants {
  /** The size of the label. */
  size?: "small" | "medium" | "large";
  labelPosition?: "left" | "top";
}

export interface LabelProps
  extends
    Omit<LabelHTMLAttributes<HTMLLabelElement>, "htmlFor">,
    Required<Pick<LabelHTMLAttributes<HTMLLabelElement>, "htmlFor">>,
    LabelVariants {}

const Label = ({
  size = "medium",
  className,
  htmlFor,
  labelPosition = "top",
  ...rest
}: LabelProps) => {
  const sizeClassFilter = () => {
    const sizeLowerCase = size.toLocaleLowerCase();
    if (sizeLowerCase === "large") return "text-lg";
    if (sizeLowerCase === "medium") return "text-sm";
    if (sizeLowerCase === "small") {
      if (labelPosition === "top") return "text-[10px]";
      return "text-xs";
    }
    return "";
  };
  return (
    <label
      className={cn(
        "font-medium leading-none transition-colors duration-300 ease-in-out peer-disabled:opacity-70",
        sizeClassFilter(),
        className
      )}
      htmlFor={htmlFor}
      {...rest}
    />
  );
};

export default Label;
