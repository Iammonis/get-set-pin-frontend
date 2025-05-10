import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TextVariant = keyof typeof textVariants;

type ValidHtmlTags =
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "blockquote"
  | "code"
  | "figcaption" // For caption
  | "label"
  | "button";

type TypographyProps = {
  type?: TextVariant;
  children: ReactNode;
  className?: string;
};

const textVariants = {
  default: "text-sm",
  p: "text-base leading-7 text-current-font-size tracking-tight",
  text: "text-sm text-current-font-size tracking-tight",
  h1: "text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl",
  h2: "text-2xl font-bold leading-snug tracking-tight md:text-3xl lg:text-4xl",
  h3: "text-xl font-semibold leading-snug tracking-tight md:text-2xl lg:text-3xl",
  h4: "text-lg font-semibold leading-normal tracking-tight md:text-xl lg:text-2xl",
  h5: "text-md font-semibold leading-normal tracking-tight md:text-lg lg:text-xl",
  h6: "text-md font-semibold tracking-tight md:text-lg lg:text-xl",
  span: "text-sm",
  blockquote: "border-l-4 border-gray-300 pl-4 italic",
  code: "font-mono text-sm bg-gray-100 px-1 rounded",
  caption: "text-xs",
  label: "text-sm font-medium",
  button: "text-sm font-medium uppercase tracking-tight",
} as const;

const variantToTag: Record<TextVariant, ValidHtmlTags> = {
  default: "p",
  p: "p",
  text: "p",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  span: "span",
  blockquote: "blockquote",
  code: "code",
  caption: "figcaption",
  label: "label",
  button: "button",
};

const Typography = ({ type = "p", children, className }: TypographyProps) => {
  const Component = variantToTag[type] || "p";

  return (
    <Component
      className={cn(textVariants[type] || textVariants.default, className)}
    >
      {children}
    </Component>
  );
};

export { Typography, textVariants };
