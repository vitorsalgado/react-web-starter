declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.jpg";
declare module "*.png";
declare module "*.ico";
declare module "*.gif";
declare module "*.svg";

declare module "react-router-dom";
