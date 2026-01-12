import { Checkbox, mergeProps } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

const checkBoxVariants = cva(
  "relative inline-flex items-center size-5 shrink-0 rounded-sm border-1 border-highlight bg-background shadow-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 cursor-pointer data-[checked]:bg-linear-to-tl data-[checked]:from-primary/5 data-[checked]:to-primary/25 data-[checked]:shadow-raised data-[checked]:border-primary/50 disabled:opacity-50 duration transition-all ease-out",
);

const checkBoxIndicatorVariants = cva(
  " absolute top-1/2 left-1/2 -translate-1/2 size-5 flex items-center justify-center",
);

interface checkBoxProps
  extends Checkbox.Root.Props, VariantProps<typeof checkBoxVariants> {}

function CheckBox(props: checkBoxProps) {
  const rootProps = mergeProps(props, {
    className: twMerge(checkBoxVariants()),
  });

  const indicatorProps = {
    className: twMerge(checkBoxIndicatorVariants()),
  };

  return (
    <Checkbox.Root aria-label="check-box" {...rootProps}>
      <Checkbox.Indicator {...indicatorProps}>
        <CheckIcon className={"size-3 text-primary "} />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
}

export default CheckBox;
