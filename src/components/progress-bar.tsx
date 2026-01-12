import { mergeProps, Progress } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const progressVariants = cva(
  "relative overflow-hidden rounded-full bg-background shadow-inset focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
  {
    variants: {
      orientation: {
        horizontal: "w-full h-3",
        vertical: "h-full w-3",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  },
);

const progressIndicatorVariant = cva("rounded-full border-none", {
  variants: {
    orientation: {
      horizontal: "bg-linear-to-l",
      vertical: "bg-linear-to-t",
    },
    variant: {
      default: "from-primary to-primary/75",
      secondary: "from-muted-foreground to-muted-foreground/75",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    variant: "default",
  },
});

interface progressBarProps
  extends
    React.ComponentProps<typeof Progress.Root>,
    VariantProps<typeof progressVariants>,
    VariantProps<typeof progressIndicatorVariant> {}

function ProgressBar(props: progressBarProps) {
  const rootProps = mergeProps(props, {
    className: twMerge(progressVariants({ orientation: props.orientation })),
  });

  const { value, ...otherProps } = rootProps;

  return (
    <Progress.Root {...otherProps} value={value}>
      {/*<Progress.Label className={""}>Export data</Progress.Label>*/}
      {/*<Progress.Value className={"h-full w-full"} />*/}
      {props.children}
      <Progress.Track className={"h-full w-full"}>
        <Progress.Indicator
          className={progressIndicatorVariant({
            variant: props.variant,
            orientation: props.orientation,
          })}
          style={
            props.orientation === "vertical"
              ? {
                  height: `${props.value}%`,
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                }
              : {}
          }
        />
      </Progress.Track>
    </Progress.Root>
  );
}

export default ProgressBar;
