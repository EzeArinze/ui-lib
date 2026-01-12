import { mergeProps, useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border-2 border-background px-2.5 py-0.5 text-sm font-semibold transition-all duration-200 focus:ring-ring focus:ring-2 focus:ring-offset-2 focus-visible:outline-none",
  {
    variants: {
      variant: {
        default: "bg-muted shadow-raised text-foreground hover:shadow-inset",
        primary:
          "bg-linear-to-tl from-primary/5 to-primary/25 text-primary shadow-raised hover:shadow-inset",
        destructive:
          "bg-linear-to-tl text-destructive from-destructive/5 to-destructive/25 shadow-raised hover:shadow-inset",
        warning:
          "bg-linear-to-tl text-warning from-warning/5 to-warning/25 shadow-raised hover:shadow-inset",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface badgeProps
  extends useRender.ComponentProps<"div">, VariantProps<typeof badgeVariants> {}

function Badge(props: badgeProps) {
  const { render, variant, className, ...otherProps } = props;

  const mainProps = mergeProps<"div">(otherProps, {
    className: badgeVariants({ variant, className }),
  });

  const element = useRender({
    defaultTagName: "div",
    render,
    props: mainProps,
  });

  return element;
}

export default Badge;
