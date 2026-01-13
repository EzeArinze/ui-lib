import { mergeProps, useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const inputVariants = cva(
  "flex w-full rounded-md border-1 border-highlight bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground shadow-inset disabled:opacity-50",
);

interface inputProps
  extends
    useRender.ComponentProps<"input">,
    VariantProps<typeof inputVariants> {}

function Input(props: inputProps) {
  const { render, type, ...otherProps } = props;

  const inputMerge = mergeProps<"input">(otherProps, {
    className: twMerge(inputVariants()),
    type,
  });

  const element = useRender({
    defaultTagName: "input",
    render,
    props: inputMerge,
  });

  return element;
}

export default Input;
