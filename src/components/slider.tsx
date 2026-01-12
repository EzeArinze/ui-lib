import { mergeProps, Slider } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const sliderVariants = cva("items-center h-4 w-full rounded-sm cursor-pointer");

const trackVariants = cva("relative w-full rounded-full shadow-inset h-3");

const indicatorVariants = cva("absolute h-full rounded-full", {
  variants: {
    variant: {
      default: "bg-linear-to-l from-primary to-primary/75",
      secondary: "bg-linear-to-l from-muted-foreground to-muted-foreground/75",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const thumbVariants = cva(
  "rounded-full border-1 border-highlight bg-background h-5 w-5 shadow-inset active:shadow-raised duration-350 transition-shadow ease-out ",
);

const controlVariants = cva("relative");

interface sliderProps
  extends
    React.ComponentProps<typeof Slider.Root>,
    VariantProps<typeof indicatorVariants> {}

function NueSlider(props: sliderProps) {
  const rootProps = mergeProps(props, {
    className: twMerge(sliderVariants()),
  });

  const otherProps = {
    thumbClassName: thumbVariants(),
    trackClassName: trackVariants({ className: props.className }),
    indicatorClassName: twMerge(indicatorVariants({ variant: props.variant })),
    controlClassName: controlVariants(),
  };

  return (
    <Slider.Root {...rootProps}>
      <Slider.Control className={otherProps.controlClassName}>
        <Slider.Track className={otherProps.trackClassName}>
          <Slider.Indicator className={otherProps.indicatorClassName} />
          <Slider.Thumb className={otherProps.thumbClassName} />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  );
}

export default NueSlider;
