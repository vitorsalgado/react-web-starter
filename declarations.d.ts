declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.jpg";
declare module "*.png";
declare module "*.ico";
declare module "*.gif";
declare module "*.svg";
declare module "*.pdf";
declare module "*.txt";

declare module "react-router-dom";

interface Module {
  hot: {
    accept: (p1: string | string[], p2: () => void) =>void
  }
}

declare const module: Module;

declare const VARS: Record<string, string>;
