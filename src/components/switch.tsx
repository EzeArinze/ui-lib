import { mergeProps, Switch } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const neuSwitchVariants = cva(
  "relative inline-flex items-center cursor-pointer h-5.5 w-12 rounded-full shadow-inset transition-colors focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-2 focus-visible:ring-foreground bg-background data-[checked]:bg-primary border-1 border-highlight data-[checked]:border-primary",
);

const neuSwitchThumbVariant = cva(
  "size-5 bg-background shadow-inset translate-x-0 data-[checked]:translate-x-6.5 rounded-full ease-out transition-all duration-350 border-1 border-highlight after:w-1 after:h-1 after:absolute after:top-1/2 after:left-1/2 after:-translate-1/2 after:bg-muted-foreground after:rounded-full data-[checked]:after:bg-primary",
);

interface NeuSwitchProps
  extends Switch.Root.Props, VariantProps<typeof neuSwitchVariants> {}

function NueSwitch(props: NeuSwitchProps) {
  const rootProps = mergeProps(props, {
    className: twMerge(neuSwitchVariants()),
  });

  const thumbProps = {
    className: neuSwitchThumbVariant(),
  };

  return (
    <Switch.Root {...rootProps}>
      <Switch.Thumb {...thumbProps} />
    </Switch.Root>
  );
}

export default NueSwitch;
