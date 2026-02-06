import { cn } from "@/lib/utils";
import {
  type ForwardedRef,
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  useId,
} from "react";
import Label from "../label/Label";

export interface InputVariants {
  disabled?: boolean;
  endAdornment?: boolean;
  /** If true, the input will display an error state. */
  error?: boolean;
  /** The size of the input. */
  size?: "medium" | "large";
  startAdornment?: boolean;
}

export interface InputProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    Omit<InputVariants, "startAdornment" | "endAdornment"> {
  /** A custom className for the container. */
  containerClassName?: string;
  /** If true, the input will be disabled. */
  disabled?: boolean;
  /** An end adornment to display on the right side of the input. */
  endAdornment?: ReactNode;
  /** A helper text to display below the input. */
  helperText?: string;
  /** The label text to display above the input. */
  label?: string;
  /** 라벨 포지션 */
  labelPosition?: "left" | "top";
  /** The placeholder text to display in the input. */
  placeholder?: string;
  /** A start adornment to display on the left side of the input. */
  startAdornment?: ReactNode;
  /** Input Container 길이 */
  inputWidth?: number;
}

const AppInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "medium",
      error = false,
      disabled = false,
      className,
      containerClassName,
      label,
      labelPosition = "top",
      startAdornment,
      endAdornment,
      helperText,
      inputWidth,
      ...rest
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const inputId = useId();
    const helperTextId = useId();
    const sizeClassFilter = () => {
      const sizeLowerCase = size.toLocaleLowerCase();
      if (sizeLowerCase === "large") return "py-2.5";
      if (sizeLowerCase === "medium") return "py-2";
      return "";
    };

    return (
      <div
        className={cn(
          "z-0 inline-flex min-w-[100px] flex-col items-start gap-1.5 stroke-black transition-colors duration-300 ease-in-out",
          "focus-within:stroke-blue-700",
          error && "stroke-red-500 focus-within:stroke-red-500",
          disabled && "stroke-slate-400 text-slate-400",
          labelPosition === "left" ? "flex-row items-center" : "",
          containerClassName
        )}
      >
        {label && (
          <Label
            htmlFor={rest.id ?? inputId}
            size="small"
            className={cn(
              "whitespace-nowrap",
              labelPosition === "left" ? "mr-[8px]" : "",
              disabled ? "text-slate-400" : "text-black"
            )}
          >
            {label}
          </Label>
        )}
        <div className="relative w-full">
          {startAdornment && (
            <div className="pointer-events-none absolute left-6 top-1/2 w-5 -translate-x-1/2 -translate-y-1/2">
              {startAdornment}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              "w-full rounded-lg border border-slate-400 px-3 text-sm font-medium placeholder-slate-400 outline-none transition-all duration-300 ease-in-out",
              "disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 disabled:placeholder-slate-400",
              "focus:border-blue-600",
              sizeClassFilter(),
              error &&
                "border-red-500 text-red-500 ring-1 ring-red-500 focus:border-red-500 focus:text-black focus:ring-red-500 focus:ring-offset-0",
              startAdornment && "pl-10",
              endAdornment && "pr-10",
              helperText && "mb-0.5",
              className
            )}
            disabled={disabled}
            aria-disabled={disabled}
            aria-describedby={helperText ? helperTextId : undefined}
            id={rest.id ?? inputId}
            {...rest}
          />
          {endAdornment && (
            <div className="absolute right-0 top-1/2 w-5 -translate-x-1/2 -translate-y-1/2">
              {endAdornment}
            </div>
          )}
        </div>
        {helperText && (
          <p
            id={helperTextId}
            className={cn(
              "max-w-full text-xs font-medium leading-none text-slate-500 transition-colors duration-300 ease-in-out",
              error && "text-red-500"
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

AppInput.displayName = "Input";

export { AppInput };
