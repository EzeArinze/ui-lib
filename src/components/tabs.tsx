import { mergeProps, Tabs } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const tabsVariants = cva("w-full");

interface tabsProps
  extends
    React.ComponentProps<typeof Tabs.Root>,
    VariantProps<typeof tabsVariants> {}

function NueTabs(props: tabsProps) {
  const rootProps = mergeProps(props, {
    className: twMerge(tabsVariants()),
  });

  return (
    <Tabs.Root {...rootProps}>
      {props.children}
      {/*<Tabs.Indicator />*/}
    </Tabs.Root>
  );
}

// TABS-LIST
const tabsListVariants = cva(
  "relative inline-flex items-center justify-around gap-4 min-w-full h-12 rounded-2xl bg-linear-to-tl from-background to-highlight/75 p-1 text-muted-foreground shadow-raised border-3 border-border",
);

interface tabsListProps
  extends
    React.ComponentProps<typeof Tabs.List>,
    VariantProps<typeof tabsListVariants> {}

function TabsList(props: tabsListProps) {
  const tabsListPropsMerged = mergeProps(props, {
    className: twMerge(tabsListVariants()),
  });

  return <Tabs.List {...tabsListPropsMerged}>{props.children}</Tabs.List>;
}

// TABS
const tabsTabVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disable:pointer-event-none disabled:opacity-50 data-[active]:bg-background data-[active]:text-foreground data-[active]:shadow-inset data-[active]:h-8  cursor-pointer hover:text-foreground duration-350 relative z-10",
);

interface tabsTabsProps
  extends
    React.ComponentProps<typeof Tabs.Tab>,
    VariantProps<typeof tabsTabVariants> {}

function Tab(props: tabsTabsProps) {
  const { value, ...otherProps } = props;

  const tabsTabPropMerged = mergeProps(otherProps, {
    className: twMerge(tabsTabVariants()),
  });

  return <Tabs.Tab {...tabsTabPropMerged} value={value} />;
}

// TABS-INDICATOR
const tabsIndicatorVariants = cva(
  "absolute rounded-sm bg-background shadow-raised transition-all duration-200 border-1 border-background",
);

interface tabsIndicatorProps
  extends
    React.ComponentProps<typeof Tabs.Indicator>,
    VariantProps<typeof tabsIndicatorVariants> {}

function TabsIndicator(props: tabsIndicatorProps) {
  const tabsIndcatorPropsMerged = mergeProps(props, {
    className: twMerge(tabsIndicatorVariants()),
  });

  return <Tabs.Indicator {...tabsIndcatorPropsMerged} />;
}

const tabsPanelsVariants = cva(
  "relative flex items-center justify-center mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
);

interface tabsPanelsProps
  extends
    React.ComponentProps<typeof Tabs.Panel>,
    VariantProps<typeof tabsPanelsVariants> {}

function TabsPanels(props: tabsPanelsProps) {
  const { value, ...otherProps } = props;

  const tabsPanelsPropsMerged = mergeProps(otherProps, {
    className: twMerge(tabsPanelsVariants()),
  });

  return (
    <Tabs.Panel {...tabsPanelsPropsMerged} value={value}>
      {otherProps.children}
    </Tabs.Panel>
  );
}

export { NueTabs, TabsList, Tab, TabsIndicator, TabsPanels };
