import { html } from "npm:htl";

export function return_resized_img(src, width, height = width, style = "") {
  const height_px = height === "auto;" ? "auto;" : `${height}px`;
  return html` <img
    src="${src}"
    width="${width}px"
    height="${height_px}"
    style="${style}"
  />`;
}
