import Image, { type ImageProps } from "next/image";

// next/image, but lets the placeholder .svg files through untouched.
export default function Img(props: ImageProps) {
  const isSvg = typeof props.src === "string" && props.src.endsWith(".svg");
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props} unoptimized={isSvg || props.unoptimized} />;
}
