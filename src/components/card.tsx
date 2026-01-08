import { mergeProps, useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const cardVariants = cva("rounded-2xl border-3 border-border", {
  variants: {
    variant: {
      raised: "shadow-raised",
      inset: "shadow-inset",
    },
  },
  defaultVariants: {
    variant: "raised",
  },
});

// CARD
interface cardProps
  extends useRender.ComponentProps<"div">, VariantProps<typeof cardVariants> {}

function Card(props: cardProps) {
  const { render, ...otherProps } = props;

  const mergedProps = mergeProps<"div">(
    {
      className: twMerge(
        cardVariants({
          variant: props.variant,
        }),
        props.className,
      ),
    },
    otherProps,
  );

  const element = useRender({
    defaultTagName: "div",
    render,
    props: mergedProps,
  });

  return element;
}

// CARD-HEADER
const cardHeaderVariants = cva("flex flex-col space-y-1.5 p-6");

interface cardHeaderProps
  extends
    useRender.ComponentProps<"div">,
    VariantProps<typeof cardHeaderVariants> {}

function CardHeader(props: cardHeaderProps) {
  const { render, ...otherprops } = props;

  const mergedProps = mergeProps<"div">(
    {
      className: twMerge(cardHeaderVariants()),
    },
    otherprops,
  );

  const element = useRender({
    defaultTagName: "div",
    render,
    props: mergedProps,
  });

  return element;
}

// CARD-TITLE
const cardTitleVariants = cva("font-semibold leading-none tracking-tight");

interface cardTitleProps
  extends
    useRender.ComponentProps<"div">,
    VariantProps<typeof cardTitleVariants> {}

function CardTitle(props: cardTitleProps) {
  const { render, ...otherprops } = props;

  const mergedProps = mergeProps<"div">(
    {
      className: twMerge(cardTitleVariants()),
    },
    otherprops,
  );

  const element = useRender({
    defaultTagName: "div",
    render,
    props: mergedProps,
  });

  return element;
}

// CARD-DESCRIPTION
const CardDescriptionVariants = cva("text-sm text-muted-foreground");

interface cardDescriptionProps
  extends
    useRender.ComponentProps<"div">,
    VariantProps<typeof CardDescriptionVariants> {}

function CardDescription(props: cardDescriptionProps) {
  const { render, ...otherprops } = props;

  const mergedProps = mergeProps<"div">(
    {
      className: twMerge(CardDescriptionVariants()),
    },
    otherprops,
  );

  const element = useRender({
    defaultTagName: "div",
    render,
    props: mergedProps,
  });

  return element;
}

// CARD-CONTENT
const cardContentVariants = cva("p-6 pt-0");

interface cardContentProps
  extends
    useRender.ComponentProps<"div">,
    VariantProps<typeof cardContentVariants> {}

function CardContent(props: cardContentProps) {
  const { render, ...otherProps } = props;

  const mergedProps = mergeProps<"div">(
    {
      className: cardContentVariants(),
    },
    otherProps,
  );

  const element = useRender({
    defaultTagName: "div",
    render,
    props: mergedProps,
  });

  return element;
}

// CARD-FOOTER
const cardFooterVariants = cva("p-6 pt-0");

interface cardFooterProps
  extends
    useRender.ComponentProps<"footer">,
    VariantProps<typeof cardFooterVariants> {}

function CardFooter(props: cardFooterProps) {
  const { render, ...otherProps } = props;

  const mergedProps = mergeProps<"footer">(
    {
      className: cardFooterVariants(),
    },
    otherProps,
  );

  const element = useRender({
    defaultTagName: "footer",
    render,
    props: mergedProps,
  });

  return element;
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
