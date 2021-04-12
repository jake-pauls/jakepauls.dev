/* CSS */
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.css";
declare module "*.scss";

/* Fonts */
declare module "*.ttf";

/* Images */
declare module "*.svg" {
  const ref: string;
  export default ref;
}
declare module "*.gif" {
  const ref: string;
  export default ref;
}
declare module "*.jpg" {
  const ref: string;
  export default ref;
}
declare module "*.png" {
  const ref: string;
  export default ref;
}